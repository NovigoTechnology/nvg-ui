<template>
	<div>
		<label>{{ __(props.field.label) }}</label>
		<span
			v-if="props.field.required || props.field.reqd"
			style="color: #eb9091; margin-left: 0.5rem"
			>*</span
		>
		<div :class="{ flex: props.field.quick_entry }" class="relative">
			<AutoComplete
				v-model="inputValue[props.field.fieldname]"
				:key="refresh"
				ref="autoCompleteRef"
				:inputId="props.field.fieldname"
				:suggestions="translatedSuggestions"
				@complete="search"
				:placeholder="props.field.placeholder || props.field.label"
				:completeOnFocus="true"
				fluid
				:disabled="disabled"
				:class="{ 'p-inputtext:disabled': disabled }"
				@clear="clear_input"
				:size="props.size"
				@option-select="
					(e) => selectOption(suggestions[translatedSuggestions.indexOf(e.value)], field)
				"
				:optionLabel="(option) => option.label || option.value"
				:dropdown="
					props.field.fieldtype !== 'Table' &&
					!inputValue[props.field.fieldname] === '' &&
					inputValue[props.field.fieldname]
				"
				:invalid="
					(invalid_fields?.includes(props.field.fieldname) ||
						invalid_fields?.includes(props.field.label)) &&
					!inputValue[props.field.fieldname]
				"
				@click="
					() => {
						if (props.field.fieldtype === 'Table') {
							handleClick();
						}
					}
				"
				forceSelection
			>
				<template v-if="props.field.fieldtype !== 'Table' && !disabled" #dropdown>
					<button
						type="button"
						class="p-autocomplete-dropdown"
						@click.stop="clear_input"
					>
						<svg
							class="icon icon-sm"
							style="stroke: var(--p-inputtext-color)"
							aria-hidden="true"
						>
							<use href="#icon-close"></use>
						</svg>
					</button>
				</template>
				<template #option="slotProps">
					<div v-if="!slotProps.option.label && !slotProps.option.description">
						<strong>{{ slotProps.option.value }}</strong>
					</div>
					<div>
						<strong>{{
							__(slotProps.option.label) || __(slotProps.option.description)
						}}</strong>
						<div>{{ __(slotProps.option.description) }}</div>
					</div>
				</template>
			</AutoComplete>

			<Button
				v-if="props.field.quick_entry"
				:raised="true"
				severity="info"
				class="ml-4"
				size="small"
				@click="() => (createNew = !createNew)"
				:id="'new_' + props.field.fieldname"
			>
				<!-- @click="create_New(props.field.quick_entry, props.field.fieldname)" -->
				<span style="text-wrap: nowrap">
					{{ __("New {0}", [__(props.field.placeholder)]) }}</span
				>
			</Button>
		</div>
	</div>
	<!-- Replace QuickEntry component with a slot -->
	<slot
		name="quick-entry"
		v-if="createNew"
		:createNew="createNew"
		:field="props.field"
		:onUpdate="update_input"
		:onClose="() => (createNew = false)"
	></slot>
</template>

<script setup>
import { ref, onMounted, watch, reactive, onUnmounted } from "vue";
import AutoComplete from "primevue/autocomplete";
import Button from "primevue/button";

// Define props and emit
const props = defineProps({
	field: Object,
	disabled: Boolean,
	editOrCreateQuick: Function,
	size: String,
	invalid_fields: {
		type: Array,
		default: () => [],
	},
	filters: {
		type: [Object, String],
		default: () => ({}),
	},
	clearFilters: Boolean,
	store: Object,
	quickEntry: Boolean,
	clearInput: {
		type: Boolean,
		default: false,
	},
	needFilter: Boolean,
});

const emit = defineEmits(["update-autocomplete-value", "update-filter"]);

// Data
const store = props.store;
const inputValue = ref({});
const listData = ref([]);
const suggestions = ref([]);
const translatedSuggestions = ref([]);
const filters = ref({});
const createNew = ref(false);
const refresh = ref(false);

const autoCompleteRef = ref(null);

// Hooks
onMounted(() => {
	if (store.filters[props.field.fieldname]) {
		inputValue.value[props.field.fieldname] = store.filters[props.field.fieldname];
	}
	if (props.field.needFilter && props.filters[props.field.dependingField]) {
		getLinkOptions(props.field.options, props.filters);
	} else {
		getLinkOptions(props.field.options);
	}
});

watch(
	() => props.field.value,
	(newValue) => {
		inputValue.value[props.field.fieldname] = newValue; // Cuando le llega desde otro componente un campo con value ya determinado, asigna ese value al input.
	},
	{ deep: true, immediate: true },
);

watch(
	() => store.clear,
	() => {
		inputValue.value[props.field.fieldname] = "";
	},
);

watch(
	() => props.filters,
	(newValue) => {
		if (props.field.needFilter && newValue[props.field.dependingField]) {
			getLinkOptions(props.field.options, newValue);
		}
	},
	{ deep: true },
);

watch(
	() => props.clearFilters,
	(newValue) => {
		if (newValue) {
			inputValue.value[props.field.fieldname] = "";
		}
	},
);

watch(
	() => props.clearInput,
	(newVal) => {
		if (newVal) {
			clear_input();
		}
	},
);

// Methods
const update_input = (valueObj, field) => {
	inputValue.value[field.fieldname] = valueObj.label;
	store.dataForm[field.fieldname] = valueObj.value;
	store.fullDataForm[field.fieldname] = valueObj;
};

const clear_input = () => {
	store.dataForm[props.field.fieldname] = null; // Para que se borre el valor en el formulario final
	inputValue.value[props.field.fieldname] = null;
	store.filters[props.field.fieldname] = null;
	emit("update-autocomplete-value", null, props.field);
	if (props.field.provideFilter) {
		filters.value = {};
		store.autocompleteFilter = filters.value;
	}
	refresh.value = !refresh.value;

	getLinkOptions(props.field.options);
};

const selectOption = (selectedOption, field) => {
	if (field.fieldtype === "Table") {
	} else {
		store.dataForm[field.fieldname] = selectedOption.value;
		if (field.fieldname == "referring_physician") {
			store.physician = selectedOption;
		}
		store.fullDataForm[field.fieldname] = {
			value: selectedOption.value,
			label: selectedOption.label,
			description: selectedOption.description,
		};
	}

	const translatedValue =
		selectedOption.label || selectedOption.description || selectedOption.value;
	inputValue.value[field.fieldname] = __(translatedValue);

	if (field.provideFilter) {
		filters.value = {
			[field.fieldname]: selectedOption.value,
		};
		store.autocompleteFilter = filters.value;
	}

	store.filters[field.fieldname] = translatedValue;
	emit("update-autocomplete-value", selectedOption, field);

	if (field.clear_input_after_selection) {
		inputValue.value[field.fieldname] = null;
	}
};

const getLinkOptions = (doctype, filters = {}) => {
	if (props.quickEntry && props.filters) {
		filters = props.filters;
	}
	if (props.needFilter && props.filters) {
		filters = props.filters;
	}

	frappe.call({
		method: "frappe.desk.search.search_link",
		args: {
			doctype: doctype,
			txt: "",
			page_length: 0,
			filters: filters,
		},
		callback: (r) => {
			if (r.message) {
				listData.value = r.message;
			}
		},
	});
};

const search = (event) => {
	let _suggestions = listData.value.slice(0, 10);

	if (event.query) {
		const translatedList = listData.value.map((item) => ({
			original: item,
			translated: {
				description: item.description ? __(item.description) : item.description,
				label: item.label ? __(item.label) : item.label,
				value: item.value ? __(item.value) : item.value,
			},
		}));
		const queryLower = event.query.toLowerCase();

		const filtered = translatedList
			.filter((item) => {
				return (
					(item.translated.description &&
						item.translated.description.toLowerCase().includes(queryLower)) ||
					(item.translated.label &&
						item.translated.label.toLowerCase().includes(queryLower)) ||
					(item.translated.value &&
						item.translated.value.toLowerCase().includes(queryLower))
				);
			})
			.slice(0, 10);

		suggestions.value = filtered.map((item) => item.original);
		translatedSuggestions.value = filtered.map((item) => item.translated);
	} else {
		// Si no hay query, devolver las sugerencias originales
		suggestions.value = _suggestions;
		translatedSuggestions.value = _suggestions.map((item) => ({
			description: item.description ? __(item.description) : item.description,
			label: item.label ? __(item.label) : item.label,
			value: item.value ? __(item.value) : item.value,
		}));
	}
};

const handleClick = () => {
	// Forzamos la apertura del dropdown de sugerencias
	if (autoCompleteRef.value && typeof autoCompleteRef.value.show === "function") {
		autoCompleteRef.value.show();
	}
};

onUnmounted(() => {
	clear_input();
});
</script>

<style>
.p-disabled {
	opacity: 1 !important;
	background: var(--p-inputtext-disabled-background);
	color: var(--p-inputtext-disabled-color);
}

.custom-button {
	border: 1px solid var(--p-inputtext-border-color);
}

:deep(.p-autocomplete-fluid) {
	width: 100%;
}
</style>

<template>
	<div>
		<div class="flex items-center mb-2">
			<label>{{ __(props.field.label) }}</label>
			<span
				v-if="props.field.required || props.field.reqd"
				style="color: #eb9091; margin-left: 0.5rem"
				>*</span
			>
		</div>
		<div :class="{ flex: props.field.quick_entry }" class="relative">
			<AutoComplete
				v-if="isTable"
				:v-model="inputValue[props.field.fieldname]"
				:key="refresh + props.field.fieldname"
				ref="autoCompleteRef"
				:inputId="props.field.fieldname"
				:suggestions="translatedSuggestions"
				@complete="search"
				:placeholder="__(props.field.placeholder) || __(props.field.label)"
				:completeOnFocus="true"
				fluid
				:disabled="disabled || props.field.read_only ? true : false"
				:class="{ 'p-inputtext:disabled': disabled }"
				@clear="() => clear_input"
				:size="props.size"
				@update:modelValue="(e) => e === '' && clear_input()"
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

			<AutoComplete
				v-else
				v-model="inputValue[props.field.fieldname]"
				:key="refresh"
				ref="autoCompleteRef"
				:inputId="props.field.fieldname"
				:suggestions="translatedSuggestions"
				@complete="search"
				:placeholder="__(props.field.placeholder) || __(props.field.label)"
				:completeOnFocus="true"
				fluid
				:disabled="disabled || props.field.read_only ? true : false"
				:class="{ 'p-inputtext:disabled': disabled }"
				@clear="() => clear_input"
				:size="props.size"
				@update:modelValue="(e) => e === '' && clear_input()"
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
	<slot
		name="quick-entry"
		v-if="createNew"
		:field="props.field"
		:createNew="createNew"
		:on-update="(value, field) => update_input(value, field, field.fieldname)"
		:on-close="closeQuickEntry"
	></slot>
</template>

<script setup>
import { ref, onMounted, watch, onUnmounted } from "vue";
import AutoComplete from "primevue/autocomplete";
import Button from "primevue/button";
import emitter from "../mitt/mitt";

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
	editing: Boolean,
	delInputValue: String,
	isTable: Boolean,
});

const emit = defineEmits(["update-autocomplete-value", "update-filter", "update-data"]);

// Data
const store = props.store;
const listData = ref([]);
const filters = ref({});
const createNew = ref(false);
const refresh = ref(false);
const autoCompleteRef = ref(null);
const inputValue = ref({});
const suggestions = ref([]);
const translatedSuggestions = ref([]);

// Hooks
onMounted(() => {
	if (props.field.dependingField) {
		emitter.on(props.field.dependingField + "_cleared", () => {
			clear_input();
			getLinkOptions(props.field.options, {});
		});
		emitter.on(props.field.dependingField + "_updated", () => {
			clear_input();
			getLinkOptions(props.field.options);
		});
	}
	if (store.filters && store.filters[props.field.fieldname]) {
		if (store.filters) {
			inputValue.value[props.field.fieldname] = store.filters[props.field.fieldname];
		}
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
		if (newValue) {
			inputValue.value[props.field.fieldname] = newValue;
			emit("update-data", newValue, props.field);
		} else {
			inputValue.value[props.field.fieldname] = newValue;
		}
	},
	{ immediate: true },
);

watch(
	() => props.clearFilters,
	() => {
		clear_input();
	},
	{ deep: true },
);

watch(
	() => props.filters,
	(newValue) => {
		if (props.field.needFilter && props.field.dependingField) {
			if (newValue && newValue[props.field.dependingField]) {
				getLinkOptions(props.field.options, {
					[props.field.dependingField]: newValue[props.field.dependingField],
				});
			} else {
				clear_input();
			}
		}
	},
	{ deep: true },
);

watch(
	() => props.clearInput,
	(newVal) => {
		if (newVal) {
			clear_input();
		}
	},
);

watch(
	() => store.edited,
	(newValue) => {
		update_input(
			{
				label: newValue.first_name + " " + newValue.last_name,
				value: newValue.name,
			},
			null,
			newValue.editingFieldname,
		);
	},
	{ deep: true },
);
watch(
	() => props.delInputValue,
	(newValue) => {
		if (newValue) {
			inputValue.value[newValue] = "";
			store.dataForm[newValue] = null;
			if (store.fullDataForm) {
				store.fullDataForm[newValue] = null;
			}
			refresh.value = !refresh.value;
		}
	},
);

// Methods
const update_input = (valueObj, field, fieldname) => {
	let editingFieldname = "";
	field?.fieldname ? (editingFieldname = field.fieldname) : (editingFieldname = fieldname);
	inputValue.value[editingFieldname] = valueObj.label;
	store.dataForm[editingFieldname] = valueObj.value;
	if (store.fullDataForm) {
		store.fullDataForm[editingFieldname] = valueObj;
	}
	refresh.value = !refresh.value;
};

const closeQuickEntry = () => {
	createNew.value = false;
};

const clear_input = () => {
	store.dataForm[props.field.fieldname] = null;
	inputValue.value[props.field.fieldname] = null;
	if (store.filters) {
		store.filters[props.field.fieldname] = null;
	}

	if (props.field.hasDependencies) {
		emitter.emit(props.field.fieldname + "_cleared");
	}

	emit("update-autocomplete-value", null, props.field);
	if (props.field.provideFilter) {
		filters.value = {};
		store.autocompleteFilter = filters.value;
		props.field.value = null;
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
		if (store.fullDataForm) {
			store.fullDataForm[field.fieldname] = {
				value: selectedOption.value,
				label: selectedOption.label,
				description: selectedOption.description,
			};
		}
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

	if (store.filters) {
		store.filters[field.fieldname] = translatedValue;
	}
	emit("update-autocomplete-value", selectedOption, field);

	if (props.field.hasDependencies) {
		emitter.emit(props.field.fieldname + "_updated");
	}

	if (field.clear_input_after_selection) {
		inputValue.value[field.fieldname] = null;
		refresh.value = !refresh.value;
	}
};

const getLinkOptions = (doctype, filters = {}) => {
	let finalFilters = { ...filters };

	// Si estamos en quickEntry, usar los filtros de props
	if (props.quickEntry && props.filters) {
		finalFilters = { ...finalFilters, ...props.filters };
	}

	// Si el campo necesita filtros, asegurarse de que existan
	if (props.field.needFilter && props.filters) {
		const dependingFieldValue = props.filters[props.field.dependingField];
		if (dependingFieldValue) {
			finalFilters[props.field.dependingField] = dependingFieldValue;
		}
	}

	frappe.call({
		method: "frappe.desk.search.search_link",
		args: {
			doctype: doctype,
			txt: "",
			page_length: 0,
			filters: finalFilters,
		},
		callback: (r) => {
			if (r.message) {
				listData.value = r.message;
			} else {
				listData.value = [];
			}
		},
	});
};

const removeAccents = (str) => {
	if (!str) return "";
	return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
};

const search = (event) => {
	let _suggestions = listData.value.slice(0, 10);

	if (event.query) {
		const queryNorm = removeAccents(event.query.toLowerCase());

		const translatedList = listData.value.map((item) => ({
			original: item,
			translated: {
				description: item.description ? __(item.description) : item.description,
				label: item.label ? __(item.label) : item.label,
				value: item.value ? __(item.value) : item.value,
			},
		}));

		const filtered = translatedList
			.filter((item) => {
				const desc = item.translated.description
					? removeAccents(item.translated.description.toLowerCase())
					: "";
				const label = item.translated.label
					? removeAccents(item.translated.label.toLowerCase())
					: "";
				const value = item.translated.value
					? removeAccents(item.translated.value.toLowerCase())
					: "";

				return (
					desc.includes(queryNorm) ||
					label.includes(queryNorm) ||
					value.includes(queryNorm)
				);
			})
			.slice(0, 10);

		suggestions.value = filtered.map((item) => item.original);
		translatedSuggestions.value = filtered.map((item) => item.translated);
	} else {
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
	if (props.field.dependingField) {
		emitter.off(props.field.dependingField + "_cleared");
		emitter.off(props.field.dependingField + "_updated");
	}

	if (props.editing && !props.field.value) {
		clear_input();
	}
	if (props.quickEntry) {
		clear_input();
	}
});
</script>

<style>
.p-autocomplete-overlay {
	z-index: 2000 !important;
}
</style>

<style scoped>
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

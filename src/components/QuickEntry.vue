<template>
	<Dialog
		v-model:visible="visible"
		:modal="true"
		@after-hide="emit('close-modal', false)"
		class="dialog-container"
		:draggable="false"
	>
		<template #header>
			<span class="font-medium">{{ __("Create New {0}", [props.field.placeholder]) }}</span>
		</template>

		<div class="fields-grid">
			<div v-for="section in sectionFields" :key="section.title" class="section-container">
				<div
					class="section-title-container"
					:style="{ cursor: section.collapsible ? 'pointer' : 'default' }"
					@click="toggleSectionVisibility(section)"
				>
					<h5 class="section-title">{{ section.title }}</h5>
					<span v-if="section.collapsible" :id="section.id">
						<svg
							v-if="!sectionState[section.title]"
							class="es-icon es-line icon-md"
							aria-hidden="true"
						>
							<use class="btn-arrow" href="#es-line-down"></use>
						</svg>

						<svg v-else class="es-icon es-line icon-md" aria-hidden="true">
							<use class="btn-arrow" href="#es-line-up"></use>
						</svg>
					</span>
				</div>

				<div
					class="section-fields"
					:style="{ gridTemplateColumns: `repeat(${section.grids}, 1fr)` }"
					v-if="sectionState[section.title]"
				>
					<div
						v-for="field in section.fields"
						:key="field.fieldname"
						class="container-fields"
					>
						<div v-if="field.fieldtype != 'Link' && field.fieldtype != 'Check'">
							<label> {{ __(field.label) }}</label>
							<span
								v-if="field.fieldtype != 'Link' && (field.required || field.reqd)"
								class="required-fields"
								>*</span
							>
						</div>
						<div v-if="field.fieldtype === 'Data'">
							<div>
								<InputText
									v-model="fieldValues[field.fieldname]"
									@input="update_fields_value($event, field)"
									:placeholder="__(field.label)"
									fluid
									size="small"
									:invalid="
										missingFields?.includes(field.label) &&
										!fieldValues[field.fieldname]
									"
									@blur="handleBlur(field)"
									:disabled="field.disabled"
									:id="field.fieldname"
								/>
							</div>
						</div>

						<div v-else-if="field.fieldtype === 'Numeric'">
							<InputNumber
								v-model="fieldValues[field.fieldname]"
								@input="update_fields_value($event, field)"
								:placeholder="__(field.label)"
								fluid
								size="small"
								:invalid="
									missingFields?.includes(field.label) &&
									!fieldValues[field.fieldname]
								"
								:disabled="field.disabled"
							/>
						</div>

						<div v-else-if="field.fieldtype === 'Select'">
							<div>
								<Select
									:v-model="fieldValues[field.fieldname]"
									@change="update_fields_value($event, field)"
									:placeholder="__(field.label)"
									fluid
									size="small"
									:invalid="
										missingFields?.includes(field.label) &&
										!fieldValues[field.fieldname]
									"
									:options="selectOptions(field)"
								/>
							</div>
						</div>

						<div v-else-if="field.fieldtype === 'Date'">
							<div>
								<DatePicker
									v-model="dateVModel"
									@date-select="update_fields_value($event, field)"
									showButtonBar
									:placeholder="__(field.label)"
									:maxDate="new Date()"
									fluid
									size="small"
									:invalid="missingFields?.includes(field.label)"
									@input="inputDate($event, field)"
									@clear-click="deleteDateFilter(field)"
								/>
							</div>
						</div>

						<div v-else-if="field.fieldtype === 'Link'">
							<AutoComplete
								:key="field.fieldname"
								:field="field"
								@update-autocomplete-value="update_autocomplete_value"
								:filters="field.link_filters"
								:store="store"
								:size="'small'"
								:invalid_fields="missingFields"
								:quickEntry="true"
								:clearInput="clearAutocompleteInputs"
								:disabled="field.disabled"
							/>
						</div>

						<!-- <div v-else-if="field.fieldtype === 'Phone'">
							<Phone
								:field="field"
								@update-phone="update_fields_value"
								@invalid-phone="setInvalidInput"
							/>
						</div> -->

						<div
							v-else-if="field.fieldtype === 'Check'"
							:style="{
								display: 'flex',
								alignItems: 'center',
								marginLeft: '0.5rem',
								marginTop: field.customizedStyle ? '0.5rem' : '',
								marginBottom: field.customizedStyle ? '0.5rem' : '',
							}"
						>
							<input
								type="checkbox"
								:checked="fieldValues[field.fieldname]"
								@change="update_fields_value($event, field)"
								:id="field.fieldname"
							/>
							<label :for="field.fieldname" class="label-question">{{
								__(field.label)
							}}</label>
						</div>
						<!-- <div
							v-else-if="field.fieldtype === 'Identification'"
							class="identification-container"
						>
							<Identification
								:field="field"
								:disabled="false"
								:store="store"
								:invalid_fields="missingFields"
								@update:fields="handleIdentificationUpdate"
								@invalid-id="setInvalidInput"
								:fieldValues="fieldValues"
								@identification-types-loaded="
									(types) => {
										identifications = types.length;
									}
								"
							/>
							<Button
								v-if="field.allow_more"
								severity="info"
								text
								@click.stop="addIdentification(field)"
								class="button-identification"
								:disabled="quantityIdentification === identifications"
							>
								<template #icon>
									<svg class="icon icon-sm">
										<use href="#icon-add"></use>
									</svg>
								</template>
							</Button>
							<Button
								v-if="field.remove"
								severity="danger"
								text
								class="button-identification"
								@click.stop="removeIdentification(field)"
							>
								<template #icon>
									<svg class="icon icon-sm">
										<use href="#icon-remove"></use>
									</svg>
								</template>
							</Button>
						</div> -->
					</div>
				</div>
			</div>
		</div>

		<template #footer>
			<div class="pt-2">
				<Button
					:raised="true"
					@click="create"
					severity="info"
					size="small"
					:disabled="disabledButton"
					:id="'create_' + props.field.fieldname"
				>
					<span>{{ __("Create") }}</span>
				</Button>
			</div>
		</template>
	</Dialog>
</template>

<script setup>
import { onMounted, ref, computed, watch, reactive, onBeforeUnmount } from "vue";
// Cambiar estas importaciones para importar directamente desde primevue
import Dialog from "primevue/dialog";
import Button from "primevue/button"; 
import InputText from "primevue/inputtext";
import InputNumber from "primevue/inputnumber";
import Select from "primevue/select";
import DatePicker from "primevue/datepicker";
import AutoComplete from "primevue/autocomplete";
import { useToast } from "primevue/usetoast";

// import Phone from "./Phone.vue";
// import Identification from "./Identification.vue";
import { debounce } from "lodash";

// Define props and emits
const props = defineProps({
	createNew: Boolean,
	field: Object,
    store: Object,
});
const emit = defineEmits(["close-modal", "update-autocomplete-input", "refresh"]);

// Data
const store = props.store
const quickEntryFields = ref([]);
const visible = ref(false);
const fieldValues = ref({});
const toast = useToast();
const missingFields = ref([]);
const originalValue = ref({});
const disabledButton = ref(false);
const dateVModel = ref(null);
const clearAutocompleteInputs = ref(undefined);
const hasDependenciesField = ref();
const sectionState = reactive({});
const quantityIdentification = ref(1);
const identifications = ref(0);

// Hooks
onMounted(() => {
	window.addEventListener("popstate", handlePopState);
	visible.value = !visible.value;
	loadQuickEntry(props.field.quick_entry);
	hasDependenciesField.value = quickEntryFields.value.find((field) => field.dependentFields);
	quickEntryFields.value?.forEach((field) => {
		if (field.fieldtype === "Section Break") {
			sectionState[field.label || ""] = field.collapsible ? false : true;
		}
	});
});

onBeforeUnmount(() => {
	window.removeEventListener("popstate", handlePopState);
});

const handlePopState = () => {
	if (visible.value) {
		visible.value = false;
		emit("close-modal", false);
	}
};

watch(
	() => fieldValues.value[hasDependenciesField.value?.fieldname],
	(newVal) => {
		if (!newVal && hasDependenciesField.value) {
			hasDependenciesField.value.dependentFields.forEach((dependentField) => {
				fieldValues.value[dependentField] = null;
				const autocompleteFieldToDelete = quickEntryFields.value.find(
					(field) => field.fieldname === dependentField,
				);
				autocompleteFieldToDelete.value = null;
			});
		}
	},
);

// Methods

/**
 * Adds a new identification field to the quick entry fields array
 * @param {Object} field - The base field object to be cloned
 *
 * The function:
 * - Creates a deep copy of the input field
 * - Modifies the fieldname by appending an incremented ID
 * - Sets the label to "Identification" + ID number
 * - Marks the field as removable
 * - Disables adding more fields
 * - Sets as non-primary field
 * - Pushes an empty object and the new field to quickEntryFields
 * - Increments the identification counter
 */
const addIdentification = (field) => {
	const newField = JSON.parse(JSON.stringify(field));
	newField.fieldname = newField.fieldname + "-" + quantityIdentification.value;
	newField.label = __("Identification ") + quantityIdentification.value;
	newField.remove = true;
	newField.allow_more = false;
	newField.is_primary = false;

	quickEntryFields.value.push({}, newField);
	quantityIdentification.value++;
};

/**
 * Removes a pair of identification fields from the quick entry form.
 * If the index is less than 2, removes fields starting from index 0,
 * otherwise removes fields starting from index - 1.
 * Also decrements the identification counter.
 *
 * @param {Object} field - The identification field object to remove
 * @param {string} field.fieldname - The name of the field to remove
 */
const removeIdentification = (field) => {
	const index = quickEntryFields.value.findIndex(
		(identificationField) => identificationField.fieldname === field.fieldname,
	);
	if (index !== -1) {
		const spliceIndex = index < 2 ? 0 : index - 1;
		quickEntryFields.value.splice(spliceIndex, 2);
		quantityIdentification.value--;
	}
};

/**
 * Toggles the visibility of a section if it is collapsible.
 *
 * @param {Object} section - The section object to toggle
 * @param {string} section.title - The title of the section used as key in sectionState
 * @param {boolean} section.collapsible - Whether the section can be collapsed
 *
 * @example
 * toggleSectionVisibility({
 *   title: 'My Section',
 *   collapsible: true
 * })
 */
const toggleSectionVisibility = (section) => {
	if (section.collapsible) {
		sectionState[section.title] = !sectionState[section.title];
	}
};

/**
 * Loads quick entry form for a specified document type
 *
 * @param {string} doctype - The document type to load quick entry form for
 *
 * This function:
 * 1. Formats the doctype name by removing spaces to create form name
 * 2. Checks if a custom quick entry form exists in frappe.ui.form
 * 3. If exists:
 *    - Creates new instance of the custom quick entry form
 *    - If the form has get_standard_fields method, gets fields from it
 *    - Otherwise falls back to getting metadata
 * 4. If no custom form exists, falls back to getting metadata
 */
const loadQuickEntry = (doctype) => {
	let quickEntryForm = doctype.split(" ").join("") + "QuickEntryForm";
	if (frappe.ui.form[quickEntryForm]) {
		const quickEntry = new frappe.ui.form[quickEntryForm]();

		if (quickEntry && quickEntry.get_standard_fields) {
			quickEntryFields.value = quickEntry.get_standard_fields();
		} else {
			get_meta(doctype);
		}
	} else {
		get_meta(doctype);
	}
};

const get_meta = async (doctype) => {
	await frappe.model.with_doctype(doctype, () => {
		let quickEntry = [];
		let meta = frappe.get_meta(doctype);

		let allowInQuickEntry = meta.fields.filter((field) => field.allow_in_quick_entry);
		quickEntry.push(...allowInQuickEntry);
		let requiredFields = meta.fields.filter((field) => field.reqd);
		quickEntry.push(...requiredFields);
		quickEntryFields.value = quickEntry;
	});
};

/**
 * @description Utility functions for handling form fields in QuickEntry component
 *
 * @function selectOptions
 * @param {Object} field - The field object containing options array
 * @returns {Array} translatedOptions - Array of translated option values
 * @description Translates field options and maintains mapping of translated to original values
 *
 * @function inputDate
 * @param {Event} event - The input event object
 * @param {Object} field - The field object containing fieldname
 * @description Handles date input with the following features:
 * - Validates numeric input only
 * - Automatically adds separators after dd and mm
 * - Validates date format (dd-mm-yyyy)
 * - Prevents future dates
 * - Converts date to user format
 * - Updates field values on valid date
 * - Shows error toasts for invalid dates
 * - Limits input to 10 characters
 */
const selectOptions = (field) => {
	const translatedOptions = [];
	field.options.forEach((option) => {
		originalValue.value[__(option)] = option;
		translatedOptions.push(__(option));
	});
	return translatedOptions;
};

const inputDate = (event, field) => {
	if (event.data && !Number(event.data) && event.data != "0") {
		event.target.value = event.target.value.slice(0, -1);
		return;
	}
	let date = event.target.value;

	if (event.inputType == "deleteContentBackward") {
		if (!event.target.value) {
			fieldValues.value[field.fieldname] = null;
		}

		return;
	}

	if (date.length == 2 || date.length == 5) {
		event.target.value += "-";
	} else if (date.length == 10) {
		date = event.target.value;
		date = date.split("-").reverse().join("-");

		const validationDate = new Date(date);
		const today = new Date();

		if (validationDate > today) {
			toast.add({
				severity: "error",
				summary: __("Date can't be in the future."),
				life: 4000,
			});
			return;
		}

		if (frappe.datetime.str_to_user(date) == "Invalid date") {
			let dateForError = date.split("-").reverse().join("-");
			toast.add({
				severity: "error",
				summary: __("Date error."),
				detail: __("{0} is not a valid date. Please use the format dd-mm-yyyy.", [dateForError,]), // prettier-ignore
				life: 4000,
			});
			dateVModel.value = "";
			fieldValues.value[field.fieldname] = "";
		} else {
			dateVModel.value = frappe.datetime.str_to_user(date);
			fieldValues.value[field.fieldname] = date;
		}
	} else if (date.length > 10) {
		event.target.value = date.slice(0, 10);
	}
};

const deleteDateFilter = (field) => {
	fieldValues.value[field.fieldname] = null;
};

/**
 * Updates the values of form fields based on user input.
 *
 * @param {Event} event - The event object triggered by the input change
 * @param {Object} field - The field object containing field properties
 * @property {string} field.fieldname - Name of the field
 * @property {string} field.fieldtype - Type of the field (Numeric, Date, Check, Phone, Data, Select)
 *
 * Handles different field types:
 * - email: Triggers validation and updates value
 * - Numeric: Updates with numeric value from event
 * - Date: Converts date to ISO format and updates both display and stored value
 * - Check: Updates with checkbox checked state
 * - Phone: Updates with phone number value
 * - Data: Trims input and capitalizes first letter
 * - Select: Updates with original value based on selection
 *
 * Updates values in fieldValues.value reactive object
 */
const update_fields_value = (event, field) => {
	// Save filled data to create the register
	if (field.fieldname == "email") {
		debouncedValidation(field);
		fieldValues.value[field.fieldname] = event.target.value.toLowerCase();
		return;
	} else if (field.fieldtype == "Numeric") {
		fieldValues.value[field.fieldname] = event.originalEvent.target.value;
		return;
	} else if (field.fieldtype == "Date") {
		if (!event) return (fieldValues.value[field.fieldname] = null);
		let date = event.toISOString().split("T")[0];
		dateVModel.value = frappe.datetime.str_to_user(date);
		fieldValues.value[field.fieldname] = date;
		return;
	} else if (field.fieldtype == "Check") {
		fieldValues.value[field.fieldname] = event.target.checked;
		return;
	} else if (field.fieldtype == "Phone") {
		fieldValues.value[field.fieldname] = event;
	} else if (field.fieldtype == "Data") {
		let data = event.target.value.trim();
		if (data.length > 0) {
			data = data.charAt(0).toUpperCase() + data.slice(1);
		}
		fieldValues.value[field.fieldname] = data;
	} else if (field.fieldtype === "Select") {
		fieldValues.value[field.fieldname] = originalValue.value[event.value];
		return;
	}
};

const update_autocomplete_value = (value, field) => {
	// Save filled data to create the register
	if (value?.value) {
		fieldValues.value[field.fieldname] = value?.value;
	} else if (value) {
		fieldValues.value[field.fieldname] = value;
	}
};

/**
 * Creates a new record using the quick entry form data
 *
 * @async
 * @function create
 *
 * Process:
 * 1. Transforms field values and handles identification fields specially
 * 2. Validates required fields
 * 3. Makes API call to save the document
 * 4. Handles success/error responses
 *
 * @throws {Toast} Error notification if required fields are missing
 * @emits refresh - When document is successfully created
 * @emits update-autocomplete-input - Updates autocomplete with new entry
 *
 * State Management:
 * - Updates disabledButton.value to control form submission
 * - Updates clearAutocompleteInputs.value to handle input clearing
 * - Updates missingFields.value to track validation
 * - Updates visible.value to control modal visibility
 * - Updates store.physician for physician-specific entries
 *
 * Note: Contains temporary hardcoded logic for physician handling that needs refactoring
 */
const create = async () => {
	const transformedValues = { ...fieldValues.value };
	let identifications_to_create = [];
	Object.entries(fieldValues.value).forEach(([key, value]) => {
		if (key.startsWith("identification")) {
			if (value) {
				const [type, data] = value.split("-");
				const field = sectionFields.value
					.find((field) => field.fieldname?.toLowerCase() === "identification")
					.fields.find((field) => field.fieldname === key);
				identifications_to_create.push({
					identification: data,
					identification_type: type,
					is_primary: field.is_primary,
				});
			}
			delete transformedValues[key];
		}
	});

	if (identifications_to_create.length > 0) {
		transformedValues["identifications_to_create"] = identifications_to_create;
	}

	disabledButton.value = true;
	clearAutocompleteInputs.value = false;

	const requiredFields = quickEntryFields.value.filter((field) => field.reqd);
	missingFields.value = requiredFields
		.filter((field) => !fieldValues.value[field.fieldname])
		.map((field) => field.label);
	if (missingFields.value.length > 0) {
		let missingFieldsText = missingFields.value.join(", ");
		toast.add({
			severity: "error",
			summary: __("Missing required fields to create a {0}", [props.field.placeholder]),
			detail: __("Please fill all the required fields: {0}", [missingFieldsText]),
			life: 5000,
		});
		disabledButton.value = false;
		return;
	}
	clearAutocompleteInputs.value = true;
	frappe.call({
		method: "frappe.client.save",
		args: {
			doc: {
				doctype: props.field.quick_entry,
				...transformedValues,
			},
		},
		callback: (r) => {
			if (r.message) {
				toast.add({
					severity: "success",
					summary: __("{0} created successfully", [props.field.placeholder]),
					detail: __("The information has been saved successfully"),
					life: 5000,
				});
				visible.value = !visible.value;
				identifications_to_create = [];
				// # TODO: HARDCODE ALERT (Cuando se arregle physician y su titulo, se puede deshardcodear)
				emit("refresh");
				let obj = {};
				if (props.field.fieldname === "referring_physician") {
					obj = {
						value: r.message.name,
						label: r.message.first_name + " " + r.message.last_name,
						description:
							r.message.name +
							", " +
							r.message.q_ident_type +
							": " +
							r.message.q_ident_data,
					};
					store.physician = obj;
				} else {
					obj = {
						value: r.message.name,
						label: r.message.first_name + " " + r.message.last_name,
					};
				}
				emit("update-autocomplete-input", obj, props.field);

				// # END TODO
			}
			disabledButton.value = false;
		},
	});
};

const evalShowInput = (condition, field) => {
	if (condition.startsWith("eval:")) {
		const expr = condition.slice(5);
		try {
			return Function("doc", "return " + expr)(fieldValues.value);
		} catch (e) {
			console.error(__("Error evaluating condition:"), condition, e);
			return false;
		}
	} else {
		try {
			return Function("field", "return " + condition)(field);
		} catch (e) {
			console.error(__("Error evaluating simple condition:"), condition, e);
			return false;
		}
	}
};

/**
 * Computed property that organizes form fields into sections
 *
 * @computed sectionFields
 * @returns {Array} Array of section objects with the following structure:
 *   - title {String} Section title
 *   - fields {Array} Array of field objects within the section
 *   - collapsible {Boolean} Whether the section can be collapsed
 *   - fieldname {String} Name of the section field
 *   - grids {Array} Grid configuration for the section
 *
 * The function:
 * - Filters fields based on dependencies using evalShowInput
 * - Handles mandatory field dependencies
 * - Groups fields between Section Breaks into sections
 * - Skips Column Break fields
 * - Evaluates field visibility and required status based on conditions
 */
const sectionFields = computed(() => {
	const sections = [];
	let currentSection = { title: "", fields: [], collapsible: false, fieldname: "" };

	quickEntryFields.value.forEach((field) => {
		if (field.depends_on && !evalShowInput(field.depends_on, field)) {
			return;
		}

		if (field.mandatory_depends_on) {
			field.disabled = !evalShowInput(field.mandatory_depends_on, field);
			field.reqd = evalShowInput(field.mandatory_depends_on, field);
		}

		if (field.fieldtype === "Section Break") {
			if (currentSection.fields.length > 0 || currentSection.title) {
				sections.push(currentSection);
			}

			currentSection = {
				title: field.label || "",
				fields: [],
				collapsible: field.collapsible,
				fieldname: field.fieldname,
				grids: field.grids,
			};
		} else if (field.fieldtype === "Column Break") {
			// Ignorar Column Break
		} else {
			currentSection.fields.push(field);
		}
	});

	if (currentSection) {
		sections.push(currentSection);
	}
	return sections;
});

const validateFieldFormat = (field) => {
	if (field.fieldname === "email") {
		const emailRegex =
			/^[a-zA-Z0-9_]+(\.[a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+(\.[a-zA-Z0-9_]+)*\.[a-zA-Z]{2,5}$/;

		if (!fieldValues.value[field.fieldname]) {
			setInvalidInput(false, field);
		} else {
			setInvalidInput(
				!emailRegex.test(fieldValues.value[field.fieldname]),
				field,
				__("Email Error"),
				__("Invalid format. Verify the given email"),
			);
		}
	}
};

const handleBlur = (field) => {
	debouncedValidation.cancel();
	validateFieldFormat(field);
};

const debouncedValidation = debounce((field) => {
	validateFieldFormat(field);
}, 10000);

const setInvalidInput = (isInvalid, field, summaryError, detailError) => {
	if (!summaryError) summaryError = __("Error");
	if (!detailError) detailError = __("Invalid {0} format", [field.label]);
	if (isInvalid) {
		toast.add({
			severity: "error",
			summary: summaryError,
			detail: detailError,
			life: 3000,
		});
		missingFields.value.push(field.label);
		disabledButton.value = true;
	} else {
		missingFields.value = missingFields.value.filter((item) => item !== field.label);
		disabledButton.value = false;
	}
};
</script>

<style scoped>
.fields-grid {
	display: flex;
	flex-direction: column;
	gap: 10px;
}

.section-container {
	border: 1px solid var(--border-color);
	padding: 6px;
	border-radius: 8px;
}

.section-title-container {
	display: flex;
	justify-content: space-between;
}

.section-title {
	margin-bottom: 6px;
	color: #0ea5e9;
}

.section-fields {
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	column-gap: 16px;
	row-gap: 8px;
}

.dialog-container {
	width: 60vw;
}

.font-medium {
	font-size: medium;
}

.container-fields {
	position: relative;
}

.required-fields {
	color: #eb9091 !important;
	margin-left: 0.5rem;
}

.identification-container {
	display: flex;
	align-items: center;
}

.button-identification {
	width: 35px;
}
</style>

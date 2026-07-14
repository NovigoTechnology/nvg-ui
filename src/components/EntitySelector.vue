<template>
  <div class="form-field">
    <div :class="{ 'field-with-buttons': showAddButton || showEditButton }">
      <FloatLabel variant="on">
        <AutoComplete
          :field="fieldConfig"
          :query="props.query"
          :custom-call="props.customCall"
          :filters="fieldConfig.filters"
          :invalid_fields="props.invalid ? [props.fieldname] : []"
          :page-length="props.pageLength"
          :disabled="props.disabled"
          @update-autocomplete-value="onItemSelected"
          @clear-row="onClear"
        />
        <label :for="fieldConfig.fieldname">
          {{ label }}
          <span v-if="required" class="required">*</span>
        </label>
      </FloatLabel>

      <!-- Action buttons (add/edit) -->
      <template v-if="showAddButton || showEditButton">
        <Button
          v-if="showAddButton"
          icon="pi pi-plus"
          severity="secondary"
          :disabled="disableAdd"
          @click="onAdd"
        />
        <Button
          v-if="showEditButton"
          icon="pi pi-pencil"
          severity="secondary"
          :disabled="!modelValue || disableEdit"
          @click="onEdit"
        />
      </template>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import AutoComplete from './AutoComplete.vue';
import Button from 'primevue/button';
import FloatLabel from 'primevue/floatlabel';

const props = defineProps({
  /**
   * DocType to link to (e.g., "Customer", "Supplier", "Item")
   */
  doctype: {
    type: String,
    required: true,
  },
  /**
   * Field name (e.g., "customer", "supplier")
   */
  fieldname: {
    type: String,
    required: true,
  },
  /**
   * Label to display
   */
  label: {
    type: String,
    required: true,
  },
  /**
   * Current value
   */
  modelValue: {
    type: String,
    default: null,
  },
  /**
   * Is field required?
   */
  required: {
    type: Boolean,
    default: false,
  },
  /**
   * Show full item data on selection
   */
  fullitem: {
    type: Boolean,
    default: false,
  },
  /**
   * Show add button
   */
  showAddButton: {
    type: Boolean,
    default: true,
  },
  /**
   * Show edit button
   */
  showEditButton: {
    type: Boolean,
    default: true,
  },
  /**
   * Disable add button
   */
  disableAdd: {
    type: Boolean,
    default: false,
  },
  /**
   * Disable edit button
   */
  disableEdit: {
    type: Boolean,
    default: false,
  },
  /**
   * Filters for autocomplete
   */
  filters: {
    type: Object,
    default: () => ({}),
  },
  /**
   * Custom query function for autocomplete
   */ query: {
    type: String,
    default: null,
  },
  /**
   * Calls { method, args } directly instead of going through query/search_link.
   * Use for whitelisted methods that don't follow the standard
   * (doctype, txt, searchfield, start, page_len, filters) link-query signature.
   */
  customCall: {
    type: Object,
    default: null,
  },
  invalid: {
    type: Boolean,
    default: false,
  },
  pageLength: {
    type: Number,
    default: 10,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(['update:modelValue', 'item-selected', 'clear', 'add', 'edit']);

const fieldConfig = computed(() => ({
  fieldname: props.fieldname,
  fieldtype: 'Link',
  label: props.label,
  options: props.doctype,
  reqd: props.required ? 1 : 0,
  value: props.modelValue,
  filters: props.filters,
}));

const onItemSelected = (option, field) => {
  emit('update:modelValue', option?.value);
  emit('item-selected', option);
};

const onClear = field => {
  emit('update:modelValue', null);
  emit('clear');
};

const onAdd = () => {
  emit('add');
};

const onEdit = () => {
  emit('edit');
};
</script>

<!--
Usage Example:

<EntitySelector
	doctype="Customer"
	fieldname="customer"
	label="Customer"
	v-model="customerValue"
	:required="true"
	@item-selected="onCustomerSelected"
	@edit="onEditCustomer"
/>
-->

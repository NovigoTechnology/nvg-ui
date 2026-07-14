<template>
  <div>
    <div class="relative">
      <FloatLabel variant="on">
        <AutoComplete
          :key="refresh"
          ref="autoCompleteRef"
          v-model="inputValue[props.field.fieldname]"
          :data-web="props.dataweb"
          :input-id="props.field.fieldname"
          :suggestions="translatedSuggestions"
          :complete-on-focus="true"
          fluid
          :disabled="disabled || (props.field.read_only && !props.filter_list) ? true : false"
          :class="{ 'p-inputtext:disabled': disabled }"
          :size="props.size"
          :option-label="option => option.label || option.description || option.value"
          :invalid="
            (invalid_fields?.includes(props.field.fieldname) ||
              invalid_fields?.includes(props.field.label)) &&
            !inputValue[props.field.fieldname]
          "
          @clear="() => clear_input(true)"
          @complete="e => getLinkOptions(props.field.options, {}, e.query)"
          @option-select="e => selectOption(e.value, props.field)"
        >
          <template v-if="!disabled" #dropdown>
            <button type="button" class="p-autocomplete-dropdown" @click.stop="clear_input">
              <svg class="icon icon-sm" style="stroke: var(--p-inputtext-color)" aria-hidden="true">
                <use href="#icon-close" />
              </svg>
            </button>
          </template>
          <template #option="slotProps">
            <div v-if="!slotProps.option.label && !slotProps.option.description">
              <strong>{{ slotProps.option.value }}</strong>
            </div>
            <div v-else>
              <strong>{{ slotProps.option.label }}</strong>
              <div
                v-if="
                  slotProps.option.description &&
                  (slotProps.option.isTitleLink ||
                    slotProps.option.value !== slotProps.option.description)
                "
                class="text-sm text-color-secondary"
              >
                <span v-html="sanitizeHtml(slotProps.option.description)" />
              </div>
            </div>
          </template>
        </AutoComplete>
        <label :for="props.field.fieldname">
          {{ __(props.field.label) }}
        </label>
      </FloatLabel>
    </div>
  </div>
</template>

<script setup>
import AutoComplete from 'primevue/autocomplete';
import FloatLabel from 'primevue/floatlabel';

import { useAutoComplete } from '../composables/useAutoComplete';
import { sanitizeHtml } from '../utils/sanitizeHtml';

const props = defineProps({
  field: Object,
  disabled: Boolean,
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
  clearInput: {
    type: Boolean,
    default: false,
  },
  needFilter: Boolean,
  editing: Boolean,
  delInputValue: String,
  query: String,
  labelstyles: String,
  dataweb: {
    type: String,
    default: '',
  },
  filter_list: String,
  pageLength: { type: Number, default: 10 },
  /**
   * Calls { method, args } directly (bypassing frappe.desk.search.search_link) for
   * doctype-less/custom lookups whose whitelisted method doesn't follow the standard
   * (doctype, txt, searchfield, start, page_len, filters) link-query signature.
   * Results are mapped by name/label/description like a normal search_link response.
   */
  customCall: {
    type: Object,
    default: null,
  },
});

const emit = defineEmits(['update-autocomplete-value', 'update-filter', 'update-data', 'clearRow']);

const {
  refresh,
  autoCompleteRef,
  inputValue,
  translatedSuggestions,
  selectOption,
  getLinkOptions,
  clear_input,
} = useAutoComplete(props, emit);

defineExpose({
  clear_input,
});
</script>

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

:deep(.p-autocomplete .p-inputtext) {
  padding: 0.4rem 0.5rem;
  font-size: 0.8125rem;
}

:deep(.p-autocomplete-dropdown) {
  padding: 0.4rem;
  font-size: 0.8125rem;
}

:deep(.p-autocomplete-overlay .p-autocomplete-option) {
  padding: 0.4rem 0.6rem;
  font-size: 0.8125rem;
}
</style>

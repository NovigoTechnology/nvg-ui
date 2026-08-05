<template>
  <div class="link-field">
    <AutoComplete
      :key="refresh"
      ref="autoCompleteRef"
      v-model="inputValue"
      :input-id="fieldname"
      :suggestions="translatedSuggestions"
      :placeholder="__(props.placeholder || props.doctype)"
      :complete-on-focus="true"
      fluid
      :disabled="props.disabled"
      :option-label="option => option.label || option.value"
      force-selection
      :empty-message="__('No results found')"
      @complete="e => getLinkOptions(props.doctype, e.query)"
      @update:model-value="e => e === '' && clear_input(true)"
      @option-select="e => selectOption(e.value)"
    >
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
            v-html="sanitizeHtml(slotProps.option.description)"
          />
        </div>
      </template>
    </AutoComplete>
  </div>
</template>

<script setup>
import { ref, watchEffect } from 'vue';
import AutoComplete from 'primevue/autocomplete';
import { call } from '../libs/frappe-client';
import { sanitizeHtml } from '../utils/sanitizeHtml';

const props = defineProps({
  modelValue: { type: String, default: '' },
  doctype: { type: String, required: true },
  placeholder: { type: String, default: '' },
  disabled: { type: Boolean, default: false },
  filters: { type: Object, default: () => ({}) },
  query: { type: String, default: '' },
  pageLength: { type: Number, default: 10 },
  /** Row this field belongs to, handed to the doctype's link formatter as its `doc`. */
  row: { type: Object, default: null },
  /** Fieldname within that row, handed to the formatter as `df.fieldname`. */
  field: { type: String, default: '' },
});

const emit = defineEmits(['update:modelValue', 'itemSelected', 'clearRow']);

const fieldname = 'link_field_' + props.doctype;
const autoCompleteRef = ref(null);
const inputValue = ref('');
const refresh = ref(false);
const suggestions = ref([]);
const translatedSuggestions = ref([]);

/**
 * Builds what the input shows for a link value, delegating to the doctype's registered
 * formatter (frappe.form.link_formatters, where ERPNext registers Item, Employee, Project…)
 * so each doctype decides how its title is composed. Doctypes without a formatter show the
 * value itself, same as the desk.
 */
const formatInputValue = code => {
  if (!code) return '';

  const formatter = window.frappe?.form?.link_formatters?.[props.doctype];
  if (formatter && props.row) {
    return formatter(code, props.row, { fieldname: props.field }) || code;
  }

  return code;
};

/**
 * Derives the displayed text from whatever the formatter reads, the way the desk re-runs its
 * formatter when the doc changes. watchEffect tracks only the properties actually read — the
 * row's title field and its own value — so editing any other column in the row is not a
 * dependency and does not recompute this.
 */
watchEffect(() => {
  inputValue.value = formatInputValue(props.modelValue);
});

const getLinkOptions = async (doctype, searchText = '') => {
  const args = {
    doctype,
    txt: searchText.includes(':') ? searchText.split(':')[0].trim() : searchText,
    page_length: props.pageLength,
    filters: props.filters || {},
  };

  if (props.query) {
    args.query = props.query;
  }

  const r = await call('frappe.desk.search.search_link', args);

  if (r) {
    suggestions.value = r;
    const isTitleLink = (window.frappe?.boot?.link_title_doctypes || []).includes(doctype);

    translatedSuggestions.value = mergeDuplicates(
      r.map(item => {
        const translatedLabel = item.label ? __(item.label) : __(item.value);

        const descriptionParts = (item.description || '')
          .split(',')
          .map(s => __(s.trim()))
          .filter(Boolean);
        const uniqueParts = [...new Set(descriptionParts)].filter(
          s => s.toLowerCase() !== translatedLabel.toLowerCase()
        );
        const filteredDescription = uniqueParts.join(', ');

        return {
          label: translatedLabel,
          description: filteredDescription,
          value: item.value,
          isTitleLink,
        };
      })
    );
  } else {
    suggestions.value = [];
    translatedSuggestions.value = [];
  }
};

const mergeDuplicates = results =>
  results.reduce((acc, curr) => {
    const existing = acc.find(r => r.value === curr.value);
    if (existing) {
      if (curr.description) {
        existing.description = existing.description
          ? `${existing.description}, ${curr.description}`
          : curr.description;
      }
      return acc;
    }
    return [...acc, curr];
  }, []);

const selectOption = async selectedOption => {
  inputValue.value = formatInputValue(selectedOption.value);
  emit('update:modelValue', selectedOption.value);
  emit('itemSelected', selectedOption.value);
};

const clear_input = async (keepFocus = false) => {
  inputValue.value = '';
  suggestions.value = [];
  translatedSuggestions.value = [];
  emit('update:modelValue', '');
  emit('clearRow');
  if (!keepFocus) {
    refresh.value = !refresh.value;
  }

  await getLinkOptions(props.doctype);
  autoCompleteRef.value?.show();
};

defineExpose({ clear_input });
</script>

<style>
.link-field .p-autocomplete {
  width: 100%;
}

.link-field .p-autocomplete .p-autocomplete-input {
  width: 100%;
  padding: 0.4rem 0.5rem;
  font-size: 0.8125rem;
  background: transparent;
  transition: all 0.2s;
}

.link-field .p-autocomplete .p-autocomplete-input:hover {
  border-color: #e5e7eb;
  background: #ffffff;
}

.link-field .p-autocomplete .p-autocomplete-input:focus {
  background: #ffffff;
}

.link-field .p-autocomplete-dropdown {
  width: 2rem;
  border-left: 1px solid #e5e7eb;
  background: transparent;
  color: #6b7280;
}

.link-field .p-autocomplete-dropdown:hover {
  background: #f3f4f6;
}

.link-field .p-autocomplete-panel {
  font-size: 0.8125rem;
}

.link-field .p-autocomplete-panel .p-autocomplete-items .p-autocomplete-item {
  padding: 0.5rem 0.75rem;
}

.link-field .p-autocomplete-panel .p-autocomplete-items .p-autocomplete-item strong {
  font-weight: 400;
  color: #374151;
}

.link-field .p-autocomplete-panel .p-autocomplete-items .p-autocomplete-item div {
  font-size: 0.75rem;
  color: #6b7280;
  margin-top: 0.125rem;
}

.link-field .p-autocomplete-panel .p-autocomplete-items .p-autocomplete-item:hover {
  background: #f3f4f6;
}

/* Dark Mode */

[data-theme='dark'] .link-field .p-autocomplete .p-autocomplete-input:hover {
  border-color: #6b7280;
  background: #111827;
}

[data-theme='dark'] .link-field .p-autocomplete .p-autocomplete-input:focus {
  background: #111827;
}

[data-theme='dark'] .link-field .p-autocomplete-dropdown {
  border-left-color: #374151;
  color: #9ca3af;
}

[data-theme='dark'] .link-field .p-autocomplete-dropdown:hover {
  background: #1f2937;
}

[data-theme='dark']
  .link-field
  .p-autocomplete-panel
  .p-autocomplete-items
  .p-autocomplete-item
  strong {
  color: #e5e7eb;
}

[data-theme='dark']
  .link-field
  .p-autocomplete-panel
  .p-autocomplete-items
  .p-autocomplete-item
  div {
  color: #9ca3af;
}

[data-theme='dark']
  .link-field
  .p-autocomplete-panel
  .p-autocomplete-items
  .p-autocomplete-item:hover {
  background: #1f2937;
}
</style>

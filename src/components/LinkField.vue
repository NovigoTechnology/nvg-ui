<template>
  <div class="link-field">
    <IconField>
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
        :option-label="formatOptionLabel"
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
      <InputIcon
        v-if="!props.disabled && props.modelValue"
        class="pi pi-arrow-right link-field-icon"
        @click="goToDoc"
      />
    </IconField>
  </div>
</template>

<script setup>
import { inject, ref, watchEffect } from 'vue';
import AutoComplete from 'primevue/autocomplete';
import IconField from 'primevue/iconfield';
import InputIcon from 'primevue/inputicon';
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
const dialogRef = inject('dialogRef', null);
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

const formatOptionLabel = option => {
  const formatter = window.frappe?.form?.link_formatters?.[props.doctype];
  if (!formatter || !props.row) return option.label || option.value;

  const doc = { ...props.row, [props.field]: option.value };
  return formatter(option.value, doc, { fieldname: props.field }) || option.value;
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

/**
 * Opens the selected document in Desk, closing the dialog the field lives in, if any.
 *
 * PrimeVue teleports dialogs to the body, so a route change swaps the page underneath while
 * the dialog stays on screen with no way back to it. `dialogRef` is provided by DynamicDialog
 * to its whole content subtree, so the field resolves it on its own; outside a dialog the
 * injection defaults to null and the close is a no-op.
 */
const goToDoc = () => {
  dialogRef?.value?.close();
  frappe.set_route('Form', props.doctype, props.modelValue);
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
.link-field .p-iconfield {
  width: 100%;
}

.link-field .p-autocomplete {
  width: 100%;
}

/**
 * PrimeVue centres .p-inputicon with `top: 50%` plus a `margin-top` of half the default icon
 * size, so shrinking the font alone leaves it sitting high. Translating instead re-centres it
 * whatever size it ends up being.
 */
.link-field-icon {
  cursor: pointer;
  font-size: 0.7rem !important;
  width: 1.2rem !important;
  height: 1.2rem !important;
  margin-top: 0 !important;
  transform: translateY(-50%);
  transition: color 0.2s;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 0px 5px;
  border-radius: 5px;
}

.link-field-icon:hover {
  color: var(--gray-700);
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

<template>
  <div class="link-field">
    <AutoComplete
      v-model="inputValue"
      :key="refresh"
      ref="autoCompleteRef"
      :inputId="fieldname"
      :suggestions="translatedSuggestions"
      @complete="e => getLinkOptions(props.doctype, e.query)"
      :placeholder="__(props.placeholder || props.doctype)"
      :completeOnFocus="true"
      fluid
      :disabled="props.disabled"
      @update:modelValue="e => e === '' && clear_input(true)"
      @option-select="e => selectOption(e.value)"
      :optionLabel="option => option.label || option.value"
      forceSelection
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
            v-html="slotProps.option.description"
            class="text-sm text-color-secondary"
          ></div>
        </div>
      </template>
    </AutoComplete>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import AutoComplete from 'primevue/autocomplete';
import { call } from '../libs/frappe-ui';

const props = defineProps({
  modelValue: { type: String, default: '' },
  subtitle: { type: String, default: '' },
  doctype: { type: String, required: true },
  placeholder: { type: String, default: '' },
  disabled: { type: Boolean, default: false },
  filters: { type: Object, default: () => ({}) },
  query: { type: String, default: '' },
  pageLength: { type: Number, default: 10 },
});

const emit = defineEmits(['update:modelValue', 'itemSelected', 'clearRow']);

const fieldname = 'link_field_' + props.doctype;
const autoCompleteRef = ref(null);
const inputValue = ref('');
const refresh = ref(false);
const suggestions = ref([]);
const translatedSuggestions = ref([]);

const formatInputValue = (code, name) => {
  if (code && name && name !== code) return `${code}: ${name}`;
  return code || '';
};

watch(
  [() => props.modelValue, () => props.subtitle],
  ([newValue, newSubtitle]) => {
    inputValue.value = formatInputValue(newValue, newSubtitle);
  },
  { immediate: true }
);

const getLinkOptions = async (doctype, searchText = '') => {
  const args = {
    doctype,
    txt: searchText,
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
  inputValue.value = formatInputValue(selectedOption.value, selectedOption.label);
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

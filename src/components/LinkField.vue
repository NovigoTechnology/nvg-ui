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
      :dropdown="!!inputValue"
      @update:modelValue="e => e === '' && clear_input(true)"
      @option-select="e => selectOption(e.value)"
      :optionLabel="option => option.label || option.value"
      forceSelection
    >
      <template v-if="!props.disabled" #dropdown>
        <button type="button" class="p-autocomplete-dropdown" @click.stop="clear_input">
          <svg class="icon icon-sm" style="stroke: var(--p-inputtext-color)" aria-hidden="true">
            <use href="#icon-close"></use>
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
            v-if="slotProps.option.description && (slotProps.option.isTitleLink || slotProps.option.value !== slotProps.option.description)"
            class="text-sm text-color-secondary"
          >
            {{ slotProps.option.description }}
          </div>
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
  doctype: { type: String, required: true },
  placeholder: { type: String, default: '' },
  disabled: { type: Boolean, default: false },
  fullitem: { type: Boolean, default: false },
  filters: { type: Object, default: () => ({}) },
  query: { type: String, default: '' },
});

const emit = defineEmits(['update:modelValue', 'itemSelected', 'clearRow']);

const fieldname = 'link_field_' + props.doctype;
const autoCompleteRef = ref(null);
const inputValue = ref('');
const refresh = ref(false);
const suggestions = ref([]);
const translatedSuggestions = ref([]);

watch(
  () => props.modelValue,
  newValue => {
    inputValue.value = newValue || '';
  },
  { immediate: true }
);

const getLinkOptions = async (doctype, searchText = '') => {
  const args = {
    doctype,
    txt: searchText,
    page_length: 10,
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
  inputValue.value = selectedOption.label || selectedOption.value;
  emit('update:modelValue', selectedOption.value);

  if (props.fullitem) {
    try {
      const fullDoc = await call('frappe.client.get', {
        doctype: props.doctype,
        name: selectedOption.value,
      });
      emit('itemSelected', fullDoc);
    } catch (error) {
      console.error('Error fetching full document:', error);
      emit('itemSelected', null);
    }
  }
};

const clear_input = (keepFocus = false) => {
  inputValue.value = '';
  suggestions.value = [];
  translatedSuggestions.value = [];
  emit('update:modelValue', '');
  emit('clearRow');
  if (!keepFocus) {
    refresh.value = !refresh.value;
  }
};

defineExpose({ clear_input });
</script>

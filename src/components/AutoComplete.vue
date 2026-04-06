<template>
  <div>
    <div :class="{ flex: props.field.quick_entry }" class="relative">
      <FloatLabel variant="on">
        <AutoComplete
          v-model="inputValue[props.field.fieldname]"
          :data-web="props.dataweb"
          :key="refresh"
          ref="autoCompleteRef"
          :inputId="props.field.fieldname"
          :suggestions="translatedSuggestions"
          @complete="e => getLinkOptions(props.field.options, {}, e.query)"
          :completeOnFocus="true"
          fluid
          :disabled="disabled || (props.field.read_only && !props.filter_list) ? true : false"
          :class="{ 'p-inputtext:disabled': disabled }"
          @clear="() => clear_input"
          :size="props.size"
          @update:modelValue="e => e === '' && clear_input()"
          @option-select="e => selectOption(e.value, props.field)"
          :optionLabel="option => option.label || option.description || option.value"
          :dropdown="
            !inputValue[props.field.fieldname] === '' && inputValue[props.field.fieldname]
          "
          :invalid="
            (invalid_fields?.includes(props.field.fieldname) ||
              invalid_fields?.includes(props.field.label)) &&
            !inputValue[props.field.fieldname]
          "
          forceSelection
        >
          <template v-if="!disabled" #dropdown>
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
              <strong>{{ slotProps.option.label ? __(slotProps.option.label) : '' }}</strong>
              <div>
                {{
                  slotProps.option.description
                    ? normalizeDescription(slotProps.option.description)
                    : ''
                }}
              </div>
            </div>
          </template>
        </AutoComplete>
        <label :for="props.field.fieldname">
          {{ __(props.field.label) }}
        </label>
      </FloatLabel>

      <Button
        v-if="props.field.quick_entry"
        :disabled="disabled"
        :raised="true"
        severity="info"
        class="ml-4"
        size="small"
        @click="() => (createNew = !createNew)"
        :id="'new_' + props.field.fieldname"
      >
        <!-- @click="create_New(props.field.quick_entry, props.field.fieldname)" -->
        <span style="text-wrap: nowrap"> {{ __('New {0}', [__(props.field.placeholder)]) }}</span>
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
import { ref, onMounted, watch, onUnmounted, computed } from 'vue';
import AutoComplete from 'primevue/autocomplete';
import FloatLabel from 'primevue/floatlabel';
import Button from 'primevue/button';
import { call } from '../libs/frappe-ui';
import emitter from '../libs/mitt';

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
  useQuickEntryStore: {
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
});

const emit = defineEmits([
  'update-autocomplete-value',
  'update-filter',
  'update-data',
  'clearRow',
]);

const store = props.store;

const currentStore = computed(() => {
  if (props.quickEntry && props.useQuickEntryStore) {
    return props.store;
  }

  return store;
});

const filters = ref({});
const createNew = ref(false);
const refresh = ref(false);
const autoCompleteRef = ref(null);
const inputValue = ref({});
const suggestions = ref([]);
const translatedSuggestions = ref([]);

onMounted(() => {
  clear_input();
  if (!props.quickEntry) {
    if (currentStore.value?.filters && currentStore.value.filters[props.field.fieldname]) {
      inputValue.value[props.field.fieldname] = currentStore.value.filters[props.field.fieldname];
    }

    if (
      currentStore.value?.fullDataForm &&
      currentStore.value.fullDataForm[props.field.fieldname]
    ) {
      const existingValue = currentStore.value.fullDataForm[props.field.fieldname];
      inputValue.value[props.field.fieldname] =
        existingValue.label || existingValue.description || existingValue.value;
    }

    if (props.field.value) {
      inputValue.value[props.field.fieldname] = props.field.value;
    }
  }

  if (props.field.needFilter && props.filters[props.field.dependingField]) {
    getLinkOptions(props.field.options, props.filters);
  } else {
    getLinkOptions(props.field.options);
  }
});

const normalizeDescription = str => {
  if (str.includes(',')) {
    return str
      .split(',')
      .map(s => __(s.trim()))
      .join('/');
  }

  return str.trim();
};

watch(
  () => props.field.value,
  newValue => {
    if (newValue) {
      inputValue.value[props.field.fieldname] = newValue;
      emit('update-data', newValue, props.field);
    } else {
      inputValue.value[props.field.fieldname] = newValue;
    }
  },
  { immediate: true }
);

watch(
  () => props.clearFilters,
  newValue => {
    if (!newValue) return;
    clear_input();
  },
  { deep: true }
);

watch(
  () => props.filters,
  newValue => {
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
  { deep: true }
);

watch(
  () => props.clearInput,
  newVal => {
    if (newVal) {
      clear_input();
    }
  }
);

watch(
  () => (props.quickEntry && props.clearInput ? props.clearInput : false),
  newVal => {
    if (newVal && props.quickEntry) {
      clear_input();
    }
  }
);

watch(
  () =>
    !props.quickEntry && currentStore.value?.clear !== undefined ? currentStore.value.clear : null,
  (newVal, oldVal) => {
    // Detectar cualquier cambio en el valor boolean (true->false o false->true)
    if (newVal !== oldVal && newVal !== null && !props.quickEntry) {
      clear_input();
    }
  }
);

watch(
  () => currentStore?.value?.edited,
  newValue => {
    if (newValue) {
      update_input(
        {
          label: newValue.first_name + ' ' + newValue.last_name,
          value: newValue.name,
        },
        null,
        newValue.editingFieldname
      );
    }
  },
  { deep: true }
);

watch(
  () => props.delInputValue,
  newValue => {
    if (newValue) {
      inputValue.value[newValue] = '';
      if (currentStore.value?.dataForm) {
        currentStore.value.dataForm[newValue] = null;
      }
      if (currentStore.value?.fullDataForm) {
        currentStore.value.fullDataForm[newValue] = null;
      }
      refresh.value = !refresh.value;
    }
  }
);

watch(
  () => inputValue.value[props.field.fieldname],
  newValue => {
    if (newValue === '') {
      clear_input();
      return;
    }

    const idx = suggestions.value.findIndex(item => item.value === newValue);
    if (idx !== -1) {
      inputValue.value[props.field.fieldname] =
        translatedSuggestions.value[idx].label ||
        translatedSuggestions.value[idx].description ||
        newValue;
    }
  }
);

watch(
  () => createNew.value,
  newValue => {
    if (newValue === true && props.useQuickEntryStore) {
      store.setQuickEntryActive(true);
      clear_input();
    } else if (newValue === false && props.useQuickEntryStore) {
      store.setQuickEntryActive(false);
    }
  }
);

const update_input = (valueObj, field, fieldname) => {
  let editingFieldname = '';
  field?.fieldname ? (editingFieldname = field.fieldname) : (editingFieldname = fieldname);
  inputValue.value[editingFieldname] = valueObj.label;

  if (props.useQuickEntryStore) {
    if (currentStore.value?.fieldValues) {
      currentStore.value.fieldValues[editingFieldname] = valueObj.value;
    }
  } else {
    if (currentStore.value?.dataForm) {
      currentStore.value.dataForm[editingFieldname] = valueObj.value;
    }
    if (currentStore.value?.fullDataForm) {
      currentStore.value.fullDataForm[editingFieldname] = valueObj;
    }
  }

  refresh.value = !refresh.value;
};

const closeQuickEntry = () => {
  createNew.value = false;
  if (props.useQuickEntryStore) {
    store.setQuickEntryActive(false);
  }
};

const clear_input = () => {
  if (props.quickEntry && props.useQuickEntryStore) {
    if (currentStore.value.fieldValues) {
      currentStore.value.fieldValues[props.field.fieldname] = null;
    }
  } else {
    if (currentStore.value?.dataForm) {
      currentStore.value.dataForm[props.field.fieldname] = null;
    }
    if (currentStore.value?.fullDataForm) {
      currentStore.value.fullDataForm[props.field.fieldname] = null;
    }
    if (currentStore.value?.filters) {
      currentStore.value.filters[props.field.fieldname] = null;
    }
  }

  inputValue.value[props.field.fieldname] = null;

  suggestions.value = [];
  translatedSuggestions.value = [];

  if (props.field.hasDependencies) {
    emitter.emit(props.field.fieldname + '_cleared');
  }

  emit('update-autocomplete-value', null, props.field);
  emit('clearRow', props.field);

  if (props.field.provideFilter && !props.quickEntry) {
    filters.value = {};
    if (currentStore.value.autocompleteFilter) {
      currentStore.value.autocompleteFilter = filters.value;
    }
    props.field.value = null;
  }

  refresh.value = !refresh.value;
};

const selectOption = (selectedOption, field) => {
  if (props.quickEntry && props.useQuickEntryStore) {
    currentStore.value.fieldValues[field.fieldname] = selectedOption.value;
  } else {
    if (currentStore.value?.dataForm) {
      currentStore.value.dataForm[field.fieldname] = selectedOption.value;
    }

    if (field.fieldname === 'referring_physician' && !props.quickEntry) {
      if (store.physician !== undefined) {
        store.physician = selectedOption;
      }
    }

    if (currentStore.value?.fullDataForm) {
      currentStore.value.fullDataForm[field.fieldname] = {
        value: selectedOption.value,
        label: __(selectedOption.label),
        description: __(selectedOption.description),
      };
    }
  }

  const translatedOption = {
    label: selectedOption.label ? __(selectedOption.label) : '',
    description: selectedOption.description ? __(selectedOption.description) : '',
    value: selectedOption.value,
  };

  inputValue.value[field.fieldname] =
    translatedOption.label || translatedOption.description || translatedOption.value;

  if (!props.quickEntry) {
    if (field.provideFilter) {
      filters.value = { [field.fieldname]: selectedOption.value };
      if (currentStore.value.autocompleteFilter) {
        currentStore.value.autocompleteFilter = filters.value;
      }
    }
    if (currentStore.value?.filters) {
      currentStore.value.filters[field.fieldname] = selectedOption.value;
    }
  }

  emit(
    'update-autocomplete-value',
    {
      ...selectedOption,
      label: translatedOption.label,
      description: translatedOption.description,
    },
    field
  );

  if (props.field.hasDependencies) {
    emitter.emit(props.field.fieldname + '_updated');
  }

  if (field.clear_input_after_selection) {
    inputValue.value[field.fieldname] = null;
    refresh.value = !refresh.value;
  }
};

const getLinkOptions = async (doctype, filters = {}, searchText = '') => {
  let finalFilters = { ...filters };

  if (props.filters && Object.keys(props.filters).length > 0) {
    finalFilters = { ...finalFilters, ...props.filters };
  }

  if (props.quickEntry && props.filters) {
    finalFilters = { ...finalFilters, ...props.filters };
  }

  if (props.field.needFilter && props.filters) {
    const dependingFieldValue = props.filters[props.field.dependingField];
    if (dependingFieldValue) {
      finalFilters[props.field.dependingField] = dependingFieldValue;
    }
  }

  const args = {
    doctype: doctype,
    txt: searchText,
    page_length: 10,
    filters: finalFilters,
  };

  if (props.query) {
    args.query = props.query;
  }

  const r = await call('frappe.desk.search.search_link', args);

  if (r) {
    suggestions.value = r;
    translatedSuggestions.value = r.map(item => {
      const translatedLabel = item.label ? __(item.label) : '';
      const translatedDescription = item.description ? __(item.description) : '';

      return {
        label: translatedLabel || translatedDescription || item.value,
        description: translatedDescription,
        value: item.value,
      };
    });
  } else {
    suggestions.value = [];
    translatedSuggestions.value = [];
  }
};


onUnmounted(() => {
  if (props.field.dependingField) {
    emitter.off(props.field.dependingField + '_cleared');
    emitter.off(props.field.dependingField + '_updated');
  }

  if (props.editing && !props.field.value) {
    clear_input();
  }
  if (props.quickEntry) {
    clear_input();
  }
});

watch(
  () =>
    !props.quickEntry && currentStore.value?.fullDataForm ? currentStore.value.fullDataForm : null,
  newValue => {
    if (newValue && newValue[props.field.fieldname] && !props.quickEntry) {
      const value = newValue[props.field.fieldname];
      inputValue.value[props.field.fieldname] = value.label
        ? __(value.label)
        : value.description
          ? __(value.description)
          : value.value
            ? __(value.value)
            : __(value);

      if (value.value) {
        suggestions.value = [
          {
            label: value.label,
            description: value.description,
            value: value.value,
          },
        ];

        translatedSuggestions.value = [
          {
            label: value.label ? __(value.label) : '',
            description: value.description ? __(value.description) : '',
            value: value.value,
          },
        ];
      }
    }
  },
  { deep: true, immediate: true }
);

watch(
  () =>
    props.editing && !props.quickEntry && currentStore.value?.edited
      ? currentStore.value.edited
      : null,
  newValue => {
    if (newValue && !props.quickEntry) {
      update_input(
        {
          label: newValue.first_name + ' ' + newValue.last_name,
          value: newValue.name,
        },
        null,
        newValue.editingFieldname
      );
    }
  },
  { deep: true }
);

defineExpose({
  clear_input,
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

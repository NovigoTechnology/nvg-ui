import { ref, onMounted, watch, onUnmounted, computed } from 'vue';
import { call } from '../libs/frappe-client';
import emitter from '../libs/mitt';

export function useAutoComplete(props, emit) {
  const store = props.store;

  const currentStore = computed(() => {
    return store;
  });

  const providedFilters = ref({});
  const refresh = ref(false);
  const autoCompleteRef = ref(null);
  const inputValue = ref({});
  const suggestions = ref([]);
  const translatedSuggestions = ref([]);

  onMounted(() => {
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

    if (props.field.needFilter && props.filters[props.field.dependingField]) {
      getLinkOptions(props.field.options, props.filters);
    } else {
      getLinkOptions(props.field.options);
    }
  });

  watch(
    () => props.field.value,
    async newValue => {
      if (newValue) {
        const results = await fetchLinkResults(props.field.options, {}, newValue);
        const match = results?.find(r => r.value === newValue);
        inputValue.value[props.field.fieldname] = match?.label ? __(match.label) : newValue;
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
    () => (currentStore.value?.clear !== undefined ? currentStore.value.clear : null),
    (newVal, oldVal) => {
      // Detectar cualquier cambio en el valor boolean (true->false o false->true)
      if (newVal !== oldVal && newVal !== null) {
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
    async newValue => {
      const idx = suggestions.value.findIndex(item => item.value === newValue);
      if (idx !== -1) {
        inputValue.value[props.field.fieldname] =
          translatedSuggestions.value[idx].label ||
          translatedSuggestions.value[idx].description ||
          newValue;
      }
    }
  );

  const update_input = (valueObj, field, fieldname) => {
    let editingFieldname = '';
    field?.fieldname ? (editingFieldname = field.fieldname) : (editingFieldname = fieldname);
    inputValue.value[editingFieldname] = valueObj.label;

    if (currentStore.value?.dataForm) {
      currentStore.value.dataForm[editingFieldname] = valueObj.value;
    }
    if (currentStore.value?.fullDataForm) {
      currentStore.value.fullDataForm[editingFieldname] = valueObj;
    }

    refresh.value = !refresh.value;
  };

  const clear_input = async (keepFocus = false) => {
    if (currentStore.value?.dataForm) {
      currentStore.value.dataForm[props.field.fieldname] = null;
    }
    if (currentStore.value?.fullDataForm) {
      currentStore.value.fullDataForm[props.field.fieldname] = null;
    }
    if (currentStore.value?.filters) {
      currentStore.value.filters[props.field.fieldname] = null;
    }

    inputValue.value[props.field.fieldname] = null;

    suggestions.value = [];
    translatedSuggestions.value = [];

    if (props.field.hasDependencies) {
      emitter.emit(props.field.fieldname + '_cleared');
    }

    emit('update-autocomplete-value', null, props.field);
    emit('clearRow', props.field);

    if (props.field.provideFilter) {
      providedFilters.value = {};
      if (currentStore.value.autocompleteFilter) {
        currentStore.value.autocompleteFilter = providedFilters.value;
      }
      /**
       * field is a shared frappe field descriptor, not local component state;
       * the host form reads this value back directly.
       */

      props.field.value = null;
    }

    if (!keepFocus) {
      refresh.value = !refresh.value;
    }

    await getLinkOptions(props.field.options);
    autoCompleteRef.value?.show();
  };

  const selectOption = (selectedOption, field) => {
    if (currentStore.value?.dataForm) {
      currentStore.value.dataForm[field.fieldname] = selectedOption.value;
    }

    if (field.fieldname === 'referring_physician') {
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

    const translatedOption = {
      label: selectedOption.label ? __(selectedOption.label) : '',
      description: selectedOption.description ? __(selectedOption.description) : '',
      value: selectedOption.value,
    };

    inputValue.value[field.fieldname] =
      translatedOption.label || translatedOption.description || translatedOption.value;

    if (currentStore.value?.filters) {
      currentStore.value.filters[field.fieldname] = selectedOption.value;
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

  async function fetchLinkResults(doctype, filters = {}, searchText = '') {
    if (props.customCall?.method) {
      const raw = await call(props.customCall.method, {
        ...props.customCall.args,
        txt: searchText,
        start: 0,
        page_length: props.pageLength,
      });

      return (raw || []).map(item => ({
        value: item.value ?? item.name,
        label: item.label ?? item.title ?? item.value ?? item.name,
        description: item.description ?? '',
      }));
    }

    let finalFilters = { ...filters };

    if (props.filters && Object.keys(props.filters).length > 0) {
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
      page_length: props.pageLength,
      filters: finalFilters,
    };

    if (props.query) {
      args.query = props.query;
    }

    return await call('frappe.desk.search.search_link', args);
  }

  async function getLinkOptions(doctype, filters = {}, searchText = '') {
    const r = await fetchLinkResults(doctype, filters, searchText);

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
  }

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

  onUnmounted(() => {
    if (props.field.dependingField) {
      emitter.off(props.field.dependingField + '_cleared');
      emitter.off(props.field.dependingField + '_updated');
    }

    if (props.editing && !props.field.value) {
      clear_input();
    }
  });

  watch(
    () => (currentStore.value?.fullDataForm ? currentStore.value.fullDataForm : null),
    newValue => {
      if (newValue && newValue[props.field.fieldname]) {
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
    () => (props.editing && currentStore.value?.edited ? currentStore.value.edited : null),
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

  return {
    refresh,
    autoCompleteRef,
    inputValue,
    translatedSuggestions,
    selectOption,
    getLinkOptions,
    clear_input,
  };
}

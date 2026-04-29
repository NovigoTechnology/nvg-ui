<template>
  <div class="phone-inputs">
    <Select
      v-model="selectedCountry"
      :options="countries"
      filter
      optionLabel="name"
      size="small"
      :disabled="props.disabled"
      :invalid="invalidPhone"
    >
      <template #dropdownicon>
        <div></div>
      </template>

      <template #value="slotProps">
        <div v-if="slotProps.value" class="flex items-center">
          <div>
            <svg class="icon icon-sm flag-icon">
              <use :href="`#icon-${slotProps.value.code}`"></use>
            </svg>
          </div>
          <div>{{ slotProps.value.isd }}</div>
        </div>
      </template>

      <template #option="slotProps">
        <div class="flex items-center gap-2">
          <div class="flex items-center w-24">
            <div>
              <svg class="icon icon-sm flag-icon">
                <use :href="`#icon-${slotProps.option.code}`"></use>
              </svg>
            </div>
            <div class="isd-code">{{ slotProps.option.isd }}</div>
          </div>
          <span class="country-name">{{ __(slotProps.option.country) }}</span>
        </div>
      </template>
    </Select>

    <FloatLabel variant="on">
      <InputText
        :value="phoneNumber"
        :disabled="!selectedCountry || props.disabled"
        size="small"
        fluid
        @input="phoneNumberFormatter($event, props.field)"
        :invalid="invalidPhone"
        @blur="handleBlur(props.field)"
      />
      <label :for="props.field.fieldname">{{ __(props.field.label) }}</label>
    </FloatLabel>
  </div>
</template>

<script setup>
import { onMounted, ref, watch } from 'vue';
import Select from 'primevue/select';
import InputText from 'primevue/inputtext';
import { parsePhoneNumberFromString } from 'libphonenumber-js';
import { debounce } from 'lodash-es';
import { FloatLabel } from 'primevue';

const props = defineProps({
  disabled: Boolean,
  field: Object,
  cancelEdit: Boolean,
  store: Object,
  editing: Boolean,
});

const emit = defineEmits(['update-phone', 'invalid-phone']);

const countries = ref([]);
const selectedCountry = ref();
const phoneNumber = ref();
const phoneNumberFormat = ref();
const originalData = ref(null);
const invalidPhone = ref(false);

onMounted(() => {
  getCountries();
});

watch(
  () => props.editing,
  newVal => {
    if (newVal === false) invalidPhone.value = false;
  }
);

watch(
  () => props.field.value,
  newValue => {
    originalData.value = newValue;
    if (newValue) {
      selectedCountry.value = countries.value.find(c => c.isd === newValue.split('-')[0]);
      phoneNumber.value = newValue.split('-')[1]?.split(' ').join('');
    } else {
      const defaultCountry = frappe.boot.docs.find(o => o.code);
      selectedCountry.value = countries.value.find(c => c.code === defaultCountry?.code);
      phoneNumber.value = null;
    }
  },
  { immediate: true }
);

watch(
  () => props.cancelEdit,
  newVal => {
    if (newVal) {
      phoneNumber.value = originalData.value
        ? originalData.value.split('-')[1]?.replace(/ /g, '')
        : null;
    }
  }
);

const getCountries = async () => {
  await frappe
    .xcall('frappe.geo.country_info.get_country_timezone_info')
    .then(data => {
      countries.value = Object.entries(data?.country_info)
        .map(([key, country]) => ({
          name: [__(key), country.isd],
          country: __(key),
          code: country.code,
          isd: country.isd,
        }))
        .filter(c => c.isd && c.isd !== '+0');
    })
    .catch(console.error);

  if (props.field.value) {
    selectedCountry.value = countries.value.find(c => c.isd === props.field.value.split('-')[0]);
  } else {
    const defaultCountry = frappe.boot.docs.find(o => o.code);
    selectedCountry.value = countries.value.find(c => c.code === defaultCountry?.code);
  }
};

const phoneNumberFormatter = (event, field) => {
  if (selectedCountry.value && event.target.value) {
    const phone = event.target.value.replace(/\D/g, '').slice(0, 15);
    phoneNumber.value = phone;
    phoneNumberFormat.value = `${selectedCountry.value.isd}-${phone}`;
  } else if (!event.target.value) {
    phoneNumber.value = null;
    phoneNumberFormat.value = null;
  }
  debouncedValidation(field);
  emit('update-phone', phoneNumberFormat.value, field);
};

const validatePhoneNumber = field => {
  if (phoneNumber.value && phoneNumberFormat.value && selectedCountry.value) {
    const parsed = parsePhoneNumberFromString(
      String(phoneNumberFormat.value),
      selectedCountry.value.code
    );
    if (!parsed?.isValid()) {
      invalidPhone.value = true;
      emit(
        'invalid-phone',
        true,
        field,
        __('Invalid {0}', [field.label]),
        __("Please verify the data for '{0}', and try again.", [field.label])
      );
    } else {
      invalidPhone.value = false;
      emit('invalid-phone', false, field);
    }
  } else {
    invalidPhone.value = false;
    emit('invalid-phone', false, field);
  }
};

const debouncedValidation = debounce(validatePhoneNumber, 1000);

const handleBlur = field => {
  debouncedValidation.cancel();
  validatePhoneNumber(field);
};
</script>

<style scoped>
:deep(.p-select-dropdown) {
  display: none;
}

:deep(.p-select) {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}

:deep(.p-inputtext) {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}

.flag-icon {
  width: 34px;
  padding-right: 8px;
}

.phone-inputs {
  display: flex;
  align-items: center;
}

.isd-code {
  width: 60px;
  text-align: left;
}

.country-name {
  flex: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>

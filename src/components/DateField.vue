<template>
  <FloatLabel v-if="label" variant="on">
    <DatePicker
      :id="id"
      :model-value="dateValue"
      :date-format="pickerFormat"
      :disabled="disabled"
      :max-date="allowFutureDates ? null : today"
      fluid
      v-bind="$attrs"
      @update:model-value="onUpdate"
    >
      <template #dropdownicon>
        <svg class="icon icon-sm">
          <use href="#icon-calendar" />
        </svg>
      </template>
    </DatePicker>
    <label :for="id">{{ label }}</label>
  </FloatLabel>
  <DatePicker
    v-else
    :id="id"
    :model-value="dateValue"
    :date-format="pickerFormat"
    :disabled="disabled"
    :max-date="allowFutureDates ? null : today"
    fluid
    v-bind="$attrs"
    @update:model-value="onUpdate"
  >
    <template #dropdownicon>
      <svg class="icon icon-sm">
        <use href="#icon-calendar" />
      </svg>
    </template>
  </DatePicker>
</template>

<script setup>
import { computed } from 'vue';
import DatePicker from 'primevue/datepicker';
import FloatLabel from 'primevue/floatlabel';

defineOptions({ inheritAttrs: false });

const props = defineProps({
  /** Date as the YYYY-MM-DD string Frappe stores, not a Date object. */
  modelValue: { type: String, default: null },
  label: { type: String, default: '' },
  id: { type: String, default: () => `df-${Math.random().toString(36).slice(2, 8)}` },
  /**
   * Date format, in either Frappe's spelling ('dd-mm-yyyy') or PrimeVue's ('dd-mm-yy').
   * Defaults to the site's System Settings format.
   */
  dateFormat: { type: String, default: '' },
  disabled: { type: Boolean, default: false },
  /** By default the picker refuses dates after today; set to allow them. */
  allowFutureDates: { type: Boolean, default: false },
});

const emit = defineEmits(['update:modelValue']);

const today = new Date();

/**
 * PrimeVue's DatePicker reads 'yy' as a 4-digit year, while Frappe writes that as 'yyyy'.
 * Handing it the Frappe spelling untranslated renders the year twice ('06-08-20262026'),
 * so normalise here and accept both spellings from callers.
 */
const pickerFormat = computed(() => {
  const fmt = props.dateFormat || window.frappe?.boot?.sysdefaults?.date_format || 'dd-mm-yyyy';
  return fmt.replace('yyyy', 'yy');
});

/**
 * Bridges the YYYY-MM-DD string modelValue to the Date object the DatePicker expects.
 * Builds the Date from explicit y/m/d parts rather than `new Date(string)`, which parses
 * as UTC and lands on the previous day for anyone west of Greenwich.
 */
const dateValue = computed(() => {
  if (!props.modelValue) return null;
  const [y, m, d] = props.modelValue.split('-');
  return new Date(+y, +m - 1, +d);
});

/**
 * Converts the picker's Date back to a YYYY-MM-DD string from local parts (toISOString
 * would shift the date across timezones for the same reason as above).
 */
const onUpdate = value => {
  if (!value) return emit('update:modelValue', null);
  const yyyy = value.getFullYear();
  const mm = String(value.getMonth() + 1).padStart(2, '0');
  const dd = String(value.getDate()).padStart(2, '0');
  emit('update:modelValue', `${yyyy}-${mm}-${dd}`);
};
</script>

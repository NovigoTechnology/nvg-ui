<template>
  <FloatLabel v-if="label" variant="on" class="numeric-field-wrapper">
    <InputNumber
      :id="id"
      :model-value="modelValue"
      :locale="numberLocale"
      v-bind="$attrs"
      @update:model-value="$emit('update:modelValue', $event)"
    />
    <label :for="id">{{ label }}</label>
  </FloatLabel>
  <InputNumber
    v-else
    :model-value="modelValue"
    :locale="numberLocale"
    v-bind="$attrs"
    @update:model-value="$emit('update:modelValue', $event)"
  />
</template>

<script setup>
import { computed } from 'vue';
import InputNumber from 'primevue/inputnumber';
import FloatLabel from 'primevue/floatlabel';

defineOptions({ inheritAttrs: false });

const props = defineProps({
  modelValue: { type: Number, default: null },
  label: { type: String, default: '' },
  id: { type: String, default: () => `nf-${Math.random().toString(36).slice(2, 8)}` },
  numberFormat: { type: String, default: '#.###,##' },
});

defineEmits(['update:modelValue']);

const numberLocale = computed(() => {
  const m = props.numberFormat.match(/[#0]([^#0\s])[#0]+$/);
  if (!m) return undefined;
  const decimalSep = m[1];
  for (const locale of ['en-US', 'de-DE', 'fr-FR']) {
    const sample = new Intl.NumberFormat(locale, { minimumFractionDigits: 1 }).format(1.5);
    if (sample.at(-2) === decimalSep) return locale;
  }
  return undefined;
});
</script>

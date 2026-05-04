<template>
  <FloatLabel v-if="label" variant="on" class="numeric-field-wrapper">
    <InputNumber
      :id="id"
      :model-value="modelValue"
      v-bind="$attrs"
      :pt="pt"
      @update:model-value="$emit('update:modelValue', $event)"
    />
    <label :for="id">{{ label }}</label>
  </FloatLabel>
  <InputNumber
    v-else
    :model-value="modelValue"
    v-bind="$attrs"
    :pt="pt"
    @update:model-value="$emit('update:modelValue', $event)"
  />
</template>

<script setup>
import InputNumber from 'primevue/inputnumber';
import FloatLabel from 'primevue/floatlabel';

defineOptions({ inheritAttrs: false });

const props = defineProps({
  modelValue: { type: Number, default: null },
  label: { type: String, default: '' },
  id: { type: String, default: () => `nf-${Math.random().toString(36).slice(2, 8)}` },
});

defineEmits(['update:modelValue']);

const pt = { input: { style: 'text-align: right' } };
</script>

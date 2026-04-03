<template>
  <div class="link-field">
    <AutoComplete
      :field="fieldConfig"
      @itemSelected="onItemSelected"
      @clearRow="clearRow"
      :fullitem="props.fullitem"
      :filters="props.filters"
    />
  </div>
</template>

<script setup>
import { computed } from 'vue';
import AutoComplete from './AutoComplete.vue';

const props = defineProps({
  modelValue: { type: String, default: '' },
  doctype: { type: String, required: true },
  placeholder: { type: String, default: '' },
  disabled: { type: Boolean, default: false },
  fullitem: { type: Boolean, default: false },
  filters: { type: Object, default: () => ({}) },
});

const emit = defineEmits(['update:modelValue', 'itemSelected', 'clearRow']);

const clearRow = () => {
  emit('update:modelValue', '');
  emit('clearRow');
};

const fieldConfig = computed(() => ({
  fieldname: 'link_field',
  fieldtype: 'Link',
  label: props.placeholder || props.doctype,
  options: props.doctype,
  value: props.modelValue,
  read_only: props.disabled,
}));

const onItemSelected = data => {
  emit('update:modelValue', data.value);

  if (data.fullDoc) {
    emit('itemSelected', data.fullDoc);
  }
};
</script>

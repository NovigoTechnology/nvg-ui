<template>
  <div class="grid-table">
    <label v-if="label" class="grid-table__label">{{ label }}</label>

    <DataTable
      :value="dataArray"
      size="small"
      :scrollable="true"
      scrollHeight="300px"
      class="grid-table__datatable"
    >
      <template #empty>
        <div class="grid-table__empty">{{ emptyMessage }}</div>
      </template>

      <Column
        v-for="column in columns"
        :key="column.field"
        :field="column.field"
        :header="column.label"
        :style="{ width: column.width || 'auto' }"
      >
        <template #body="{ data, index }">
          <LinkField
            v-if="column.type === 'Link'"
            :modelValue="data[column.field]"
            :doctype="column.options"
            :placeholder="column.label"
            :disabled="column.readOnly"
            class="grid-input"
            @update:modelValue="value => onFieldValueUpdate(data, index, column.field, value)"
            @itemSelected="doc => onItemSelected(index, doc, column)"
            @clear-row="() => clearRowItems(data)"
            :fullitem="true"
            :filters="column.filters"
            :query="column.query"
          />
          <component
            v-else
            :is="getComponent(column)"
            :modelValue="data[column.field]"
            v-bind="getProps(column)"
            class="grid-input"
            @update:modelValue="value => onFieldValueUpdate(data, index, column.field, value)"
          />
        </template>
      </Column>

      <Column :style="{ width: '60px' }">
        <template #body="{ index }">
          <Button
            icon="pi pi-trash"
            severity="danger"
            text
            size="small"
            @click="removeRow(index)"
          />
        </template>
      </Column>
    </DataTable>

    <Button
      :label="__('Add Row')"
      icon="pi pi-plus"
      severity="secondary"
      size="small"
      @click="addRow"
      class="grid-table__add-btn"
    />
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import InputNumber from 'primevue/inputnumber';
import LinkField from './LinkField.vue';

const props = defineProps({
  data: { type: Array, default: () => [] },
  columns: { type: Array, required: true },
  label: { type: String, default: '' },
  emptyMessage: { type: String, default: 'No Data' },
  filters: { type: Object, default: () => ({}) },
});

const emit = defineEmits(['update:data', 'rowChange', 'rowAdd', 'rowRemove', 'itemSelected']);

const dataArray = ref([...props.data]);

watch(
  () => props.data,
  newData => {
    dataArray.value = [...newData];
  },
  { deep: true }
);

// ── Filas ──────────────────────────────────────────────
const createEmptyRow = () => {
  const row = { idx: dataArray.value.length + 1 };
  props.columns.forEach(col => {
    row[col.field] = ['Float', 'Currency', 'Int', 'Percent'].includes(col.type) ? null : '';
  });
  return row;
};

const clearRowItems = row => {
  props.columns.forEach(col => {
    row[col.field] = ['Float', 'Currency', 'Int', 'Percent'].includes(col.type) ? null : '';
  });
  emit('update:data', dataArray.value);
  emit('rowChange', row);
};

const addRow = () => {
  const row = createEmptyRow();
  dataArray.value.push(row);
  emit('update:data', dataArray.value);
  emit('rowAdd', row);
};

const removeRow = index => {
  const row = dataArray.value[index];
  dataArray.value.splice(index, 1);
  emit('update:data', dataArray.value);
  emit('rowRemove', row, index);
};

// ── Cambios ────────────────────────────────────────────
const onFieldValueUpdate = (editingRow, index, field, value) => {
  editingRow[field] = value;

  const row = dataArray.value[index];
  if (row) {
    row[field] = value;
    emit('update:data', dataArray.value);
    emit('rowChange', row);
  }
};

const onItemSelected = (index, doc, column) => {
  const row = dataArray.value[index];
  if (!row) return;

  emit('itemSelected', { row, itemData: doc, column, index });
  emit('update:data', dataArray.value);
  emit('rowChange', row);
};

// ── Helpers de columna ─────────────────────────────────
const getComponent = column => {
  return ['Int', 'Float', 'Currency', 'Percent'].includes(column.type) ? InputNumber : InputText;
};

const getProps = column => {
  const base = {
    size: 'small',
    placeholder: column.label,
    disabled: column.readOnly,
  };

  if (column.type === 'Float' || column.type === 'Currency') {
    return {
      ...base,
      locale: 'es-AR',
      useGrouping: true,
      minFractionDigits: 2,
      maxFractionDigits: 2,
    };
  }

  if (column.type === 'Percent') {
    return {
      ...base,
      locale: 'es-AR',
      useGrouping: false,
      minFractionDigits: 2,
      maxFractionDigits: 2,
      suffix: '%',
    };
  }

  if (column.type === 'Int') {
    return {
      ...base,
      locale: 'es-AR',
      useGrouping: true,
      minFractionDigits: 0,
      maxFractionDigits: 0,
    };
  }

  return base;
};
</script>

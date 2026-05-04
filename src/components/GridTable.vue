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

    <div class="grid-table__actions">
      <Button
        :label="__('Add Row')"
        icon="pi pi-plus"
        severity="secondary"
        size="small"
        @click="addRow"
        class="grid-table__add-btn"
      />
      <Button
        v-if="showAddMultiple"
        :label="__('Add Multiple')"
        icon="pi pi-list"
        severity="secondary"
        size="small"
        @click="openDialog"
        class="grid-table__add-btn"
      />
    </div>
  </div>

  <!-- Search dialog -->
  <Dialog
    v-model:visible="dialogVisible"
    :header="__('Add Multiple')"
    modal
    :style="{ width: '560px' }"
    @show="doSearch(true)"
  >
    <div class="add-multiple__search-row">
      <InputText
        v-model="searchText"
        :placeholder="__('Search...')"
        fluid
        @keydown.enter="doSearch(true)"
      />
      <Button icon="pi pi-search" size="small" @click="doSearch(true)" />
    </div>

    <div class="add-multiple__results">
      <div
        v-for="item in searchResults"
        :key="item.value"
        class="add-multiple__item"
        @click="selectItem(item)"
      >
        <span class="add-multiple__item-name">{{ item.label || item.value }}</span>
        <span v-if="item.description" class="add-multiple__item-desc">{{ item.description }}</span>
      </div>
      <div v-if="hasSearched && !searchResults.length" class="add-multiple__empty">
        {{ __('No Results') }}
      </div>
      <Button
        v-if="hasMore"
        :label="__('More')"
        severity="secondary"
        size="small"
        class="add-multiple__more-btn"
        @click="loadMore"
      />
    </div>
  </Dialog>

  <!-- Qty dialog -->
  <Dialog
    v-model:visible="qtyDialogVisible"
    :header="__('Set Quantity')"
    modal
    :style="{ width: '280px' }"
  >
    <div class="add-multiple__qty-body">
      <span class="add-multiple__qty-item-name">{{
        pendingItem?.label || pendingItem?.value
      }}</span>
      <InputNumber
        v-model="pendingQty"
        :min="0.001"
        :min-fraction-digits="0"
        :max-fraction-digits="6"
        :use-grouping="false"
        fluid
        autofocus
        @keydown.enter="confirmQty"
      />
    </div>
    <template #footer>
      <Button :label="__('Cancel')" severity="secondary" @click="qtyDialogVisible = false" />
      <Button :label="__('Add')" @click="confirmQty" />
    </template>
  </Dialog>
</template>

<script setup>
import { ref, watch } from 'vue';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import InputNumber from 'primevue/inputnumber';
import Dialog from 'primevue/dialog';
import LinkField from './LinkField.vue';
import { call } from '../libs/frappe-ui';

const props = defineProps({
  data: { type: Array, default: () => [] },
  columns: { type: Array, required: true },
  label: { type: String, default: '' },
  emptyMessage: { type: String, default: 'No Data' },
  filters: { type: Object, default: () => ({}) },
  locale: { type: String, default: 'es-AR' },
  showAddMultiple: { type: Boolean, default: false },
  addMultipleDoctype: { type: String, default: '' },
  addMultipleQuery: { type: String, default: '' },
});

const emit = defineEmits([
  'update:data',
  'rowChange',
  'rowAdd',
  'rowRemove',
  'itemSelected',
  'rowsAdded',
]);

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
    emit('rowChange', row, field);
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
      locale: props.locale,
      useGrouping: true,
      minFractionDigits: 2,
      maxFractionDigits: 2,
      ...(column.prefix ? { prefix: column.prefix } : {}),
    };
  }

  if (column.type === 'Percent') {
    return {
      ...base,
      locale: props.locale,
      useGrouping: false,
      minFractionDigits: 2,
      maxFractionDigits: 2,
      suffix: '%',
    };
  }

  if (column.type === 'Int') {
    return {
      ...base,
      locale: props.locale,
      useGrouping: true,
      minFractionDigits: 0,
      maxFractionDigits: 0,
    };
  }

  return base;
};

// ── Add Multiple ───────────────────────────────────────
const PAGE_LENGTH = 10;

const dialogVisible = ref(false);
const qtyDialogVisible = ref(false);
const searchText = ref('');
const searchResults = ref([]);
const hasMore = ref(false);
const hasSearched = ref(false);
const searchStart = ref(0);
const pendingItem = ref(null);
const pendingQty = ref(1);

const openDialog = () => {
  searchText.value = '';
  searchResults.value = [];
  hasSearched.value = false;
  hasMore.value = false;
  searchStart.value = 0;
  dialogVisible.value = true;
};

const doSearch = async (reset = false) => {
  if (!props.addMultipleDoctype) return;

  if (reset) {
    searchStart.value = 0;
    searchResults.value = [];
  }

  const args = {
    doctype: props.addMultipleDoctype,
    txt: searchText.value,
    page_length: PAGE_LENGTH,
    start: searchStart.value,
  };

  if (props.addMultipleQuery) {
    args.query = props.addMultipleQuery;
  }

  const results = await call('frappe.desk.search.search_link', args);
  hasSearched.value = true;

  if (results?.length) {
    const mapped = results.map(r => ({
      value: r.value,
      label: r.label || r.value,
      description: r.description || '',
    }));
    searchResults.value = reset ? mapped : [...searchResults.value, ...mapped];
    hasMore.value = results.length >= PAGE_LENGTH;
  } else {
    if (reset) searchResults.value = [];
    hasMore.value = false;
  }
};

const loadMore = async () => {
  searchStart.value += PAGE_LENGTH;
  await doSearch(false);
};

const selectItem = item => {
  pendingItem.value = item;
  pendingQty.value = 1;
  qtyDialogVisible.value = true;
};

const confirmQty = () => {
  if (!pendingItem.value || !pendingQty.value) return;
  emit('rowsAdded', [{ value: pendingItem.value.value, qty: pendingQty.value }]);
  qtyDialogVisible.value = false;
};
</script>

<style scoped>
.grid-table__actions {
  display: flex;
  gap: 0.5rem;
  margin-top: 0.5rem;
}

.add-multiple__search-row {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 0.75rem;
}

.add-multiple__results {
  display: flex;
  flex-direction: column;
  gap: 0.125rem;
  max-height: 360px;
  overflow-y: auto;
}

.add-multiple__item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.4rem 0.6rem;
  border-radius: 4px;
  cursor: pointer;
  gap: 1rem;
}

.add-multiple__item:hover {
  background: var(--p-content-hover-background);
}

.add-multiple__item-name {
  font-weight: 500;
  white-space: nowrap;
}

.add-multiple__item-desc {
  font-size: 0.8125rem;
  color: var(--p-text-muted-color);
  text-align: right;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.add-multiple__empty {
  padding: 1rem;
  text-align: center;
  color: var(--p-text-muted-color);
  font-size: 0.875rem;
}

.add-multiple__more-btn {
  align-self: flex-start;
  margin-top: 0.25rem;
}

.add-multiple__qty-body {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.add-multiple__qty-item-name {
  font-weight: 500;
  font-size: 0.875rem;
}
</style>

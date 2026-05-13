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
        :key="column.type === 'Popover' ? `popover-${column.label}` : column.field"
        :field="column.type === 'Popover' ? undefined : column.field"
        :header="column.label"
        :style="{ width: getColumnWidth(column) }"
      >
        <template #body="{ data, index }">
          <div v-if="column.type === 'Popover'" class="grid-popover-cell">
            <span class="grid-popover-preview">{{ getPopoverPreview(column, data) }}</span>
            <Button
              icon="pi pi-pencil"
              text
              rounded
              size="small"
              class="grid-popover-btn"
              @click="openPopover($event, column, data, index)"
            />
          </div>
          <LinkField
            v-else-if="column.type === 'Link'"
            :modelValue="data[column.field]"
            :subtitle="column.subtitleField ? data[column.subtitleField] : ''"
            :doctype="column.options"
            :placeholder="column.label"
            :disabled="column.readOnly"
            :pageLength="props.pageLength"
            class="grid-input"
            @update:modelValue="value => onFieldValueUpdate(data, index, column.field, value)"
            @itemSelected="doc => onItemSelected(index, doc, column)"
            @clear-row="() => clearRowItems(data)"
            :filters="filtersFields[column.field].filters"
            :query="filtersFields[column.field]?.query"
          />
          <component
            v-else
            :is="getComponent(column)"
            :modelValue="truncatedVal(column, data[column.field])"
            v-bind="getProps(column)"
            :class="`grid-input ${column.class || ''}`"
            @update:modelValue="value => onFieldValueUpdate(data, index, column.field, value)"
          />
        </template>
      </Column>

      <Column v-if="!readOnly">
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

    <div v-if="!readOnly" class="grid-table__actions">
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
      <Button
        v-if="showBarcodeScanner"
        icon="pi pi-qrcode"
        severity="secondary"
        size="small"
        @click="openScanDialog"
        class="grid-table__add-btn"
      />
    </div>
  </div>

  <!-- Popover for Popover-type columns -->
  <Popover ref="sharedPopover" class="grid-popover">
    <div v-if="activePopoverColumn" class="grid-popover-content">
      <div
        v-for="subCol in activePopoverColumn.fields"
        :key="subCol.field"
        class="grid-popover-field"
      >
        <label class="grid-popover-label">{{ subCol.label }}</label>
        <component
          :is="getComponent(subCol)"
          :modelValue="truncatedVal(subCol, activePopoverData?.[subCol.field])"
          v-bind="getProps(subCol)"
          class="grid-input"
          @update:modelValue="value => onPopoverFieldUpdate(subCol, value)"
        />
      </div>
      <Button
        :label="__('Accept')"
        size="small"
        fluid
        class="grid-popover-accept"
        @click="sharedPopover.hide()"
      />
    </div>
  </Popover>

  <!-- Search dialog -->
  <Dialog
    v-model:visible="dialogVisible"
    :header="__('Add Multiple')"
    modal
    dismissableMask
    class="nagus-dialog nagus-dialog--md"
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
        <div>
          <span class="add-multiple__item-desc" v-html="item.description"></span>
        </div>
      </div>
      <div v-if="hasSearched && !searchResults.length" class="add-multiple__empty">
        {{ __('No Results') }}
      </div>
    </div>

    <template v-if="hasMore" #footer>
      <Button :label="__('Load more')" severity="secondary" size="small" text @click="loadMore" />
    </template>
  </Dialog>

  <!-- Qty dialog -->
  <Dialog
    v-model:visible="qtyDialogVisible"
    :header="__('Set Quantity')"
    modal
    dismissableMask
    class="nagus-dialog nagus-dialog--sm"
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

  <!-- Barcode scan dialog -->
  <Dialog
    v-model:visible="scanDialogVisible"
    :header="__('Scan Barcode')"
    modal
    dismissableMask
    class="nagus-dialog nagus-dialog--sm"
    @show="startCameraScan"
    @hide="stopCameraScan"
  >
    <div class="barcode-scanner-wrapper">
      <div id="grid-barcode-scanner-area"></div>
      <div class="scan-mask">
        <div class="scan-box"></div>
      </div>
    </div>
  </Dialog>
</template>

<script setup>
import { ref, watch, computed } from 'vue';
import { useToast } from 'primevue/usetoast';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import InputNumber from 'primevue/inputnumber';
import Textarea from 'primevue/textarea';
import Dialog from 'primevue/dialog';
import Popover from 'primevue/popover';
import LinkField from './LinkField.vue';
import NumericField from './NumericField.vue';
import { call } from '../libs/frappe-ui';

const props = defineProps({
  data: { type: Array, default: () => [] },
  columns: { type: Array, required: true },
  label: { type: String, default: '' },
  emptyMessage: { type: String, default: 'No Data' },
  filters: { type: Object, default: () => ({}) },
  numberFormat: { type: String, default: '' },
  floatPrecision: { type: Number, default: 3 },
  currencyPrecision: { type: Number, default: 2 },
  pageLength: { type: Number, default: 10 },
  showAddMultiple: { type: Boolean, default: false },
  showBarcodeScanner: { type: Boolean, default: false },
  readOnly: { type: Boolean, default: false },
  filtersFields: { type: Object, default: () => ({}) },
});

const emit = defineEmits(['update:data', 'rowChange', 'rowAdd', 'rowRemove', 'itemSelected']);

const toast = useToast();
const dataArray = ref([...props.data]);

watch(
  () => props.data,
  newData => {
    dataArray.value = [...newData];
  },
  { deep: true }
);

const NUMERIC_TYPES = ['Float', 'Currency', 'Int', 'Percent'];

/**
 * Initializes default values for a row's fields based on column type.
 * Numeric types (Float, Currency, Int, Percent) default to 0; all others to ''.
 * For Popover columns every sub-field is initialized individually.
 * @param {Object} row - The row object being built
 * @param {Object} col - Column definition from the columns prop
 */
const initRowFields = (row, col) => {
  if (col.type === 'Popover') {
    col.fields.forEach(subCol => {
      row[subCol.field] = NUMERIC_TYPES.includes(subCol.type) ? 0 : '';
    });
  } else {
    row[col.field] = NUMERIC_TYPES.includes(col.type) ? 0 : '';
  }
};

/**
 * Builds a blank row object with all column fields set to their default values
 * and an auto-incremented idx based on the current data length.
 * @returns {Object} A new row ready to be pushed into dataArray
 */
const createEmptyRow = () => {
  const row = { idx: dataArray.value.length + 1 };
  props.columns.forEach(col => initRowFields(row, col));
  return row;
};

/**
 * Resets all editable fields in a row back to their default values without removing the row.
 * Called when the user clears the link field of a row (e.g. deletes the item code).
 * @param {Object} row - The row object to clear
 */
const clearRowItems = row => {
  props.columns.forEach(col => initRowFields(row, col));
  emit('update:data', dataArray.value);
  emit('rowChange', row);
};

/**
 * Appends a new empty row to the table and emits update:data and rowAdd.
 */
const addRow = () => {
  const row = createEmptyRow();
  dataArray.value.push(row);
  emit('update:data', dataArray.value);
  emit('rowAdd', row);
};

/**
 * Removes a row at the given index and emits update:data and rowRemove.
 * @param {number} index - Zero-based index of the row to remove
 */
const removeRow = index => {
  const row = dataArray.value[index];
  dataArray.value.splice(index, 1);
  emit('update:data', dataArray.value);
  emit('rowRemove', row, index);
};

/**
 * Writes a new field value onto both the in-template editing copy and the backing dataArray,
 * then emits update:data and rowChange so the parent can react (e.g. recalculate totals).
 * @param {Object} editingRow - The row reference used inside the template slot
 * @param {number} index - Zero-based index of the row in dataArray
 * @param {string} field - The field name being updated
 * @param {*} value - The new value emitted by the input component
 */
const onFieldValueUpdate = (editingRow, index, field, value) => {
  editingRow[field] = value;

  const row = dataArray.value[index];
  if (row) {
    row[field] = value;
    emit('update:data', dataArray.value);
    emit('rowChange', row, field);
  }
};

/**
 * Called when the user picks a value from a Link column's autocomplete.
 * Emits itemSelected so the parent can fetch additional data (e.g. pricing) for the chosen document.
 * @param {number} index - Zero-based index of the row where the selection happened
 * @param {string|Object} doc - The selected document value returned by the link field
 * @param {Object} column - The column definition that triggered the selection
 */
const onItemSelected = (index, doc, column) => {
  const row = dataArray.value[index];
  if (!row) return;

  emit('itemSelected', { row, itemData: doc, column, index });
  emit('update:data', dataArray.value);
  emit('rowChange', row);
};

/**
 * Resolves the CSS width for a column.
 * If cols is set it is treated as a fraction of a 12-column grid (e.g. cols=4 → 33.33%).
 * Falls back to column.width if provided, otherwise 'auto'.
 * @param {Object} column - Column definition
 * @returns {string} CSS width value
 */
const getColumnWidth = column => {
  if (column.cols) return `${(column.cols / 12) * 100}%`;
  return column.width || 'auto';
};

/**
 * Returns the Vue input component that should render a given column type.
 * Numeric types (Int, Float, Currency, Percent) use NumericField;
 * Textarea uses PrimeVue Textarea; everything else uses InputText.
 * @param {Object} column - Column definition
 * @returns {Component} Vue component reference
 */
const getComponent = column => {
  if (['Int', 'Float', 'Currency', 'Percent'].includes(column.type)) return NumericField;
  if (column.type === 'Textarea') return Textarea;
  return InputText;
};

/**
 * Builds the props object passed to each column's input component.
 * Applies number formatting, fraction digit precision, prefix and grouping settings
 * according to the column type (Currency, Float, Percent, Int, Textarea).
 * @param {Object} column - Column definition including type, prefix, readOnly
 * @returns {Object} Props object ready to be spread onto the component via v-bind
 */
const getProps = column => {
  const isNumeric = ['Int', 'Float', 'Currency', 'Percent'].includes(column.type);
  const base = {
    size: 'small',
    placeholder: isNumeric ? '' : column.label,
    disabled: column.readOnly,
  };

  if (column.type === 'Textarea') {
    return { ...base, autoResize: true, rows: 1 };
  }

  if (column.type === 'Currency') {
    return {
      ...base,
      numberFormat: props.numberFormat,
      useGrouping: true,
      minFractionDigits: props.currencyPrecision,
      maxFractionDigits: props.currencyPrecision,
      ...(column.prefix ? { prefix: column.prefix } : {}),
    };
  }

  if (column.type === 'Float') {
    return {
      ...base,
      numberFormat: props.numberFormat,
      useGrouping: true,
      minFractionDigits: props.floatPrecision,
      maxFractionDigits: props.floatPrecision,
      ...(column.prefix ? { prefix: column.prefix } : {}),
    };
  }

  if (column.type === 'Percent') {
    return {
      ...base,
      numberFormat: props.numberFormat,
      useGrouping: false,
      minFractionDigits: props.floatPrecision,
      maxFractionDigits: props.floatPrecision,
      suffix: '%',
    };
  }

  if (column.type === 'Int') {
    return {
      ...base,
      numberFormat: props.numberFormat,
      useGrouping: true,
      minFractionDigits: 0,
      maxFractionDigits: 0,
    };
  }

  return base;
};

const sharedPopover = ref(null);
const activePopoverColumn = ref(null);
const activePopoverData = ref(null);
const activePopoverIndex = ref(null);

/**
 * Opens the single shared Popover panel anchored to the pencil button that was clicked.
 * Stores the active column, row data and index so the popover fields can read and write
 * from the correct row without needing a popover instance per row.
 * @param {Event} event - The click event used by PrimeVue Popover as its anchor
 * @param {Object} column - The Popover column definition containing the sub-fields array
 * @param {Object} data - The row data object for the clicked row
 * @param {number} index - Zero-based index of the clicked row in dataArray
 */
const openPopover = (event, column, data, index) => {
  activePopoverColumn.value = column;
  activePopoverData.value = data;
  activePopoverIndex.value = index;
  sharedPopover.value.toggle(event);
};

/**
 * Handles a value change emitted by any input inside the popover.
 * Delegates to onFieldValueUpdate using the currently active row index and data,
 * which in turn emits rowChange so the parent can recalculate (e.g. discount → amount).
 * @param {Object} subCol - Sub-column definition from the Popover column's fields array
 * @param {*} value - New value emitted by the input inside the popover
 */
const onPopoverFieldUpdate = (subCol, value) => {
  if (!activePopoverData.value || activePopoverIndex.value === null) return;
  onFieldValueUpdate(activePopoverData.value, activePopoverIndex.value, subCol.field, value);
};

/**
 * Extracts the decimal separator character from the active numberFormat string
 * (e.g. '#,##0.000' → '.', '#.##0,000' → ',').
 * Falls back to '.' when no format is set or the pattern is not recognised.
 */
const decimalSeparator = computed(() => {
  const m = (props.numberFormat || '').match(/[#0]([^#0\s])[#0]+$/);
  return m ? m[1] : '.';
});

/**
 * Truncates a number to the given decimal places without rounding and formats
 * the result using the active locale's decimal separator.
 * e.g. truncate(10.9999, 2) with separator ',' → '10,99'
 * @param {number} num - Value to format
 * @param {number} decimals - Number of decimal places to keep
 * @returns {string}
 */
const truncate = (num, decimals) => {
  const factor = Math.pow(10, decimals);
  const fixed = (Math.trunc(num * factor) / factor).toFixed(decimals);
  return decimalSeparator.value !== '.' ? fixed.replace('.', decimalSeparator.value) : fixed;
};

/**
 * Returns a numerically truncated value (without rounding) for use as modelValue in numeric inputs.
 * Prevents PrimeVue InputNumber from rounding the displayed value when maxFractionDigits is set.
 * @param {Object} col - Column definition with type property
 * @param {*} val - Raw field value from the row data
 * @returns {number|*} Truncated number for Currency/Float/Percent types, raw value otherwise
 */
const truncatedVal = (col, val) => {
  const num = parseFloat(val ?? 0) || 0;
  if (col.type === 'Currency') {
    const factor = Math.pow(10, props.currencyPrecision);
    return Math.trunc(num * factor) / factor;
  }
  if (col.type === 'Float' || col.type === 'Percent') {
    const factor = Math.pow(10, props.floatPrecision);
    return Math.trunc(num * factor) / factor;
  }
  return val;
};

/**
 * Returns a formatted preview string of the first sub-field's current value,
 * always shown next to the pencil button — including when the value is 0 — so the cell
 * mirrors the same default-zero appearance as the inputs inside the popover.
 * Numbers are formatted with the same decimal precision used by the corresponding input type:
 * Percent uses floatPrecision, Currency uses currencyPrecision, Float uses floatPrecision.
 * @param {Object} column - Popover column definition; reads column.fields[0]
 * @param {Object} data - Current row data object
 * @returns {string} Formatted value string using the active decimal separator (e.g. '0,000%', '$ 0,00')
 */
const getPopoverPreview = (column, data) => {
  const first = column.fields?.[0];
  if (!first) return '';
  const val = parseFloat(data[first.field] ?? 0) || 0;
  if (first.type === 'Percent') return `${truncate(val, props.floatPrecision)}%`;
  if (first.type === 'Currency')
    return `${first.prefix || ''}${truncate(val, props.currencyPrecision)}`;
  if (first.type === 'Float') return `${first.prefix || ''}${truncate(val, props.floatPrecision)}`;
  const raw = data[first.field];
  return raw !== null && raw !== undefined ? String(raw) : '';
};

/** The first Link-type column; used as the search target in the Add Multiple dialog */
const addMultipleLinkColumn = computed(() => props.columns.find(c => c.type === 'Link'));
/** The first Int or Float column; receives the quantity entered in the Add Multiple qty dialog */
const addMultipleQtyColumn = computed(() =>
  props.columns.find(c => c.type === 'Int' || c.type === 'Float')
);

const dialogVisible = ref(false);
const qtyDialogVisible = ref(false);
const searchText = ref('');
const searchResults = ref([]);
const hasMore = ref(false);
const hasSearched = ref(false);
const currentPageLength = ref(props.pageLength);
const pendingItem = ref(null);
const pendingQty = ref(1);

/**
 * Resets the Add Multiple search state and opens the search dialog.
 * The dialog triggers doSearch(true) on @show to load an initial result set.
 */
const openDialog = () => {
  searchText.value = '';
  searchResults.value = [];
  hasSearched.value = false;
  hasMore.value = false;
  currentPageLength.value = props.pageLength;
  dialogVisible.value = true;
};

/**
 * Queries the Frappe link-search API for items matching the current searchText.
 * When reset is true the page cursor is reset so the first page is returned.
 * Sets hasMore to true when the result count equals the page length, enabling the Load More button.
 * @param {boolean} reset - Whether to restart from the first page (default false)
 */
const doSearch = async (reset = false) => {
  const linkCol = addMultipleLinkColumn.value;
  if (!linkCol) return;

  if (reset) {
    currentPageLength.value = props.pageLength;
  }

  const args = {
    doctype: linkCol.options,
    txt: searchText.value,
    page_length: currentPageLength.value,
    filters: props.filtersFields[linkCol.field]?.filters,
  };

  if (props.filtersFields[linkCol.field]?.query) {
    args.query = props.filtersFields[linkCol.field]?.query;
  }

  const results = await call('frappe.desk.search.search_link', args);
  hasSearched.value = true;
  searchResults.value =
    results?.map(r => ({
      value: r.value,
      label: r.label || r.value,
      description: r.description || '',
    })) || [];
  hasMore.value = results?.length >= currentPageLength.value;
};

/**
 * Increases the page length by one page and re-runs the search to append more results.
 */
const loadMore = async () => {
  currentPageLength.value += props.pageLength;
  await doSearch(false);
};

/**
 * Stores the chosen search result as the pending item and opens the qty dialog
 * so the user can set how many units to add before the row is created.
 * @param {Object} item - Search result object with value, label and description
 */
const selectItem = item => {
  pendingItem.value = item;
  pendingQty.value = 1;
  qtyDialogVisible.value = true;
};

/**
 * Confirms the quantity entered in the qty dialog, creates a new row with the pending item
 * and qty pre-filled, pushes it into dataArray and fires itemSelected so the parent can
 * fetch pricing for the newly added row. Closes the qty dialog on completion.
 */
const confirmQty = () => {
  if (!pendingItem.value || !pendingQty.value) return;

  const linkCol = addMultipleLinkColumn.value;
  if (!linkCol) return;

  const row = createEmptyRow();
  row[linkCol.field] = pendingItem.value.value;
  if (addMultipleQtyColumn.value) row[addMultipleQtyColumn.value.field] = pendingQty.value;

  dataArray.value.push(row);
  onItemSelected(dataArray.value.length - 1, pendingItem.value.value, linkCol);

  qtyDialogVisible.value = false;
};

const scanDialogVisible = ref(false);
let qrHandler = null;

const openScanDialog = () => {
  scanDialogVisible.value = true;
};

const startCameraScan = async () => {
  await frappe.require('/assets/frappe/node_modules/html5-qrcode/html5-qrcode.min.js');

  // eslint-disable-next-line no-undef
  qrHandler = new Html5Qrcode('grid-barcode-scanner-area');
  qrHandler
    .start(
      { facingMode: 'environment' },
      { fps: 10, qrbox: 250 },
      async decodedText => {
        await stopCameraScan();
        try {
          const result = await call('erpnext.stock.utils.scan_barcode', {
            search_value: decodedText,
          });
          const itemCode = result?.item_code;
          if (!itemCode) {
            scanDialogVisible.value = false;
            toast.add({
              severity: 'error',
              summary: __('Barcode'),
              detail: __('No item found for this barcode'),
              life: 3000,
            });
            return;
          }
          scanDialogVisible.value = false;
          pendingItem.value = { value: itemCode, label: itemCode, description: '' };
          pendingQty.value = 1;
          confirmQty();
        } catch {
          scanDialogVisible.value = false;
          toast.add({
            severity: 'error',
            summary: __('Barcode'),
            detail: __('Error processing barcode'),
            life: 3000,
          });
        }
      },
      () => {}
    )
    .catch(() => {
      toast.add({
        severity: 'error',
        summary: __('Camera'),
        detail: __('Could not access camera'),
        life: 3000,
      });
    });
};

const stopCameraScan = async () => {
  if (qrHandler) {
    try {
      await qrHandler.stop();
    } catch {
      // already stopped
    }
    qrHandler = null;
  }
};
</script>
<style>
.grid-table {
  width: 100%;
}

.grid-table__label {
  display: block;
  margin-bottom: 0.75rem;
  font-weight: 400;
  font-size: 0.85rem;
  color: #6b7280;
}

.grid-table__datatable {
  margin-bottom: 0.5rem;
  border: 1px solid #e5e7eb;
  border-radius: 4px;
}

.grid-table__datatable .p-datatable-thead > tr > th {
  background: transparent;
  border-bottom: 1px solid #e5e7eb;
  border-right: 1px solid #e5e7eb;
  padding: 0.25rem !important;
  font-weight: 400;
  font-size: 0.8125rem;
  color: #374151;
  text-transform: none;
}

.grid-table__datatable .p-datatable-thead > tr > th:last-child {
  border-right: none;
}

.grid-table__datatable .p-datatable-tbody > tr > td {
  padding: 0.25rem !important;
  border-bottom: 1px solid #e5e7eb;
  border-right: 1px solid #e5e7eb;
}

.grid-table__datatable .p-datatable-tbody > tr > td:last-child {
  border-right: none;
}

.grid-table__datatable .p-datatable-tbody > tr:last-child > td {
  border-bottom: none;
}

.grid-table__datatable .grid-input.p-inputtext,
.grid-table__datatable .grid-input.p-inputnumber .p-inputnumber-input {
  width: 100%;
  padding: 0.4rem 0.5rem;
  font-size: 0.8125rem;
  background: transparent;
  transition: all 0.2s;
}

.grid-table__datatable .grid-input.p-inputnumber .p-inputnumber-input {
  text-align: right;
  border: 1px solid #cbd5e1;
}

.grid-table__datatable .grid-input.p-inputtext:hover,
.grid-table__datatable .grid-input.p-inputnumber .p-inputnumber-input:hover {
  border-color: #e5e7eb;
  background: #ffffff;
}

.grid-table__datatable .grid-input.p-inputtext:focus,
.grid-table__datatable .grid-input.p-inputnumber .p-inputnumber-input:focus {
  background: #ffffff;
}

.grid-table__datatable .grid-input.p-inputtext:disabled,
.grid-table__datatable .grid-input.p-inputnumber .p-inputnumber-input:disabled {
  background: transparent;
  border: none;
  color: #374151;
  opacity: 0.7;
}

.grid-table__datatable .grid-input.p-inputnumber {
  width: 100%;
}

.grid-table__datatable .p-button.p-button-danger.p-button-text {
  color: #6b7280;
  padding: 0.25rem;
  width: 2rem;
  height: 2rem;
}

.grid-table__datatable .p-button.p-button-danger.p-button-text:hover {
  background: #fef2f2;
  color: #dc2626;
}

.grid-table__empty {
  text-align: center;
  padding: 1rem;
  color: #6b7280;
  font-size: 0.875rem;
}

.grid-table__add-btn {
  width: auto;
  font-size: 0.8125rem;
  padding: 0.5rem 1rem;
}

.grid-table__add-btn .p-button-label {
  font-weight: 400;
}

.barcode-scanner-wrapper {
  position: relative;
  width: 100%;
  overflow: hidden;
  border-radius: 6px;
  background: #000;
}

#grid-barcode-scanner-area video {
  width: 100% !important;
  height: auto !important;
  display: block;
}

/* hide html5-qrcode's own shaded regions, buttons and status text */
#grid-barcode-scanner-area > div,
#grid-barcode-scanner-area span,
#grid-barcode-scanner-area select,
#grid-barcode-scanner-area button,
#grid-barcode-scanner-area img {
  display: none !important;
}

.scan-mask {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
}

.scan-box {
  width: 220px;
  height: 220px;
  box-shadow: 0 0 0 9999px rgba(0, 0, 0, 0.5);
  border: 2px solid rgba(255, 255, 255, 0.75);
  border-radius: 4px;
}

.grid-readonly-value {
  display: block;
  padding: 0.5rem;
  color: #374151;
  text-align: right;
}

.grid-table__actions {
  display: flex;
  gap: 0.5rem;
  margin-top: 0.5rem;
}

.add-multiple__search-row {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
}

.add-multiple__results {
  display: flex;
  flex-direction: column;
}

.add-multiple__item {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  padding: 0.5rem 0.5rem;
  border-bottom: 1px solid var(--p-content-border-color);
  cursor: pointer;
  gap: 0.75rem;
  transition: background 0.15s;
}

.add-multiple__item:last-child {
  border-bottom: none;
}

.add-multiple__item:hover {
  background: var(--p-content-hover-background);
}

.add-multiple__item-name {
  font-size: 0.8125rem;
  font-weight: 400;
}

.add-multiple__item-desc {
  font-size: 0.75rem;
  color: var(--p-text-muted-color);
  text-align: right;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.add-multiple__empty {
  padding: 1.5rem 0;
  text-align: center;
  color: var(--p-text-muted-color);
  font-size: 0.8125rem;
}

.add-multiple__qty-body {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.add-multiple__qty-item-name {
  font-size: 0.8125rem;
  font-weight: 400;
  color: var(--p-text-muted-color);
}

.grid-popover-cell {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 0.25rem;
}

.grid-popover-preview {
  color: #374151;
}

.grid-popover-btn.p-button {
  width: 1.5rem !important;
  height: 1.5rem !important;
  padding: 0 !important;
  flex-shrink: 0;
}

.grid-popover-content {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  min-width: 180px;
  padding: 0.25rem;
}

.grid-popover-label {
  display: block;
  font-weight: 400;
  color: #6b7280;
  margin-bottom: 0.25rem;
}

.grid-popover-field .p-inputnumber,
.grid-popover-field .p-inputtext {
  width: 100%;
}

.grid-popover-field .p-inputtext,
.grid-popover-field .p-inputnumber-input {
  font-size: 14px !important;
}

.grid-popover-accept {
  margin-top: 0.25rem;
}

/* ========================================
   Dark Mode
   ======================================== */

[data-theme='dark'] .grid-table__label {
  color: #9ca3af;
}

[data-theme='dark'] .grid-table__datatable {
  border-color: #374151;
}

[data-theme='dark'] .grid-table__datatable .p-datatable-thead > tr > th {
  background: transparent;
  border-bottom-color: #374151;
  border-right-color: #374151;
  color: #e5e7eb;
}

[data-theme='dark'] .grid-table__datatable .p-datatable-tbody > tr > td {
  border-bottom-color: #374151;
  border-right-color: #374151;
}

[data-theme='dark'] .grid-table__datatable .grid-input.p-inputnumber .p-inputnumber-input {
  border-color: #4b5563;
}

[data-theme='dark'] .grid-table__datatable .grid-input.p-inputtext:hover,
[data-theme='dark'] .grid-table__datatable .grid-input.p-inputnumber .p-inputnumber-input:hover {
  border-color: #6b7280;
  background: #111827;
}

[data-theme='dark'] .grid-table__datatable .grid-input.p-inputtext:focus,
[data-theme='dark'] .grid-table__datatable .grid-input.p-inputnumber .p-inputnumber-input:focus {
  background: #111827;
}

[data-theme='dark'] .grid-table__datatable .grid-input.p-inputtext:disabled,
[data-theme='dark'] .grid-table__datatable .grid-input.p-inputnumber .p-inputnumber-input:disabled {
  color: #9ca3af;
}

[data-theme='dark'] .grid-table__datatable .p-button.p-button-danger.p-button-text:hover {
  background: #450a0a;
}

[data-theme='dark'] .grid-table__empty {
  color: #9ca3af;
}

[data-theme='dark'] .grid-readonly-value {
  color: #e5e7eb;
}

[data-theme='dark'] .grid-popover-preview {
  color: #e5e7eb;
}

[data-theme='dark'] .grid-popover-label {
  color: #9ca3af;
}
</style>

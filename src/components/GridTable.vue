<template>
  <div ref="gridRoot" class="grid-table">
    <label v-if="label" class="grid-table__label">{{ label }}</label>

    <div v-if="showScanbar" class="form-field barcode-field">
      <IconField class="barcode-icon-field">
        <FloatLabel variant="on">
          <InputText id="scan_barcode" v-model="barcodeVal" />
          <label for="scan_barcode">{{ __('Scan Barcode') }}</label>
        </FloatLabel>
        <InputIcon class="pi pi-qrcode barcode-scan-icon" @click="emit('barcodeCameraScan')" />
      </IconField>
    </div>

    <DataTable
      :value="dataArray"
      size="small"
      :scrollable="true"
      :scroll-height="scrollHeight"
      :loading="loading"
      :row-class="row => (showCheck && row.__checked ? 'grid-table__row--checked' : '')"
      :class="[
        'grid-table__datatable',
        { 'grid-table__datatable--clickable': rowClick && !showCheck },
      ]"
      @row-click="!showCheck && rowClick ? emit('rowClick', $event.data, $event.index) : null"
    >
      <template #empty>
        <div class="grid-table__empty">
          {{ emptyMessage }}
        </div>
      </template>

      <Column v-if="showCheck" style="width: 2.5rem">
        <template #header>
          <input type="checkbox" :checked="allChecked" @change="toggleAll" />
        </template>
        <template #body="{ data }">
          <input type="checkbox" :checked="data.__checked" @change.stop="checkRow(data)" />
        </template>
      </Column>

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
            :model-value="data[column.field]"
            :row="data"
            :field="column.field"
            :doctype="column.options"
            :placeholder="column.label"
            :disabled="column.readOnly"
            :page-length="props.pageLength"
            class="grid-input"
            :filters="filtersFields[column.field].filters"
            :query="filtersFields[column.field]?.query"
            @update:model-value="value => onFieldValueUpdate(data, index, column.field, value)"
            @item-selected="doc => onItemSelected(index, doc, column)"
            @clear-row="
              () =>
                column.clearRow
                  ? clearRowItems(data)
                  : onFieldValueUpdate(data, index, column.field, null)
            "
          />
          <component
            :is="getComponent(column)"
            v-else
            :model-value="truncatedVal(column, data[column.field])"
            v-bind="getProps(column)"
            :class="`grid-input ${column.class || ''}`"
            @update:model-value="value => onFieldValueUpdate(data, index, column.field, value)"
          />
        </template>
      </Column>

      <Column v-if="showDelRow && (!readOnly || allowRowDelete)">
        <template #body="{ index }">
          <Button
            icon="pi pi-trash"
            severity="danger"
            text
            size="small"
            @click.stop="removeRow(index)"
            @keydown.tab="
              e => {
                if (e.shiftKey || index !== dataArray.length - 1) return;
                e.stopPropagation();
                e.preventDefault();
                addRow();
              }
            "
          />
        </template>
      </Column>
    </DataTable>

    <div v-if="!readOnly" class="grid-table__actions">
      <Button
        v-if="showAddItem"
        :label="__('Add Row')"
        icon="pi pi-plus"
        severity="secondary"
        size="small"
        class="grid-table__add-btn"
        @click="addRow"
      />
      <Button
        v-if="showAddMultiple"
        :label="__('Add Multiple')"
        icon="pi pi-list"
        severity="secondary"
        size="small"
        class="grid-table__add-btn"
        @click="openDialog"
      />
    </div>
  </div>

  <!-- Popover for Popover-type columns -->
  <Popover ref="sharedPopover" class="grid-popover" @show="onPopoverShow" @hide="onPopoverHide">
    <div v-if="activePopoverColumn" ref="popoverContent" class="grid-popover-content">
      <div
        v-for="subCol in activePopoverColumn.fields"
        :key="subCol.field"
        class="grid-popover-field"
      >
        <label class="grid-popover-label">{{ subCol.label }}</label>
        <component
          :is="getComponent(subCol)"
          :model-value="truncatedVal(subCol, activePopoverData?.[subCol.field])"
          v-bind="getProps(subCol)"
          class="grid-input"
          @update:model-value="value => onPopoverFieldUpdate(subCol, value)"
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
    dismissable-mask
    class="nagus-dialog nagus-dialog--md add-multiple-dialog"
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
          <span class="add-multiple__item-desc" v-html="sanitizeHtml(item.description)" />
        </div>
      </div>
      <div v-if="hasSearched && !searchResults.length" class="add-multiple__empty">
        {{ __('No Results') }}
      </div>
    </div>

    <template v-if="hasSearched" #footer>
      <span class="add-multiple__results-count">{{ searchResultsSummary }}</span>
      <Button
        :label="__('Load more')"
        severity="secondary"
        size="small"
        text
        :disabled="!hasMore"
        @click="loadMore"
      />
    </template>
  </Dialog>

  <!-- Qty dialog -->
  <Dialog
    v-model:visible="qtyDialogVisible"
    :header="__('Set Quantity')"
    modal
    dismissable-mask
    class="nagus-dialog nagus-dialog--sm add-multiple-qty-dialog"
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
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import InputNumber from 'primevue/inputnumber';
import Dialog from 'primevue/dialog';
import Popover from 'primevue/popover';
import FloatLabel from 'primevue/floatlabel';
import IconField from 'primevue/iconfield';
import InputIcon from 'primevue/inputicon';
import LinkField from './LinkField.vue';
import { sanitizeHtml } from '../utils/sanitizeHtml';
import { useGridTable } from '../composables/useGridTable.js';
import { computed } from 'vue';

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
  dateFormat: { type: String, default: 'dd/mm/yy' },
  showAddItem: { type: Boolean, default: true },
  showAddMultiple: { type: Boolean, default: false },
  readOnly: { type: Boolean, default: false },
  filtersFields: { type: Object, default: () => ({}) },
  rowClick: { type: Boolean, default: false },
  showScanbar: { type: Boolean, default: false },
  showDelRow: { type: Boolean, default: true },
  allowRowDelete: { type: Boolean, default: false },
  showCheck: { type: Boolean, default: false },
  loading: { type: Boolean, default: false },
  scrollHeight: { type: String, default: '300px' },
});

const emit = defineEmits([
  'update:data',
  'rowChange',
  'rowAdd',
  'rowRemove',
  'itemSelected',
  'rowClick',
  'barcodeScanned',
  'barcodeCameraScan',
  'selectionChange',
]);

const {
  dataArray,
  barcodeVal,
  sharedPopover,
  popoverContent,
  gridRoot,
  activePopoverColumn,
  activePopoverData,
  dialogVisible,
  qtyDialogVisible,
  searchText,
  searchResults,
  hasMore,
  hasSearched,
  pendingItem,
  pendingQty,
  allChecked,
  checkRow,
  toggleAll,
  addRow,
  removeRow,
  clearRowItems,
  onFieldValueUpdate,
  onItemSelected,
  getColumnWidth,
  getComponent,
  getProps,
  truncatedVal,
  openPopover,
  onPopoverShow,
  onPopoverHide,
  onPopoverFieldUpdate,
  getPopoverPreview,
  openDialog,
  doSearch,
  loadMore,
  selectItem,
  confirmQty,
} = useGridTable(props, emit);

/**
 * `frappe.desk.search.search_link` (the real backend endpoint) returns a plain array with no
 * total count, so this only ever reports how many are on screen, never "of N".
 */
const searchResultsSummary = computed(() =>
  __('Showing {0} results', [searchResults.value.length])
);
</script>
<style>
.grid-table {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.5rem;
}

.barcode-field {
  grid-column: span 1;
}

.grid-table__label {
  display: block;
  margin-bottom: 0.75rem;
  font-weight: 400;
  font-size: 0.85rem;
  color: #6b7280;
  grid-column: 1 / -1;
}

.grid-table__datatable {
  margin-bottom: 0.5rem;
  border: 1px solid #e5e7eb;
  border-radius: 4px;
  grid-column: 1 / -1;
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
.grid-table__datatable .grid-input.p-inputnumber .p-inputnumber-input,
.grid-table__datatable .grid-input.p-datepicker .p-datepicker-input {
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
.grid-table__datatable .grid-input.p-inputnumber .p-inputnumber-input:hover,
.grid-table__datatable .grid-input.p-datepicker .p-datepicker-input:hover {
  border-color: #e5e7eb;
  background: #ffffff;
}

.grid-table__datatable .grid-input.p-inputtext:focus,
.grid-table__datatable .grid-input.p-inputnumber .p-inputnumber-input:focus,
.grid-table__datatable .grid-input.p-datepicker .p-datepicker-input:focus {
  background: #ffffff;
}

.grid-table__datatable .grid-input.p-datepicker {
  width: 100%;
}

.grid-table__datatable .grid-input.p-inputtext:disabled,
.grid-table__datatable .grid-input.p-datepicker .p-datepicker-input:disabled,
.grid-table__datatable .grid-input.p-inputnumber .p-inputnumber-input:disabled {
  background: transparent;
  border: none !important;
  box-shadow: none;
  outline: none;
  color: #374151;
  opacity: 0.7;
  pointer-events: none;
  padding: 0px !important;
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

.grid-readonly-value {
  display: block;
  padding: 0.5rem;
  color: #374151;
  text-align: right;
}

.grid-table__actions {
  display: flex;
  gap: 0.5rem;
}

.p-dialog:has(.add-multiple__search-row),
.p-dialog.add-multiple-dialog,
.add-multiple-dialog {
  width: 42rem !important;
  max-width: calc(100vw - 2rem) !important;
  border-radius: 0.75rem;
  overflow: hidden;
}

.p-dialog:has(.add-multiple__search-row) .p-dialog-header,
.add-multiple-dialog .p-dialog-header {
  align-items: flex-start;
  padding: 1rem 1rem 0.75rem;
}

.p-dialog:has(.add-multiple__search-row) .p-dialog-title,
.add-multiple-dialog .p-dialog-title {
  color: #1f2937;
  font-size: 1rem;
  font-weight: 600;
}

/*
 * nagus styles its dialog close button as a small "×" glyph (public/scss/components/
 * _dialogs.scss + overrides/_primevue.scss): size, radius, shadow and hover colors reproduced
 * here. Two things don't carry over, both left as PrimeVue's own defaults instead:
 *  - nagus keys every rule off `.p-dialog-header-close`, the PrimeVue 3 class name; PrimeVue 4
 *    (what both nagus and nvg-ui run) renders `.p-dialog-close-button`, so that styling never
 *    actually applies anywhere in nagus today — reproduced here under the class that's real.
 *  - nagus also hides the icon and swaps in a literal "×" via `::after`. PrimeVue 4's own
 *    Button already reserves that pseudo-element for icon-only buttons (forces width:0 and
 *    visibility:hidden on it), so content injected there never renders — confirmed empirically,
 *    not just a hunch. The close button keeps PrimeVue's stock X icon instead.
 * !important throughout (matching nagus's own approach): PrimeVue injects each component's
 * theme CSS lazily, on first use, which can land after nvg-ui's own <style> — so equal-
 * specificity selectors here lose to PrimeVue's default background/color without it.
 */
.p-dialog:has(.add-multiple__search-row) .p-dialog-close-button,
.p-dialog:has(.add-multiple__qty-body) .p-dialog-close-button,
.add-multiple-dialog .p-dialog-close-button,
.add-multiple-qty-dialog .p-dialog-close-button {
  width: 2rem !important;
  height: 2rem !important;
  padding: 0 !important;
  border: 1px solid #dbe1ea !important;
  border-radius: 0.5rem !important;
  color: #94a3b8 !important;
  background: #ffffff !important;
  box-shadow: none !important;
  transition:
    border-color 0.2s,
    background 0.2s,
    color 0.2s;
}

.p-dialog:has(.add-multiple__search-row) .p-dialog-close-button:hover,
.p-dialog:has(.add-multiple__qty-body) .p-dialog-close-button:hover,
.add-multiple-dialog .p-dialog-close-button:hover,
.add-multiple-qty-dialog .p-dialog-close-button:hover {
  border-color: #cbd5e1 !important;
  background: #f8fafc !important;
  color: #64748b !important;
}

.p-dialog:has(.add-multiple__search-row) .p-dialog-close-button:focus,
.p-dialog:has(.add-multiple__search-row) .p-dialog-close-button:focus-visible,
.p-dialog:has(.add-multiple__search-row) .p-dialog-close-button.p-focus,
.p-dialog:has(.add-multiple__qty-body) .p-dialog-close-button:focus,
.p-dialog:has(.add-multiple__qty-body) .p-dialog-close-button:focus-visible,
.p-dialog:has(.add-multiple__qty-body) .p-dialog-close-button.p-focus,
.add-multiple-dialog .p-dialog-close-button:focus,
.add-multiple-dialog .p-dialog-close-button:focus-visible,
.add-multiple-dialog .p-dialog-close-button.p-focus,
.add-multiple-qty-dialog .p-dialog-close-button:focus,
.add-multiple-qty-dialog .p-dialog-close-button:focus-visible,
.add-multiple-qty-dialog .p-dialog-close-button.p-focus {
  outline: none !important;
  box-shadow: none !important;
}

.p-dialog:has(.add-multiple__search-row) .p-dialog-content,
.add-multiple-dialog .p-dialog-content {
  padding: 0 1rem;
}

.p-dialog:has(.add-multiple__search-row) .p-dialog-footer,
.add-multiple-dialog .p-dialog-footer {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 1.25rem;
  padding: 0.875rem 1rem 1rem;
  border-top: none;
}

.add-multiple__results-count {
  margin-right: auto;
  color: #64748b;
  font-size: 0.78rem;
  font-weight: 600;
  line-height: 1.2;
}

.add-multiple__search-row {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 2rem;
  gap: 0.375rem;
  margin-bottom: 0.625rem;
}

.add-multiple__search-row .p-inputtext {
  min-height: var(--input-height, 2rem);
  padding-block: 0.35rem;
  padding-inline: 0.65rem;
  border: 1px solid #dbe1ea;
  border-radius: 0.5rem;
  color: #334155;
  font-size: 0.75rem;
}

.add-multiple__search-row .p-inputtext::placeholder {
  color: #94a3b8;
}

.add-multiple__search-row .p-inputtext:hover,
.add-multiple__search-row .p-inputtext:focus {
  border-color: #cbd5e1;
}

/*
 * !important here for the same reason as the dialog close button: nagus's own .p-button /
 * .p-button-icon-only overrides (public/scss/overrides/_primevue.scss) also use !important,
 * and being declared later in that file, its horizontal padding wins over a plain (non-
 * !important) width/padding here — leaving a fixed-width square button with side padding
 * added back in, i.e. not actually square anymore. Matching nagus's own --input-height token
 * keeps this button exactly as tall as the search input next to it.
 */
.add-multiple__search-row .p-button {
  width: var(--input-height, 2rem) !important;
  min-width: var(--input-height, 2rem) !important;
  height: var(--input-height, 2rem) !important;
  padding: 0 !important;
  border-radius: 0.5rem;
}

.add-multiple__search-row .p-button .p-button-icon {
  font-size: 0.75rem;
}

.add-multiple__results {
  --add-multiple-code-column: minmax(6.25rem, 7rem);
  --add-multiple-description-column: minmax(0, 1fr);

  position: relative;
  display: grid;
  grid-template-columns: var(--add-multiple-code-column) var(--add-multiple-description-column);
  max-height: 21rem;
  overflow: auto;
  border: 1px solid #e6ebf2;
  border-radius: 0.75rem;
  background: #ffffff;
}

.add-multiple__results::before,
.add-multiple__results::after {
  position: sticky;
  top: 0;
  z-index: 2;
  min-width: 0;
  padding: 0.7rem 1rem;
  border-bottom: 1px solid #edf2f7;
  background: #fafbfc;
  color: #7b8794;
  font-size: 0.75rem;
  font-weight: 600;
}

.add-multiple__results::before {
  content: 'Code';
  grid-column: 1;
  grid-row: 1;
}

.add-multiple__results::after {
  content: 'Description';
  grid-column: 2;
  grid-row: 1;
}

.add-multiple__item {
  display: contents;
  cursor: pointer;
}

.add-multiple__item > * {
  display: flex;
  align-items: center;
  min-width: 0;
  min-height: 2.9rem;
  padding: 0.75rem 1rem;
  border-bottom: 1px solid #edf2f7;
  cursor: pointer;
  transition: background 0.15s;
}

.add-multiple__item:last-of-type > * {
  border-bottom: none;
}

.add-multiple__item:hover > * {
  background: #f8fafc;
}

.add-multiple__item-name {
  grid-column: 1;
  color: #94a3b8;
  font-size: 0.8rem;
  font-weight: 600;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.add-multiple__item > div {
  grid-column: 2;
}

.add-multiple__item-desc {
  display: block;
  color: #475569;
  font-size: 0.8rem;
  text-align: left;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.add-multiple__empty {
  grid-column: 1 / -1;
  padding: 2rem 1rem;
  text-align: center;
  color: #94a3b8;
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
[data-theme='dark'] .grid-table__datatable .grid-input.p-inputnumber .p-inputnumber-input:hover,
[data-theme='dark'] .grid-table__datatable .grid-input.p-datepicker .p-datepicker-input:hover {
  border-color: #6b7280;
  background: #111827;
}

[data-theme='dark'] .grid-table__datatable .grid-input.p-inputtext:focus,
[data-theme='dark'] .grid-table__datatable .grid-input.p-inputnumber .p-inputnumber-input:focus,
[data-theme='dark'] .grid-table__datatable .grid-input.p-datepicker .p-datepicker-input:focus {
  background: #111827;
}

[data-theme='dark'] .grid-table__datatable .grid-input.p-inputnumber .p-inputnumber-input:disabled,
[data-theme='dark'] .grid-table__datatable .grid-input.p-datepicker .p-datepicker-input:disabled,
[data-theme='dark'] .grid-table__datatable .grid-input.p-inputtext:disabled {
  color: #9ca3af;
  box-shadow: none;
  outline: none;
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

[data-theme='dark'] .p-dialog:has(.add-multiple__search-row) .p-dialog-title,
[data-theme='dark'] .add-multiple-dialog .p-dialog-title {
  color: #e5e7eb;
}

[data-theme='dark'] .p-dialog:has(.add-multiple__search-row) .p-dialog-close-button,
[data-theme='dark'] .p-dialog:has(.add-multiple__qty-body) .p-dialog-close-button,
[data-theme='dark'] .add-multiple-dialog .p-dialog-close-button,
[data-theme='dark'] .add-multiple-qty-dialog .p-dialog-close-button {
  border-color: #334155 !important;
  color: #94a3b8 !important;
  background: #111827 !important;
}

[data-theme='dark'] .p-dialog:has(.add-multiple__search-row) .p-dialog-close-button:hover,
[data-theme='dark'] .p-dialog:has(.add-multiple__qty-body) .p-dialog-close-button:hover,
[data-theme='dark'] .add-multiple-dialog .p-dialog-close-button:hover,
[data-theme='dark'] .add-multiple-qty-dialog .p-dialog-close-button:hover {
  border-color: #475569 !important;
  background: #1f2937 !important;
  color: #cbd5e1 !important;
}

[data-theme='dark'] .add-multiple__search-row .p-inputtext {
  border-color: #334155;
  color: #e5e7eb;
  background: #0f172a;
}

[data-theme='dark'] .add-multiple__search-row .p-inputtext::placeholder,
[data-theme='dark'] .add-multiple__item-name,
[data-theme='dark'] .add-multiple__empty,
[data-theme='dark'] .add-multiple__results-count {
  color: #94a3b8;
}

[data-theme='dark'] .add-multiple__search-row .p-inputtext:hover,
[data-theme='dark'] .add-multiple__search-row .p-inputtext:focus {
  border-color: #475569;
}

[data-theme='dark'] .add-multiple__results {
  border-color: #1e293b;
  background: #0f172a;
}

[data-theme='dark'] .add-multiple__results::before,
[data-theme='dark'] .add-multiple__results::after {
  border-bottom-color: #1e293b;
  background: #111827;
  color: #94a3b8;
}

[data-theme='dark'] .add-multiple__item > * {
  border-bottom-color: #1e293b;
}

[data-theme='dark'] .add-multiple__item:hover > * {
  background: #111827;
}

[data-theme='dark'] .add-multiple__item-desc {
  color: #cbd5e1;
}

.grid-table__datatable--clickable .p-datatable-tbody > tr {
  cursor: pointer;
}

.grid-table__datatable--clickable .p-datatable-tbody > tr:hover > td {
  background: color-mix(in srgb, var(--p-primary-color) 12%, transparent) !important;
}

.grid-table__datatable .p-datatable-tbody > tr.grid-table__row--checked > td {
  background: color-mix(in srgb, var(--p-primary-color) 18%, transparent) !important;
}
</style>

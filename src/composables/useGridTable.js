import { ref, computed, watch } from 'vue';
import { debounce } from 'lodash-es';
import InputText from 'primevue/inputtext';
import Textarea from 'primevue/textarea';
import DatePicker from 'primevue/datepicker';
import NumericField from '../components/NumericField.vue';
import { call } from '../libs/frappe-client';

const NUMERIC_TYPES = ['Float', 'Currency', 'Int', 'Percent'];

/**
 * A single GridTable column definition (also reused for a Popover column's
 * nested `fields`).
 * @typedef {Object} GridTableColumn
 * @property {string} field
 * @property {string} [label]
 * @property {string} [type] - Data, Int, Float, Currency, Percent, Textarea, Date, Link, Popover, ...
 * @property {string} [options] - Link doctype
 * @property {string} [width]
 * @property {number} [cols] - Fraction of a 12-column grid, e.g. 4 = 33.33%
 * @property {boolean} [readOnly]
 * @property {string} [prefix]
 * @property {string} [subtitleField]
 * @property {boolean} [clearRow] - Clear the whole row instead of just this field on clear
 * @property {Object.<string, any>} [componentProps] - Overrides the auto-built input props entirely
 * @property {GridTableColumn[]} [fields] - Sub-fields, only for type: 'Popover'
 */

/**
 * A single editable row. Always has `idx`; other keys are the column fields
 * (e.g. `row.item_code`), plus `__checked` when `showCheck` is enabled.
 * @typedef {Object.<string, any>} GridTableRow
 */

/**
 * @typedef {Object} GridTableProps
 * @property {GridTableRow[]} data
 * @property {GridTableColumn[]} columns
 * @property {string} [label]
 * @property {string} [emptyMessage]
 * @property {Object.<string, any>} [filters]
 * @property {string} [numberFormat]
 * @property {number} [floatPrecision]
 * @property {number} [currencyPrecision]
 * @property {number} [pageLength]
 * @property {string} [dateFormat]
 * @property {boolean} [showAddItem]
 * @property {boolean} [showAddMultiple]
 * @property {boolean} [readOnly]
 * @property {Object.<string, { filters?: Object.<string, any>, query?: string }>} [filtersFields]
 * @property {boolean} [rowClick]
 * @property {boolean} [showScanbar]
 * @property {boolean} [showDelRow]
 * @property {boolean} [showCheck]
 * @property {boolean} [loading]
 * @property {string} [scrollHeight]
 */

/**
 * Drives GridTable.vue: owns the editable row data, renders the right input
 * component per column type, handles row add/remove/selection, the shared
 * popover for Popover-type columns, and the "Add Multiple" search + qty
 * dialogs. Returns the reactive state and handlers the template binds to.
 * @param {GridTableProps} props
 * @param {(event: string, ...args: any[]) => void} emit
 */
export function useGridTable(props, emit) {
  // --- Refs ---
  const dataArray = ref([...props.data]);
  const barcodeVal = ref(null);
  const sharedPopover = ref(null);
  const activePopoverColumn = ref(null);
  const activePopoverData = ref(null);
  const activePopoverIndex = ref(null);
  const dialogVisible = ref(false);
  const qtyDialogVisible = ref(false);
  const searchText = ref('');
  const searchResults = ref([]);
  const hasMore = ref(false);
  const hasSearched = ref(false);
  const currentPageLength = ref(props.pageLength);
  const pendingItem = ref(null);
  const pendingQty = ref(1);

  // --- Computed ---
  const allChecked = computed(
    () => dataArray.value.length > 0 && dataArray.value.every(row => row.__checked)
  );
  /** The first Link-type column; used as the search target in the Add Multiple dialog */
  const addMultipleLinkColumn = computed(() => props.columns.find(c => c.type === 'Link'));
  /** The first Int or Float column; receives the quantity entered in the Add Multiple qty dialog */
  const addMultipleQtyColumn = computed(() =>
    props.columns.find(c => c.type === 'Int' || c.type === 'Float')
  );

  // --- Watches ---
  watch(
    () => props.data,
    newData => {
      dataArray.value = [...newData];
    },
    { deep: true }
  );

  watch(
    barcodeVal,
    debounce(value => {
      if (!value) return;
      emit('barcodeScanned', value);
      barcodeVal.value = null;
    }, 500)
  );

  // --- Row selection (showCheck) ---
  const checkRow = row => {
    row.__checked = !row.__checked;
    emit(
      'selectionChange',
      dataArray.value.filter(r => r.__checked)
    );
  };

  const toggleAll = () => {
    const next = !allChecked.value;
    dataArray.value.forEach(row => (row.__checked = next));
    emit(
      'selectionChange',
      dataArray.value.filter(r => r.__checked)
    );
  };

  // --- Row CRUD ---
  /**
   * Initializes default values for a row's fields based on column type.
   * Numeric types (Float, Currency, Int, Percent) default to 0; all others to ''.
   * For Popover columns every sub-field is initialized individually.
   * @param {GridTableRow} row - The row object being built
   * @param {GridTableColumn} col - Column definition from the columns prop
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
   * @returns {GridTableRow} A new row ready to be pushed into dataArray
   */
  const createEmptyRow = () => {
    const row = { idx: dataArray.value.length + 1 };
    props.columns.forEach(col => initRowFields(row, col));
    return row;
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
   * Resets all editable fields in a row back to their default values without removing the row.
   * Called when the user clears the link field of a row (e.g. deletes the item code).
   * @param {GridTableRow} row - The row object to clear
   */
  const clearRowItems = row => {
    props.columns.forEach(col => initRowFields(row, col));
    emit('update:data', dataArray.value);
    emit('rowChange', row);
  };

  /**
   * Writes a new field value onto both the in-template editing copy and the backing dataArray,
   * then emits update:data and rowChange so the parent can react (e.g. recalculate totals).
   * @param {GridTableRow} editingRow - The row reference used inside the template slot
   * @param {number} index - Zero-based index of the row in dataArray
   * @param {string} field - The field name being updated
   * @param {*} value - The new value emitted by the input component
   */
  const onFieldValueUpdate = (editingRow, index, field, value) => {
    if (value instanceof Date) {
      const y = value.getFullYear();
      const m = String(value.getMonth() + 1).padStart(2, '0');
      const d = String(value.getDate()).padStart(2, '0');
      value = `${y}-${m}-${d}`;
    }

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
   * @param {GridTableColumn} column - The column definition that triggered the selection
   */
  const onItemSelected = (index, doc, column) => {
    const row = dataArray.value[index];
    if (!row) return;

    emit('itemSelected', { row, itemData: doc, column, index });
    emit('update:data', dataArray.value);
    emit('rowChange', row);
  };

  // --- Column rendering ---
  /**
   * Resolves the CSS width for a column.
   * If cols is set it is treated as a fraction of a 12-column grid (e.g. cols=4 → 33.33%).
   * Falls back to column.width if provided, otherwise 'auto'.
   * @param {GridTableColumn} column - Column definition
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
   * @param {GridTableColumn} column - Column definition
   * @returns {import('vue').Component} Vue component reference
   */
  const getComponent = column => {
    if (['Int', 'Float', 'Currency', 'Percent'].includes(column.type)) return NumericField;
    if (column.type === 'Textarea') return Textarea;
    if (column.type === 'Date') return DatePicker;
    return InputText;
  };

  /**
   * Builds the props object passed to each column's input component.
   * Applies number formatting, fraction digit precision, prefix and grouping settings
   * according to the column type (Currency, Float, Percent, Int, Textarea).
   * @param {GridTableColumn} column - Column definition including type, prefix, readOnly
   * @returns {Object} Props object ready to be spread onto the component via v-bind
   */
  const getProps = column => {
    if (column.type === 'Date') {
      return {
        disabled: column.readOnly,
        ...(column.componentProps || {
          fluid: true,
          dateFormat: props.dateFormat,
          manualInput: true,
        }),
      };
    }

    const isNumeric = ['Int', 'Float', 'Currency', 'Percent'].includes(column.type);
    const base = {
      size: 'small',
      placeholder: isNumeric ? '' : column.label,
      disabled: column.readOnly,
    };

    if (column.type === 'Textarea') {
      return { ...base, autoResize: true, rows: 1 };
    }

    if (column.componentProps) {
      return { ...base, ...column.componentProps };
    }

    // Fallback: build from GridTable's own formatting props
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

  /**
   * Returns a numerically truncated value (without rounding) for use as modelValue in numeric inputs.
   * Prevents PrimeVue InputNumber from rounding the displayed value when maxFractionDigits is set.
   * @param {GridTableColumn} col - Column definition with type property
   * @param {*} val - Raw field value from the row data
   * @returns {number|*} Truncated number for Currency/Float/Percent types, raw value otherwise
   */
  const truncatedVal = (col, val) => {
    const num = parseFloat(val ?? 0) || 0;
    if (col.type === 'Currency') {
      const decimals = col.componentProps?.maxFractionDigits ?? props.currencyPrecision;
      return Math.trunc(num * Math.pow(10, decimals)) / Math.pow(10, decimals);
    }
    if (col.type === 'Float' || col.type === 'Percent') {
      const decimals = col.componentProps?.maxFractionDigits ?? props.floatPrecision;
      return Math.trunc(num * Math.pow(10, decimals)) / Math.pow(10, decimals);
    }
    if (col.type === 'Date') {
      if (!val) return null;
      if (val instanceof Date) return val;
      const [year, month, day] = String(val).split('-');
      return year && month && day ? new Date(Number(year), Number(month) - 1, Number(day)) : null;
    }
    return val;
  };

  // --- Popover (Popover-type columns) ---
  /**
   * Opens the single shared Popover panel anchored to the pencil button that was clicked.
   * Stores the active column, row data and index so the popover fields can read and write
   * from the correct row without needing a popover instance per row.
   * @param {Event} event - The click event used by PrimeVue Popover as its anchor
   * @param {GridTableColumn} column - The Popover column definition containing the sub-fields array
   * @param {GridTableRow} data - The row data object for the clicked row
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
   * @param {GridTableColumn} subCol - Sub-column definition from the Popover column's fields array
   * @param {*} value - New value emitted by the input inside the popover
   */
  const onPopoverFieldUpdate = (subCol, value) => {
    if (!activePopoverData.value || activePopoverIndex.value === null) return;
    onFieldValueUpdate(activePopoverData.value, activePopoverIndex.value, subCol.field, value);
  };

  /**
   * Returns a formatted preview string of the first sub-field's current value,
   * always shown next to the pencil button — including when the value is 0 — so the cell
   * mirrors the same default-zero appearance as the inputs inside the popover.
   * Numbers are formatted with the same decimal precision used by the corresponding input type:
   * Percent uses floatPrecision, Currency uses currencyPrecision, Float uses floatPrecision.
   * @param {GridTableColumn} column - Popover column definition; reads column.fields[0]
   * @param {GridTableRow} data - Current row data object
   * @returns {string} Formatted value string using the active decimal separator (e.g. '0,000%', '$ 0,00')
   */
  const getPopoverPreview = (column, data) => {
    const first = column.fields?.[0];
    if (!first) return '';
    const val = parseFloat(data[first.field] ?? 0) || 0;

    const fmt = first.componentProps?.numberFormat ?? props.numberFormat;
    const m = (fmt || '').match(/[#0]([^#0\s])[#0]+$/);
    const decSep = m ? m[1] : '.';
    const decimals =
      first.componentProps?.maxFractionDigits ??
      (first.type === 'Currency' ? props.currencyPrecision : props.floatPrecision);
    const prefix = first.componentProps?.prefix ?? first.prefix ?? '';

    const fmtNum = num => {
      const factor = Math.pow(10, decimals);
      const fixed = (Math.trunc(num * factor) / factor).toFixed(decimals);
      return decSep !== '.' ? fixed.replace('.', decSep) : fixed;
    };

    if (first.type === 'Percent') return `${fmtNum(val)}%`;
    if (first.type === 'Currency') return `${prefix}${fmtNum(val)}`;
    if (first.type === 'Float') return `${prefix}${fmtNum(val)}`;
    const raw = data[first.field];
    return raw !== null && raw !== undefined ? String(raw) : '';
  };

  // --- Add Multiple dialog ---
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
   * @param {boolean} [reset=false] - Whether to restart from the first page
   * @returns {Promise<void>}
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
   * @returns {Promise<void>}
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

  return {
    // state
    dataArray,
    barcodeVal,
    sharedPopover,
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
    // computed
    allChecked,
    // row selection
    checkRow,
    toggleAll,
    // row CRUD
    addRow,
    removeRow,
    clearRowItems,
    onFieldValueUpdate,
    onItemSelected,
    // column rendering
    getColumnWidth,
    getComponent,
    getProps,
    truncatedVal,
    // popover
    openPopover,
    onPopoverFieldUpdate,
    getPopoverPreview,
    // add multiple dialog
    openDialog,
    doSearch,
    loadMore,
    selectItem,
    confirmQty,
  };
}

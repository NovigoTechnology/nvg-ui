import { computed } from 'vue';

/**
 * A search result from AutoComplete's suggestion list, as passed to
 * @update-autocomplete-value once the user picks (or clears) an option.
 * @typedef {Object} EntitySelectorOption
 * @property {string} value
 * @property {string} [label]
 * @property {string} [description]
 */

/**
 * @typedef {Object} EntitySelectorProps
 * @property {string} doctype - DocType to link to (e.g., "Customer", "Supplier", "Item")
 * @property {string} fieldname - Field name (e.g., "customer", "supplier")
 * @property {string} label - Label to display
 * @property {string|null} [modelValue] - Current value
 * @property {boolean} [required]
 * @property {boolean} [fullitem] - Show full item data on selection
 * @property {boolean} [showAddButton]
 * @property {boolean} [showEditButton]
 * @property {boolean} [disableAdd]
 * @property {boolean} [disableEdit]
 * @property {Object.<string, any>} [filters] - Filters for autocomplete
 * @property {string} [query] - Custom query method for autocomplete
 * @property {{ method: string, args?: Object.<string, any> }} [customCall] - Calls
 *   { method, args } directly instead of going through query/search_link. Use for
 *   whitelisted methods that don't follow the standard link-query signature.
 * @property {boolean} [invalid]
 * @property {number} [pageLength]
 * @property {boolean} [disabled]
 */

/**
 * Thin, standalone-friendly wrapper around AutoComplete for the common
 * "pick an existing Link record" case: builds the raw field descriptor
 * AutoComplete expects (always fieldtype: 'Link'), and translates its
 * events into a plain v-model + item-selected/clear/add/edit contract so
 * consumers don't need to know about AutoComplete's store/quickEntry internals.
 * @param {EntitySelectorProps} props
 * @param {(event: string, ...args: any[]) => void} emit
 */
export function useEntitySelector(props, emit) {
  /**
   * Translates this component's simple props (doctype/fieldname/label/modelValue)
   * into the raw field descriptor AutoComplete expects, always as a Link field
   * against `doctype`. Recomputes whenever any of those props change.
   */
  const fieldConfig = computed(() => ({
    fieldname: props.fieldname,
    fieldtype: 'Link',
    label: props.label,
    options: props.doctype,
    reqd: props.required ? 1 : 0,
    value: props.modelValue,
    filters: props.filters,
  }));

  /**
   * Forwards AutoComplete's internal selection event as the plain v-model
   * contract consumers expect: `update:modelValue` with just the value, plus
   * `item-selected` with the full option for callers that need label/description too.
   * @param {EntitySelectorOption} option
   */
  const onItemSelected = option => {
    emit('update:modelValue', option?.value);
    emit('item-selected', option);
  };

  /**
   * Forwards AutoComplete's clear-row event as `update:modelValue` (null) + `clear`,
   * so consumers only ever need to know the standard v-model/clear contract.
   */
  const onClear = () => {
    emit('update:modelValue', null);
    emit('clear');
  };

  /**
   * Handles the "+" button. Doesn't open anything itself — just tells the
   * parent the user wants to create a new `doctype` record, so it can open
   * whatever quick-entry/dialog UI makes sense for that case.
   */
  const onAdd = () => {
    emit('add');
  };

  /**
   * Handles the pencil button (only enabled when there's a selected value).
   * Same idea as onAdd: no built-in edit UI, just tells the parent to open one.
   */
  const onEdit = () => {
    emit('edit');
  };

  return { fieldConfig, onItemSelected, onClear, onAdd, onEdit };
}

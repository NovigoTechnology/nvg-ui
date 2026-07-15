import { computed } from 'vue';

/**
 * @typedef {Object} FormattingStore
 * @property {string} [currency]
 * @property {number} [currencyPrecision]
 * @property {number} [floatPrecision]
 * @property {string} [formatNumber] - PrimeVue-style number pattern, e.g. '#,##0.00'
 * @property {string} [dateFormat]
 */

/**
 * Number/currency/date formatting helpers driven by a plain options object.
 * Assumes the global Frappe helper `get_currency_symbol` is available on the
 * page; falls back to the raw currency code otherwise (see `prefix` below).
 * @param {FormattingStore} store
 * @returns {{
 *   truncateCurrency: (value: number) => number,
 *   formatCurrency: (value: number, withSymbol?: boolean) => string,
 *   currencyProps: (extra?: Object.<string, any>) => Object.<string, any>,
 *   floatProps: (extra?: Object.<string, any>) => Object.<string, any>,
 *   intProps: (extra?: Object.<string, any>) => Object.<string, any>,
 *   percentProps: (extra?: Object.<string, any>) => Object.<string, any>,
 *   dateProps: (extra?: Object.<string, any>) => Object.<string, any>,
 * }}
 */
export function useFormatting(store) {
  const _decSep = () => {
    const m = (store.formatNumber || '').match(/[#0]([^#0\s])[#0]+$/);
    return m ? m[1] : '.';
  };

  const _thouSep = () => {
    const fmt = store.formatNumber || '';
    const dec = _decSep();
    const intFmt = fmt.slice(0, fmt.lastIndexOf(dec));
    const m = intFmt.match(/[#0]([^#0])[#0]/);
    return m ? m[1] : ',';
  };

  const prefix = computed(() => {
    const symbol =
      typeof get_currency_symbol === 'function'
        ? get_currency_symbol(store.currency)
        : (store.currency ?? '');
    return symbol + ' ';
  });

  /**
   * Truncates (never rounds) a value to currencyPrecision decimals.
   * @param {number} value
   * @returns {number}
   */
  const truncateCurrency = value => {
    const precision = store.currencyPrecision ?? 2;
    const factor = Math.pow(10, precision);
    return Math.trunc((value || 0) * factor) / factor;
  };

  /**
   * Formats a value using the decimal/thousands separators implied by
   * store.formatNumber, optionally prefixed with the currency symbol.
   * @param {number} value
   * @param {boolean} [withSymbol]
   * @returns {string}
   */
  const formatCurrency = (value, withSymbol = false) => {
    const precision = store.currencyPrecision ?? 2;
    const decSep = _decSep();
    const thouSep = _thouSep();
    const truncated = truncateCurrency(value);
    const [intPart, decPart] = truncated.toFixed(precision).split('.');
    const formattedInt = intPart.replace(/\B(?=(\d{3})+(?!\d))/g, thouSep);
    const number = decPart !== undefined ? `${formattedInt}${decSep}${decPart}` : formattedInt;
    if (!withSymbol) return number;
    return `${prefix.value}${number}`;
  };

  /**
   * Props for a currency NumericField: store precision, prefix and grouping.
   * @param {Object.<string, any>} [extra] - Overrides/extends the base props
   * @returns {Object.<string, any>}
   */
  const currencyProps = (extra = {}) => ({
    numberFormat: store.formatNumber,
    minFractionDigits: store.currencyPrecision,
    maxFractionDigits: store.currencyPrecision,
    useGrouping: true,
    prefix: prefix.value,
    ...extra,
  });

  /**
   * Props for a float NumericField: store precision and grouping, no prefix.
   * @param {Object.<string, any>} [extra]
   * @returns {Object.<string, any>}
   */
  const floatProps = (extra = {}) => ({
    numberFormat: store.formatNumber,
    minFractionDigits: store.floatPrecision,
    maxFractionDigits: store.floatPrecision,
    useGrouping: true,
    ...extra,
  });

  /**
   * Props for an integer NumericField: zero fraction digits, grouped.
   * @param {Object.<string, any>} [extra]
   * @returns {Object.<string, any>}
   */
  const intProps = (extra = {}) => ({
    numberFormat: store.formatNumber,
    minFractionDigits: 0,
    maxFractionDigits: 0,
    useGrouping: true,
    ...extra,
  });

  /**
   * Props for a percent NumericField: float precision, '%' suffix, no grouping.
   * @param {Object.<string, any>} [extra]
   * @returns {Object.<string, any>}
   */
  const percentProps = (extra = {}) => ({
    numberFormat: store.formatNumber,
    minFractionDigits: store.floatPrecision,
    maxFractionDigits: store.floatPrecision,
    useGrouping: false,
    suffix: '%',
    ...extra,
  });

  /**
   * Props for a DatePicker: store.dateFormat (defaulting to 'dd/mm/yy'), manual input.
   * @param {Object.<string, any>} [extra]
   * @returns {Object.<string, any>}
   */
  const dateProps = (extra = {}) => ({
    fluid: true,
    dateFormat: store.dateFormat || 'dd/mm/yy',
    manualInput: true,
    ...extra,
  });

  return {
    truncateCurrency,
    formatCurrency,
    currencyProps,
    floatProps,
    intProps,
    percentProps,
    dateProps,
  };
}

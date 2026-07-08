/**
 * Composable providing number/currency/date formatting helpers driven by a plain
 * options object: { currency, currencyPrecision, floatPrecision, formatNumber, dateFormat }.
 * Assumes the global Frappe helper `get_currency_symbol` is available on the page.
 */
import { computed } from 'vue';

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

  const prefix = computed(() => get_currency_symbol(store.currency) + ' ');

  const truncateCurrency = value => {
    const precision = store.currencyPrecision ?? 2;
    const factor = Math.pow(10, precision);
    return Math.trunc((value || 0) * factor) / factor;
  };

  const formatCurrency = (value, withSymbol = false) => {
    const precision = store.currencyPrecision ?? 2;
    const decSep = _decSep();
    const thouSep = _thouSep();
    const truncated = truncateCurrency(value);
    const [intPart, decPart] = truncated.toFixed(precision).split('.');
    const formattedInt = intPart.replace(/\B(?=(\d{3})+(?!\d))/g, thouSep);
    const number = decPart !== undefined ? `${formattedInt}${decSep}${decPart}` : formattedInt;
    if (!withSymbol) return number;
    return `${prefix.value} ${number}`;
  };

  const currencyProps = (extra = {}) => ({
    numberFormat: store.formatNumber,
    minFractionDigits: store.currencyPrecision,
    maxFractionDigits: store.currencyPrecision,
    useGrouping: true,
    prefix: prefix.value,
    ...extra,
  });

  const floatProps = (extra = {}) => ({
    numberFormat: store.formatNumber,
    minFractionDigits: store.floatPrecision,
    maxFractionDigits: store.floatPrecision,
    useGrouping: true,
    ...extra,
  });

  const intProps = (extra = {}) => ({
    numberFormat: store.formatNumber,
    minFractionDigits: 0,
    maxFractionDigits: 0,
    useGrouping: true,
    ...extra,
  });

  const percentProps = (extra = {}) => ({
    numberFormat: store.formatNumber,
    minFractionDigits: store.floatPrecision,
    maxFractionDigits: store.floatPrecision,
    useGrouping: false,
    suffix: '%',
    ...extra,
  });

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

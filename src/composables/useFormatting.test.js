import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { useFormatting } from './useFormatting';

describe('useFormatting', () => {
  const store = {
    currency: 'USD',
    currencyPrecision: 2,
    floatPrecision: 3,
    formatNumber: '#,##0.00',
    dateFormat: 'dd/mm/yy',
  };

  beforeEach(() => {
    // get_currency_symbol is a Frappe global; formatCurrency(withSymbol) / currencyProps
    // read it, so stub it the way it behaves on a real desk page.
    vi.stubGlobal(
      'get_currency_symbol',
      vi.fn(currency => (currency === 'USD' ? '$' : currency))
    );
  });

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it('truncates currency values to the configured precision without rounding', () => {
    const { truncateCurrency } = useFormatting(store);

    expect(truncateCurrency(10.999)).toBe(10.99);
    expect(truncateCurrency(null)).toBe(0);
  });

  it('formats currency with thousands/decimal separators from formatNumber', () => {
    const { formatCurrency } = useFormatting(store);

    expect(formatCurrency(1234.5)).toBe('1,234.50');
  });

  it('prefixes the currency symbol when withSymbol is true', () => {
    const { formatCurrency } = useFormatting(store);

    expect(formatCurrency(1234.5, true)).toBe('$ 1,234.50');
  });

  it('uses a different decimal/thousands separator when formatNumber implies one', () => {
    const euroStore = { ...store, formatNumber: '#.##0,00' };
    const { formatCurrency } = useFormatting(euroStore);

    expect(formatCurrency(1234.5)).toBe('1.234,50');
  });

  it('builds currencyProps merging store precision, prefix and overrides', () => {
    const { currencyProps } = useFormatting(store);

    expect(currencyProps()).toEqual({
      numberFormat: store.formatNumber,
      minFractionDigits: store.currencyPrecision,
      maxFractionDigits: store.currencyPrecision,
      useGrouping: true,
      prefix: '$ ',
    });
    expect(currencyProps({ disabled: true })).toMatchObject({ disabled: true });
  });

  it('builds floatProps using floatPrecision instead of currencyPrecision', () => {
    const { floatProps } = useFormatting(store);

    expect(floatProps()).toEqual({
      numberFormat: store.formatNumber,
      minFractionDigits: store.floatPrecision,
      maxFractionDigits: store.floatPrecision,
      useGrouping: true,
    });
  });

  it('builds intProps with zero fraction digits', () => {
    const { intProps } = useFormatting(store);

    expect(intProps()).toEqual({
      numberFormat: store.formatNumber,
      minFractionDigits: 0,
      maxFractionDigits: 0,
      useGrouping: true,
    });
  });

  it('builds percentProps with a % suffix and no grouping', () => {
    const { percentProps } = useFormatting(store);

    expect(percentProps()).toEqual({
      numberFormat: store.formatNumber,
      minFractionDigits: store.floatPrecision,
      maxFractionDigits: store.floatPrecision,
      useGrouping: false,
      suffix: '%',
    });
  });

  it('builds dateProps defaulting dateFormat when the store has none', () => {
    const { dateProps } = useFormatting({ ...store, dateFormat: undefined });

    expect(dateProps()).toEqual({
      fluid: true,
      dateFormat: 'dd/mm/yy',
      manualInput: true,
    });
  });
});

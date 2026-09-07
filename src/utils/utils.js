// Copyright (c) 2025, Novigo Technology and contributors
// For license information, please see license.txt

/**
 * Resolves positional {0}, {1} placeholders without a translation catalogue.
 * @param {string} text
 * @param {Array|*} [replace] - Values for the placeholders; missing ones are left as-is.
 * @returns {string}
 */
const interpolate = (text, replace) => {
  if (!text || replace === undefined || replace === null) return text;
  const list = Array.isArray(replace) ? replace : [replace];
  return String(text).replace(/\{(\d+)\}/g, (match, index) =>
    list[index] === undefined ? match : list[index]
  );
};

/**
 * Translation helper usable both inside the Frappe desk and standalone.
 *
 * Inside the desk it delegates to `frappe._`. A host application that installs its own
 * `window.__` (a Vue SPA with its own catalogue, say) gets used next. With neither
 * available — tests, Storybook, a standalone demo — the source text is returned with its
 * placeholders resolved, so importing this package never depends on desk globals.
 *
 * @param {string} text - Source string.
 * @param {Array} [replace] - Values for {0}, {1}… placeholders.
 * @param {string} [context] - Optional translation context.
 * @returns {string}
 */
export const __ = (text, replace, context) => {
  if (typeof window === 'undefined') return interpolate(text, replace);

  const desk = window.frappe?._;
  if (typeof desk === 'function') return desk(text, replace, context);

  const host = window.__;
  if (typeof host === 'function' && host !== __) return host(text, replace, context);

  return interpolate(text, replace);
};

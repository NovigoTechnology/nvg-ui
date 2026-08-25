// Minimal stand-in for the real `window.frappe` (Frappe/ERPNext desk) global that this
// library expects at runtime. It exists only so the demo can run standalone, without a
// Frappe backend behind it. Must be imported before anything from `src/` — several
// modules (see src/utils/utils.js) read `frappe`/`$` at import time, not just at call time.

export const DOCTYPE_DATA = {
  Customer: [
    { value: 'CUST-0001', label: 'Acme Corp' },
    { value: 'CUST-0002', label: 'Globex SA' },
    { value: 'CUST-0003', label: 'Umbrella Inc' },
    { value: 'CUST-0004', label: 'Initech' },
    { value: 'CUST-0005', label: 'Wayne Enterprises' },
  ],
  Item: [
    { value: 'ITEM-001', label: 'Widget A' },
    { value: 'ITEM-002', label: 'Widget B' },
    { value: 'ITEM-003', label: 'Gadget C' },
  ],
};

function searchLink({ doctype, txt = '' } = {}) {
  const pool = DOCTYPE_DATA[doctype] || [];
  const q = txt.toLowerCase();
  return pool
    .filter(o => o.value.toLowerCase().includes(q) || o.label.toLowerCase().includes(q))
    .map(o => ({ value: o.value, label: o.label, description: o.label }));
}

const COUNTRY_INFO = {
  Argentina: { code: 'AR', isd: '+54' },
  Brazil: { code: 'BR', isd: '+55' },
  'United States': { code: 'US', isd: '+1' },
  Spain: { code: 'ES', isd: '+34' },
};

const linkTitleCache = {};

async function handleMethod(method, args) {
  if (method === 'frappe.desk.search.search_link') return searchLink(args);
  if (method === 'frappe.geo.country_info.get_country_timezone_info') {
    return { country_info: COUNTRY_INFO };
  }
  console.warn('[demo mock] unhandled frappe method:', method, args);
  return null;
}

// PrimeVue locale + this package's own `__` helper (src/utils/utils.js) go through
// `heracles.utils.__`, which frappe.provide() below wires up to `frappe._`.
window.$ = window.$ || { extend: Object.assign };

window.frappe = {
  provide(path) {
    let obj = window;
    path.split('.').forEach(key => {
      obj[key] = obj[key] || {};
      obj = obj[key];
    });
    return obj;
  },
  _(text, variable) {
    if (!text || variable == null) return text;
    const list = Array.isArray(variable) ? variable : [variable];
    return text.replace(/\{(\d+)\}/g, (m, i) => list[i] ?? m);
  },
  boot: {
    link_title_doctypes: ['Customer', 'Item'],
    sysdefaults: { date_format: 'dd-mm-yyyy' },
    docs: [{ code: 'AR' }],
  },
  form: { link_formatters: {} },
  set_route(...parts) {
    window.dispatchEvent(new CustomEvent('demo:set-route', { detail: parts }));
  },
  utils: {
    get_link_title(doctype, name) {
      return linkTitleCache[`${doctype}:${name}`];
    },
    async fetch_link_title(doctype, name) {
      const title = (DOCTYPE_DATA[doctype] || []).find(o => o.value === name)?.label || name;
      linkTitleCache[`${doctype}:${name}`] = title;
      return title;
    },
    add_link_title(doctype, name, title) {
      linkTitleCache[`${doctype}:${name}`] = title;
    },
  },
  call({ method, args, callback, error }) {
    return handleMethod(method, args)
      .then(result => {
        callback?.({ message: result });
        return { message: result };
      })
      .catch(err => {
        error?.(err);
        throw err;
      });
  },
  xcall(method, args) {
    return handleMethod(method, args);
  },
};

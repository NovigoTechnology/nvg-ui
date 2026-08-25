export const DOCTYPE_DATA = {
  Customer: [
    { value: 'CUST-0001', label: 'Acme Corp' },
    { value: 'CUST-0002', label: 'Globex SA' },
    { value: 'CUST-0003', label: 'Umbrella Inc' },
    { value: 'CUST-0004', label: 'Initech' },
    { value: 'CUST-0005', label: 'Wayne Enterprises' },
  ],
  Item: [
    { value: 'ITEM-001', label: 'Widget A', description: 'General purpose widget, steel finish' },
    { value: 'ITEM-002', label: 'Widget B', description: 'Reinforced widget for heavy-duty use' },
    { value: 'ITEM-003', label: 'Gadget C', description: 'Compact gadget, battery included' },
    { value: 'ITEM-004', label: 'Widget C', description: 'Lightweight widget, plastic finish' },
    { value: 'ITEM-005', label: 'Gadget A', description: 'Entry-level gadget, no accessories' },
    { value: 'ITEM-006', label: 'Gadget B', description: 'Mid-range gadget, travel case included' },
    {
      value: 'ITEM-007',
      label: 'Tool Kit A',
      description: 'Basic maintenance kit with compact tools',
    },
    {
      value: 'ITEM-008',
      label: 'Tool Kit B',
      description: 'Extended maintenance kit for workshop use',
    },
    {
      value: 'ITEM-009',
      label: 'Cable Pack A',
      description: 'Assorted cable pack, one meter length',
    },
    {
      value: 'ITEM-010',
      label: 'Cable Pack B',
      description: 'Assorted cable pack, reinforced connectors',
    },
    {
      value: 'ITEM-011',
      label: 'Adapter A',
      description: 'Universal adapter for standard accessories',
    },
    {
      value: 'ITEM-012',
      label: 'Adapter B',
      description: 'Compact adapter with reinforced housing',
    },
    { value: 'ITEM-013', label: 'Mount A', description: 'Adjustable desk mount, matte finish' },
    { value: 'ITEM-014', label: 'Mount B', description: 'Wall mount with quick-release bracket' },
    { value: 'ITEM-015', label: 'Case A', description: 'Protective carrying case, soft interior' },
  ],
};

function searchLink({ doctype, txt = '', page_length } = {}) {
  const pool = DOCTYPE_DATA[doctype] || [];
  const q = txt.toLowerCase();
  const filtered = pool.filter(
    o => o.value.toLowerCase().includes(q) || o.label.toLowerCase().includes(q)
  );
  const limit = Number(page_length);
  const visible = Number.isFinite(limit) && limit > 0 ? filtered.slice(0, limit) : filtered;
  const results = visible.map(o => ({
    value: o.value,
    label: o.label,
    description: o.description || o.label,
  }));

  results.total_count = filtered.length;
  return results;
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

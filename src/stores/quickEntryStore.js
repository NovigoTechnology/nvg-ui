// Copyright (c) 2026, Novigo Technology and contributors
// For license information, please see license.txt
import { defineStore } from 'pinia';

export const useQuickEntryStore = defineStore('quickEntry', {
  state: () => ({
    fields: [],
    fieldValues: {},
    originalValues: {},
    sectionState: {},
    missingFields: [],
    visible: false,
    disabledButton: false,
    mode: 'create', // 'create' | 'edit'
    docName: null,
    api: null,
    label: '',
  }),

  actions: {
    open(fields, saveApi, label = '', values = {}) {
      this.fields = fields;
      this.fieldValues = { ...values };
      this.originalValues = {};
      this.missingFields = [];
      this.disabledButton = false;
      this.sectionState = {};
      this.mode = 'create';
      this.docName = null;
      this.api = saveApi;
      this.label = label;
      fields.forEach(f => {
        if (f.fieldtype === 'Section Break') {
          this.sectionState[f.label || ''] = true;
        }
      });
      this.visible = true;
    },

    edit(fields, saveApi, docName, label = '', values = {}) {
      this.fields = fields;
      this.fieldValues = { ...values };
      this.originalValues = { ...values };
      this.missingFields = [];
      this.disabledButton = false;
      this.sectionState = {};
      this.mode = 'edit';
      this.docName = docName;
      this.api = saveApi;
      this.label = label;
      fields.forEach(f => {
        if (f.fieldtype === 'Section Break') {
          this.sectionState[f.label || ''] = true;
        }
      });
      this.visible = true;
    },

    close() {
      this.visible = false;
      this.fields = [];
      this.fieldValues = {};
      this.originalValues = {};
      this.sectionState = {};
      this.missingFields = [];
      this.mode = 'create';
      this.docName = null;
      this.api = null;
      this.label = '';
      this.disabledButton = false;
    },

    toggleSection(section) {
      if (section.collapsible) {
        this.sectionState[section.title] = !this.sectionState[section.title];
      }
    },

    updateValue(event, field) {
      this.fieldValues[field.fieldname] =
        field.fieldtype === 'Check' ? event.target.checked : event.target.value;
    },

    updateLinkValue(value, field) {
      this.fieldValues[field.fieldname] = value?.value || value || null;
    },

    validateRequired() {
      const required = this.fields.filter(f => f.reqd || f.mandatory_depends_on);
      this.missingFields = required
        .filter(f => {
          const v = this.fieldValues[f.fieldname];
          return Array.isArray(v) ? v.length === 0 : !v;
        })
        .map(f => f.label);
      return this.missingFields.length === 0;
    },

    async save() {
      if (!this.validateRequired()) {
        return { success: false, missingFields: this.missingFields };
      }

      this.disabledButton = true;

      let payload;
      if (this.mode === 'edit') {
        const changed = Object.fromEntries(
          Object.entries(this.fieldValues).filter(([key, v]) => v !== this.originalValues[key])
        );
        if (Object.keys(changed).length === 0) {
          this.disabledButton = false;
          return { success: true, doc: { name: this.docName }, noChanges: true };
        }
        payload = { doc_name: this.docName, data: changed };
      } else {
        payload = {
          data: Object.fromEntries(
            Object.entries(this.fieldValues).filter(([_, v]) => v != null && v !== '')
          ),
        };
      }

      return new Promise(resolve => {
        frappe
          .call(this.api, payload)
          .then(r => {
            this.disabledButton = false;
            if (r.message) {
              resolve({
                success: true,
                doc: this.mode === 'edit' ? { name: r.message } : r.message,
              });
            } else {
              resolve({ success: false });
            }
          })
          .catch(() => {
            this.disabledButton = false;
            resolve({ success: false });
          });
      });
    },

    getSelectOptions(field) {
      if (!field.options) return [];
      return field.options
        .split('\n')
        .filter(Boolean)
        .map(o => ({ label: __(o), value: o }));
    },
  },

  getters: {
    sections: state => {
      const sections = [];
      let current = { title: null, fields: [], collapsible: false };

      state.fields.forEach(field => {
        if (field.fieldtype === 'Section Break') {
          if (current.fields.length || current.title) sections.push(current);
          current = {
            title: field.label || null,
            fields: [],
            collapsible: !!field.collapsible,
          };
        } else if (field.fieldtype === 'Column Break') {
          // ignored — flat layout
        } else {
          current.fields.push(field);
        }
      });

      if (current.fields.length || current.title) sections.push(current);
      return sections;
    },
  },
});

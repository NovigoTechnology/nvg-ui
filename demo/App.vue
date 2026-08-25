<template>
  <Toast />
  <ConfirmDialog />

  <div class="demo">
    <header class="demo__header">
      <h1>nvg-ui — demo</h1>
      <p>
        Componentes corriendo standalone, con <code>window.frappe</code> mockeado
        (<code>demo/mocks/frappe.js</code>) en vez de un backend Frappe real.
      </p>
      <p v-if="lastRoute" class="demo__route">
        Último <code>frappe.set_route</code> interceptado: <code>{{ lastRoute }}</code>
      </p>
    </header>

    <section class="demo__card">
      <h2>AutoComplete</h2>
      <p class="demo__hint">Escribí "a" para ver sugerencias de Customer.</p>
      <AutoComplete
        :field="{ fieldname: 'autocomplete_customer', label: 'Customer', options: 'Customer' }"
        @update-autocomplete-value="v => (autoCompleteValue = v)"
      />
      <p class="demo__value">Valor: {{ autoCompleteValue ?? '—' }}</p>
    </section>

    <section class="demo__card">
      <h2>LinkField</h2>
      <LinkField
        v-model="linkFieldValue"
        doctype="Item"
        placeholder="Item"
        @item-selected="v => (linkFieldValue = v)"
      />
      <p class="demo__value">Valor: {{ linkFieldValue ?? '—' }}</p>
    </section>

    <section class="demo__card">
      <h2>EntitySelector</h2>
      <EntitySelector
        v-model="entitySelectorValue"
        doctype="Customer"
        fieldname="customer"
        label="Customer"
        @add="() => notify('Se pediría abrir un QuickEntry de Customer')"
        @edit="() => notify('Se pediría abrir edición de ' + entitySelectorValue)"
      />
      <p class="demo__value">Valor: {{ entitySelectorValue ?? '—' }}</p>
    </section>

    <section class="demo__card">
      <h2>DateField / NumericField / PhoneField</h2>
      <div class="demo__row">
        <DateField v-model="dateValue" label="Fecha" />
        <NumericField v-model="numericValue" label="Cantidad" />
      </div>
      <PhoneField
        :field="{ fieldname: 'phone', label: 'Teléfono', value: phoneValue }"
        @update-phone="v => (phoneValue = v)"
      />
    </section>

    <section class="demo__card">
      <h2>GridTable</h2>
      <GridTable
        v-model:data="gridData"
        :columns="gridColumns"
        label="Renglones"
        :filters-fields="{ customer: { filters: {} } }"
      />
    </section>

    <section class="demo__card">
      <h2>QuickEntry</h2>
      <Button label="Abrir QuickEntry" @click="openQuickEntry" />
      <QuickEntry
        v-if="quickEntryStore.visible"
        :store="quickEntryStore"
        @created="doc => notify('Creado: ' + doc.name)"
        @close="() => {}"
      />
    </section>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue';
import { useToast } from 'primevue/usetoast';
import Toast from 'primevue/toast';
import ConfirmDialog from 'primevue/confirmdialog';
import Button from 'primevue/button';

import AutoComplete from '../src/components/AutoComplete.vue';
import LinkField from '../src/components/LinkField.vue';
import EntitySelector from '../src/components/EntitySelector.vue';
import DateField from '../src/components/DateField.vue';
import NumericField from '../src/components/NumericField.vue';
import PhoneField from '../src/components/PhoneField.vue';
import GridTable from '../src/components/GridTable.vue';
import QuickEntry from '../src/components/QuickEntry.vue';

const toast = useToast();
const notify = detail => toast.add({ severity: 'info', summary: 'Demo', detail, life: 3000 });

const lastRoute = ref('');
window.addEventListener('demo:set-route', e => {
  lastRoute.value = e.detail.join(' / ');
});

const autoCompleteValue = ref(null);
const linkFieldValue = ref(null);
const entitySelectorValue = ref(null);
const dateValue = ref(null);
const numericValue = ref(null);
const phoneValue = ref(null);

const gridColumns = [
  { field: 'item', label: 'Item', type: 'Data', cols: 4 },
  { field: 'qty', label: 'Cantidad', type: 'Float', cols: 2 },
  { field: 'customer', label: 'Customer', type: 'Link', options: 'Customer', cols: 4 },
];
const gridData = ref([
  { item: 'Widget A', qty: 2, customer: 'CUST-0001' },
  { item: 'Widget B', qty: 5, customer: null },
]);

function createQuickEntryStore() {
  return reactive({
    visible: false,
    mode: 'create',
    label: 'Item',
    sections: [
      {
        title: 'Datos',
        collapsible: false,
        fields: [
          { fieldname: 'item_name', label: 'Nombre', fieldtype: 'Data', reqd: 1 },
          {
            fieldname: 'item_group',
            label: 'Grupo',
            fieldtype: 'Select',
            options: 'Materia Prima\nProducto Terminado\nServicio',
          },
          { fieldname: 'supplier', label: 'Proveedor', fieldtype: 'Link', options: 'Customer' },
          { fieldname: 'is_active', label: 'Activo', fieldtype: 'Check' },
        ],
      },
    ],
    sectionState: {},
    fieldValues: {},
    fieldErrors: {},
    missingFields: [],
    disabledButton: false,
    toggleSection(section) {
      this.sectionState[section.title] = this.sectionState[section.title] === false;
    },
    updateValue(event, field) {
      this.fieldValues[field.fieldname] = event?.target ? event.target.value : event;
      delete this.fieldErrors[field.fieldname];
    },
    updateLinkValue(value, field) {
      this.fieldValues[field.fieldname] = value;
    },
    getSelectOptions(field) {
      return (field.options || '')
        .split('\n')
        .filter(Boolean)
        .map(o => ({ label: o, value: o }));
    },
    async save() {
      this.disabledButton = true;
      await new Promise(r => setTimeout(r, 400));
      this.disabledButton = false;

      const missing = this.sections
        .flatMap(s => s.fields)
        .filter(f => f.reqd && !this.fieldValues[f.fieldname])
        .map(f => f.label);
      this.missingFields = missing;
      if (missing.length) return { success: false, missingFields: missing };

      return { success: true, doc: { name: 'ITEM-' + Math.floor(100 + Math.random() * 900) } };
    },
    close() {
      this.visible = false;
    },
  });
}

const quickEntryStore = reactive(createQuickEntryStore());
const openQuickEntry = () => {
  quickEntryStore.fieldValues = {};
  quickEntryStore.fieldErrors = {};
  quickEntryStore.missingFields = [];
  quickEntryStore.visible = true;
};
</script>

<style>
body {
  margin: 0;
  font-family:
    system-ui,
    -apple-system,
    sans-serif;
  background: #f4f5f7;
}

.demo {
  max-width: 720px;
  margin: 0 auto;
  padding: 2rem 1.5rem 4rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.demo__header h1 {
  margin-bottom: 0.25rem;
}

.demo__header p {
  color: #555;
  font-size: 0.9rem;
}

.demo__route {
  color: #1a7f37;
}

.demo__card {
  background: #fff;
  border: 1px solid #e2e2e2;
  border-radius: 8px;
  padding: 1.25rem;
}

.demo__card h2 {
  margin-top: 0;
  font-size: 1rem;
}

.demo__hint {
  font-size: 0.8rem;
  color: #777;
  margin-top: -0.5rem;
}

.demo__value {
  font-size: 0.8rem;
  color: #444;
}

.demo__row {
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
}

.demo__row > * {
  flex: 1;
}
</style>

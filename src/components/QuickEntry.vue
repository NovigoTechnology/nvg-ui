<template>
  <Dialog
    v-model:visible="store.visible"
    :modal="true"
    :draggable="false"
    :header="
      store.mode === 'edit' ? __('Edit {0}', [store.label]) : __('Create {0}', [store.label])
    "
    class="quick-entry"
    @after-hide="emit('close')"
  >
    <div class="fields-grid">
      <div v-for="section in store.sections" :key="section.title" class="section-container">
        <div
          class="section-header"
          :style="{ cursor: section.collapsible ? 'pointer' : 'default' }"
          @click="store.toggleSection(section)"
          v-if="section.title"
        >
          <h5 class="section-title">{{ section.title }}</h5>
          <i
            v-if="section.collapsible"
            :class="store.sectionState[section.title] ? 'pi pi-angle-up' : 'pi pi-angle-down'"
          />
        </div>

        <div class="section-fields" v-if="store.sectionState[section.title] !== false">
          <div v-for="field in section.fields" :key="field.fieldname" class="field-container">
            <!-- Data -->
            <FloatLabel v-if="field.fieldtype === 'Data'" variant="on">
              <InputText
                :id="field.fieldname"
                :model-value="store.fieldValues[field.fieldname]"
                @input="store.updateValue($event, field)"
                :invalid="store.missingFields.includes(field.label)"
                fluid
                size="small"
              />
              <label :for="field.fieldname">
                {{ __(field.label) }}<span v-if="field.reqd" class="required">*</span>
              </label>
            </FloatLabel>

            <!-- Select -->
            <FloatLabel v-else-if="field.fieldtype === 'Select'" variant="on">
              <Select
                :id="field.fieldname"
                v-model="store.fieldValues[field.fieldname]"
                :options="store.getSelectOptions(field)"
                option-label="label"
                option-value="value"
                :invalid="store.missingFields.includes(field.label)"
                fluid
                size="small"
              />
              <label :for="field.fieldname">
                {{ __(field.label) }}<span v-if="field.reqd" class="required">*</span>
              </label>
            </FloatLabel>

            <!-- Link -->
            <EntitySelector
              v-else-if="field.fieldtype === 'Link'"
              :model-value="store.fieldValues[field.fieldname]"
              :doctype="field.options"
              :fieldname="field.fieldname"
              :label="__(field.label)"
              :required="!!field.reqd"
              :show-add-button="false"
              :show-edit-button="false"
              @update:model-value="v => store.updateLinkValue(v, field)"
            />

            <!-- Check -->
            <div v-else-if="field.fieldtype === 'Check'" class="check-field">
              <Checkbox
                :model-value="store.fieldValues[field.fieldname]"
                @change="store.updateValue($event, field)"
                :input-id="field.fieldname"
                binary
              />
              <label :for="field.fieldname">{{ __(field.label) }}</label>
            </div>

            <!-- Small Text / Text -->
            <FloatLabel
              v-else-if="field.fieldtype === 'Small Text' || field.fieldtype === 'Text'"
              variant="on"
            >
              <Textarea
                :id="field.fieldname"
                :model-value="store.fieldValues[field.fieldname]"
                @input="store.updateValue($event, field)"
                fluid
                size="small"
                rows="2"
              />
              <label :for="field.fieldname">
                {{ __(field.label) }}<span v-if="field.reqd" class="required">*</span>
              </label>
            </FloatLabel>
          </div>
        </div>
      </div>
    </div>

    <template #footer>
      <Button severity="secondary" :label="__('Cancel')" @click="store.close()" />
      <Button
        :label="store.mode === 'edit' ? __('Save') : __('Create')"
        :loading="store.disabledButton"
        @click="onSave"
      />
    </template>
  </Dialog>
</template>

<script setup>
import { getCurrentInstance } from 'vue';
import Dialog from 'primevue/dialog';
import Button from 'primevue/button';
import FloatLabel from 'primevue/floatlabel';
import InputText from 'primevue/inputtext';
import Select from 'primevue/select';
import Checkbox from 'primevue/checkbox';
import Textarea from 'primevue/textarea';
import EntitySelector from './EntitySelector.vue';
import { useToast } from 'primevue/usetoast';

const { appContext } = getCurrentInstance();
const __ = appContext.config.globalProperties.__;

const props = defineProps({ store: { type: Object, required: true } });
const store = props.store;
const toast = useToast();

const emit = defineEmits(['close', 'created', 'edited']);

const onSave = async () => {
  const result = await store.save();

  if (!result.success) {
    if (result.missingFields?.length) {
      toast.add({
        severity: 'warn',
        summary: __('Required fields'),
        detail: __('Please fill: {0}', [result.missingFields.join(', ')]),
        life: 4000,
      });
    } else {
      toast.add({
        severity: 'error',
        summary: __('Error'),
        detail:
          store.mode === 'edit'
            ? __('Could not save {0}', [store.label])
            : __('Could not create {0}', [store.label]),
        life: 4000,
      });
    }
    return;
  }

  if (result.noChanges) {
    toast.add({
      severity: 'info',
      summary: __('No changes'),
      detail: __('No fields were modified'),
      life: 3000,
    });
    store.close();
    return;
  }

  if (store.mode === 'edit') {
    toast.add({
      severity: 'success',
      summary: __('Success'),
      detail: __('{0} {1} saved', [store.label, result.doc.name]),
      life: 3000,
    });
    emit('edited', result.doc);
  } else {
    toast.add({
      severity: 'success',
      summary: __('Success'),
      detail: __('{0} {1} created', [store.label, result.doc.name]),
      life: 3000,
    });
    emit('created', result.doc);
  }

  store.close();
};
</script>

<style scoped>
.quick-entry {
  width: 60vw;
}

.fields-grid {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.section-container {
  border: 1px solid var(--p-content-border-color);
  border-radius: 8px;
  padding: 0.5rem;
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
}

.section-title {
  margin: 0;
  color: var(--p-primary-color);
  font-size: 0.85rem;
  font-weight: 600;
}

.section-fields {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.75rem 1rem;
}

.field-container {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.required {
  color: var(--p-red-500);
  margin-left: 0.25rem;
}

.check-field {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
</style>

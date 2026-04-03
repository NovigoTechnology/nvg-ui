import { DefineComponent, Plugin } from 'vue'

// Component Props Interfaces
export interface FieldDefinition {
  fieldname: string
  label: string
  placeholder?: string
  fieldtype?: string
  options?: string
  read_only?: boolean
  quick_entry?: boolean
}

export interface AutoCompleteProps {
  field: FieldDefinition
  modelValue?: Record<string, any>
  disabled?: boolean
  size?: 'small' | 'large'
  dataweb?: string
  filter_list?: boolean
  invalid_fields?: string[]
  isTable?: boolean
}

export interface GridTableProps {
  field: FieldDefinition
  modelValue?: Record<string, any>
  disabled?: boolean
  [key: string]: any
}

export interface LinkFieldProps {
  field: FieldDefinition
  modelValue?: Record<string, any>
  disabled?: boolean
  [key: string]: any
}

// Component Exports
export const AutoComplete: DefineComponent<AutoCompleteProps>
export const GridTable: DefineComponent<GridTableProps>
export const LinkField: DefineComponent<LinkFieldProps>

// PrimeVue Components Re-exports
export { default as DataTable } from 'primevue/datatable'
export { default as Column } from 'primevue/column'
export { default as Paginator } from 'primevue/paginator'
export { default as Menu } from 'primevue/menu'
export { default as Checkbox } from 'primevue/checkbox'
export { default as DynamicDialog } from 'primevue/dynamicdialog'
export { default as Tag } from 'primevue/tag'
export { default as Button } from 'primevue/button'
export { default as ButtonGroup } from 'primevue/buttongroup'
export { default as Stepper } from 'primevue/stepper'
export { default as StepList } from 'primevue/steplist'
export { default as StepPanels } from 'primevue/steppanels'
export { default as Step } from 'primevue/step'
export { default as StepPanel } from 'primevue/steppanel'
export { default as ConfirmDialog } from 'primevue/confirmdialog'
export { default as Toast } from 'primevue/toast'
export { default as InputText } from 'primevue/inputtext'
export { default as DatePicker } from 'primevue/datepicker'
export { default as InputNumber } from 'primevue/inputnumber'
export { default as Dialog } from 'primevue/dialog'
export { default as FileUpload } from 'primevue/fileupload'
export { default as Image } from 'primevue/image'
export { default as Divider } from 'primevue/divider'
export { default as Select } from 'primevue/select'
export { default as Calendar } from 'primevue/calendar'
export { MultiSelect } from 'primevue'

// PrimeVue Services
export { default as ConfirmationService } from 'primevue/confirmationservice'
export { default as DialogService } from 'primevue/dialogservice'
export { ToastService } from 'primevue'

// PrimeVue Composables
export { useToast, useConfirm, usePrimeVue } from 'primevue'

// PrimeVue Config
export { default as PrimeVue } from 'primevue/config'
export { default as Aura } from '@primeuix/themes/aura'

// Utility Functions
/**
 * Group fields by section
 */
export function groupFields(fields: any[]): any[]

/**
 * Make a call to Frappe backend
 */
export function call(method: string, args: Record<string, any>): Promise<any>

/**
 * Frappe call wrapper with callback support
 */
export function frappeCall(options: {
  method: string
  args?: Record<string, any>
  callback?: (r: any) => void
}): Promise<any>

/**
 * Translation utility
 */
export function translatableLocale(locale?: string): any

// Plugin Installation
declare const plugin: Plugin
export default plugin

import PrimeVue from 'primevue/config'
import Aura from '@primeuix/themes/aura'
import AutoComplete from './components/AutoComplete.vue'
import DataTable from "primevue/datatable"
import Tag from "primevue/tag";
import Button from "primevue/button"
import Stepper from "primevue/stepper"
import StepList from "primevue/steplist"
import StepPanels from "primevue/steppanels"
import Step from "primevue/step"
import StepPanel from "primevue/steppanel"
import ConfirmDialog from "primevue/confirmdialog"
import Toast from "primevue/toast"

import {useToast} from "primevue/usetoast"
import { useConfirm, usePrimeVue } from "primevue";

const components = { 
  AutoComplete, 
  DataTable, 
  Button, 
  Tag, 
  Stepper, 
  StepList, 
  StepPanels, 
  Step, 
  StepPanel, 
  ConfirmDialog, 
  Toast,
  useToast,
  useConfirm,
  usePrimeVue
}

export default {
  install: (app, { themes = { light: Aura } } = {}) => {
    app.use(PrimeVue, {
      theme: {
        preset: themes.light,
        options: {
          prefix: "p",
          darkModeSelector: '[data-theme="dark"]',
          cssLayer: false,
        }
      }
    })
    
    Object.entries(components).forEach(([name, cmp]) => 
      app.component(name, cmp)
    )
  }
}

export { 
  AutoComplete, 
  DataTable, 
  Button, 
  Tag, 
  Stepper, 
  StepList, 
  StepPanels, 
  Step, 
  StepPanel, 
  ConfirmDialog, 
  Toast,
  useToast,
  useConfirm,
  usePrimeVue
}
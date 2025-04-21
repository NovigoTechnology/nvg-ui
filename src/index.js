import ConfirmationService from "primevue/confirmationservice";
import DialogService from "primevue/dialogservice";
import { ToastService } from "primevue";

import PrimeVue from 'primevue/config'
import Aura from '@primeuix/themes/aura'
import AutoComplete from './components/AutoComplete.vue'
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import Tag from "primevue/tag";
import Button from "primevue/button";
import ButtonGroup from "primevue/buttongroup";
import Stepper from "primevue/stepper"
import StepList from "primevue/steplist"
import StepPanels from "primevue/steppanels"
import Step from "primevue/step"
import StepPanel from "primevue/steppanel"
import ConfirmDialog from "primevue/confirmdialog"
import Toast from "primevue/toast"
import InputText from "primevue/inputtext";
import DatePicker from "primevue/datepicker";

import {useToast} from "primevue/usetoast"
import { useConfirm, usePrimeVue } from "primevue";

const components = { 
  AutoComplete, 
  DataTable, 
  Column,
  Button, 
  ButtonGroup,
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
  usePrimeVue,
  InputText,
  DatePicker
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
    app.use(ConfirmationService);
    app.use(DialogService);
    app.use(ToastService);
    
    Object.entries(components).forEach(([name, cmp]) => 
      app.component(name, cmp)
    )
  }
}

export { 
  AutoComplete, 
  DataTable, 
  Column,
  Button, 
  ButtonGroup,
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
  usePrimeVue,
  InputText,
  DatePicker
}
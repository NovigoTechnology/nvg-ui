import ConfirmationService from "primevue/confirmationservice";
import DialogService from "primevue/dialogservice";
import { ToastService } from "primevue";

import PrimeVue from 'primevue/config'
import Aura from '@primeuix/themes/aura'
import AutoComplete from './components/AutoComplete.vue'
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import Paginator from "primevue/paginator";
import Menu from "primevue/menu";
import Checkbox from "primevue/checkbox";
import DynamicDialog from "primevue/dynamicdialog";
import Tag from "primevue/tag";
import Button from "primevue/button";
import ButtonGroup from "primevue/buttongroup";
import Stepper from "primevue/stepper"
import StepList from "primevue/steplist"
import StepPanels from "primevue/steppanels"
import Step from "primevue/step"
import StepPanel from "primevue/steppanel"
import ConfirmDialog from "primevue/confirmdialog";
import Toast from "primevue/toast"
import InputText from "primevue/inputtext";
import DatePicker from "primevue/datepicker";
import InputNumber from "primevue/inputnumber";
import Dialog from "primevue/dialog";
import FileUpload from "primevue/fileupload";
import Image from "primevue/image";
import Divider from "primevue/divider";
import Select from "primevue/select";
import Calendar from "primevue/calendar";
import { MultiSelect } from "primevue";

import { useToast } from "primevue/usetoast";
import { useConfirm, usePrimeVue } from "primevue";

import translatableLocale from "./utils/primeLocale";

import { groupFields } from "./functions/groupFields";

const components = {
  AutoComplete,
  DataTable,
  Column,
  Paginator,
  Menu,
  Checkbox,
  DynamicDialog,
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
  DatePicker,
  InputNumber,
  Dialog,
  FileUpload,
  Image,
  Divider,
  Select,
  Calendar,
  MultiSelect,
  groupFields
}

export default {
  install: (app, { locale = translatableLocale } = {}) => {
    app.use(PrimeVue, {
      theme: {
        preset: Aura,
        options: {
          prefix: "p",
          darkModeSelector: '[data-theme="dark"]',
          cssLayer: false,
        }
      },
      locale,
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
  Paginator,
  Menu,
  Checkbox,
  DynamicDialog,
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
  DatePicker,
  InputNumber,
  Dialog,
  FileUpload,
  Image,
  Divider,
  Select,
  Calendar,
  MultiSelect,
  groupFields
}
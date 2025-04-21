import PrimeVue from 'primevue/config'
import Aura from '@primeuix/themes/aura'
import AutoComplete from './components/AutoComplete.vue'
import DataTable from "primevue/datatable"
import { Button } from 'primevue'

const components = { AutoComplete, DataTable, Button }

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

export { AutoComplete, DataTable, Button }
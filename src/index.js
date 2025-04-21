import PrimeVue from 'primevue/config'
import Aura from '@primeuix/themes/aura'
import AutoComplete from './components/AutoComplete.vue'
import DataTable from "primevue/datatable"

const components = { AutoComplete, DataTable }

export default {
  /** Instala NvgUI como plugin */
  install(app, options = {}) {
    app.use(PrimeVue, {
      theme: {
        preset: Aura,
        options: {
          prefix: "p",
          darkModeSelector: '[data-theme="dark"]',
          cssLayer: false,
        }
      },
      locale: options.locale || {},
      ...options.primevue
    })

    Object.entries(components).forEach(([name, cmp]) =>
      app.component(name, cmp)
    )
  }
}

export { AutoComplete, DataTable }
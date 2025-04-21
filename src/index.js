import PrimeVue from 'primevue/config'
import Aura from '@primeuix/themes/aura'
import AutoComplete from './components/AutoComplete.vue'
import { DataTable } from 'primevue'

const components = { AutoComplete, DataTable }

export default {
  /** Instala NvgUI como plugin */
  install(app, { themes = { light: Aura }, primevue = {} } = {}) {
    if (!app._primevueInstalled) {
      app.use(PrimeVue, {
        theme: {
          preset: themes.light,
          options: {
            prefix: "p",
            darkModeSelector: '[data-theme="dark"]',
            cssLayer: false,
          }
        },
        ...primevue
      })
      app._primevueInstalled = true
    }

    Object.entries(components).forEach(([name, cmp]) =>
      app.component(name, cmp)
    )
  }
}

export { AutoComplete, DataTable }
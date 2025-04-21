import PrimeVue from 'primevue/config'
import Lara from '@primeuix/themes/lara'
import AutoComplete from './components/AutoComplete.vue'

const components = { AutoComplete }

export default {
  /** Instala NvgUI como plugin */
  install(app, { themes = { light: Lara }, primevue = {} } = {}) {
    if (!app._primevueInstalled) {
      app.use(PrimeVue, {
        theme: themes,
        ...primevue
      })
      app._primevueInstalled = true
    }

    Object.entries(components).forEach(([name, cmp]) =>
      app.component(name, cmp)
    )
  }
}

export { AutoComplete }
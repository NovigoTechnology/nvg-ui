import PrimeVue from 'primevue/config'
import Lara from '@primeuix/themes/lara'
import MiComponente from './components/MiComponente.vue'

const components = { MiComponente }

export default {
  /** Instala NvgUI como plugin */
  install(app, { preset = Lara, primevue = {} } = {}) {
    if (!app._primevueInstalled) {
      app.use(PrimeVue, {
        theme: { preset },
        ...primevue
      })
      app._primevueInstalled = true
    }

    // Registra todos los componentes de la librería
    Object.entries(components).forEach(([name, cmp]) =>
      app.component(name, cmp)
    )
  }
}

export { MiComponente }

// src/index.js  (entry de la librería)
import PrimeVue from 'primevue/config'
import Lara from '@primeuix/themes/lara'   // preset por defecto
import MiComponente from './components/MiComponente.vue'

const components = { MiComponente }

export default {
  /** Instala NvgUI como plugin */
  install(app, { preset = Lara, primevue = {} } = {}) {
    // Evita instalar PrimeVue dos veces si el usuario ya lo hizo
    if (!app._primevueInstalled) {
      app.use(PrimeVue, {
        theme: { preset },                 // genera el CSS del tema  :contentReference[oaicite:0]{index=0}
        ...primevue                        // le dejás pasar opciones personales
      })
      app._primevueInstalled = true
    }

    // Registra todos los componentes de la librería
    Object.entries(components).forEach(([name, cmp]) =>
      app.component(name, cmp)
    )
  }
}

// exportación named por si alguien quiere importar uno a uno
export { MiComponente }

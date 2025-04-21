import PrimeVue from 'primevue/config'
import Lara from '@primeuix/themes/lara'
import AutoComplete from './components/AutoComplete.vue'
import baseStyles from '../dist/style.css?raw'

const components = { AutoComplete }

export default {
  install(app, { preset = Lara, primevue = {} } = {}) {
    if (!app._primevueInstalled) {
      app.use(PrimeVue, {
        theme: { preset },
        ...primevue
      })
      app._primevueInstalled = true
    }

    // Inyectamos los estilos desde el archivo CSS
    const styleSheet = document.createElement('style')
    styleSheet.textContent = baseStyles
    document.head.appendChild(styleSheet)

    Object.entries(components).forEach(([name, cmp]) =>
      app.component(name, cmp)
    )
  }
}

export { AutoComplete }
import PrimeVue from 'primevue/config'
import Lara from '@primeuix/themes/lara'
import AutoComplete from './components/AutoComplete.vue'

const components = { AutoComplete }

const customStyles = {
  global: `
    .p-disabled {
      opacity: 1 !important;
      background: var(--p-inputtext-disabled-background);
      color: var(--p-inputtext-disabled-color);
    }

    .custom-button {
      border: 1px solid var(--p-inputtext-border-color);
    }

    :deep(.p-autocomplete-fluid) {
      width: 100%;
    }
  `
}

export default {
  /** Instala NvgUI como plugin */
  install(app, { themes = { light: Lara }, primevue = {} } = {}) {
    if (!app._primevueInstalled) {
      app.use(PrimeVue, {
        theme: {
          preset: themes.light,
          options: {
            prefix: "p",
            darkModeSelector: '[data-theme="dark"]',
            cssLayer: false,
          },
          customStyles
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

export { AutoComplete }
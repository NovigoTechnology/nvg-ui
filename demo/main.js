import { createApp } from 'vue'
import App from './App.vue'

import Aura from '@primeuix/themes/aura'

import PrimeVue from 'primevue/config';
const app = createApp(App);

app.use(PrimeVue, {
  theme: {
    preset: Aura,
    options: {
      prefix: "p",
      darkModeSelector: '[data-theme="dark"]',
      cssLayer: false,
    },
  },
})
app.mount('#app');
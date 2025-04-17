import { createApp } from 'vue'
import App from './App.vue'

// Importa el tema específico desde @primeuix/themes
import Aura from '@primeuix/themes/aura'

// Importa iconos y primeflex
// import 'primeicons/primeicons.css'
// import 'primeflex/primeflex.css'

import PrimeVue from 'primevue/config';
const app = createApp(App);

app.use(PrimeVue, {
    theme: { preset: Aura }                       // ← aquí se inyecta el CSS
  })
app.mount('#app');
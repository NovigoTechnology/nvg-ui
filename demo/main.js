import { createApp } from 'vue'
import App from './App.vue'

// Importa el tema específico desde @primeuix/themes
import Aura from '@primeuix/themes/aura'
import Lara from '@primeuix/themes/lara'

// Importa iconos y primeflex
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css'

import PrimeVue from 'primevue/config';
const app = createApp(App);

app.use(PrimeVue, 
    {
        theme: {
            preset: Lara,
            options: {
                prefix: 'p',
                darkModeSelector: 'lara-dark',
                lightModeSelector: 'lara-light',
                themeSelector: 'lara',
                cssLayer: false
            }
        }
    }
);
app.mount('#app');
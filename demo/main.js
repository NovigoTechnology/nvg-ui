import { createApp } from 'vue'
import App from './App.vue'


import Lara from '@primeuix/themes/lara'

import PrimeVue from 'primevue/config';
const app = createApp(App);

app.use(PrimeVue,
    {
        theme: {
            preset: Lara,
            options: {

            }
        }
    }
);
app.mount('#app');
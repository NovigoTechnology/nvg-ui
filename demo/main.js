// Must run before any `src/` import: it sets up window.frappe / window.$, which
// src/utils/utils.js reads as soon as the package entry point is imported.
import './mocks/frappe.js';

// Components use PrimeVue's `pi pi-*` icon classes (Button icon, InputIcon, GridTable's
// trash/qrcode icons, QuickEntry's collapse arrows...) but the package doesn't ship or
// depend on primeicons itself — every consumer is expected to bring its own.
import 'primeicons/primeicons.css';

import { createApp } from 'vue';
import App from './App.vue';
import NvgUI from '../src/index.js';

const app = createApp(App);

app.use(NvgUI);
// QuickEntry reads translations off the global properties rather than the bare
// global (see src/components/QuickEntry.vue), so it needs this too.
app.config.globalProperties.__ = window.__;

app.mount('#app');

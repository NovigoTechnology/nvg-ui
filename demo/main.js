import './mocks/frappe.js';

import 'primeicons/primeicons.css';

import { createApp } from 'vue';
import App from './App.vue';
import NvgUI from '../src/index.js';

const app = createApp(App);

app.use(NvgUI);
app.config.globalProperties.__ = window.__;

app.mount('#app');

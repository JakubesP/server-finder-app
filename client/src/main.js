import { createApp } from 'vue';

import 'leaflet/dist/leaflet.css';

import store from './store.js';
import App from './App.vue';

// Universal components
import CenterWrapper from './components/CenterWrapper';
import AppCard from './components/AppCard';

const app = createApp(App);
app.config.globalProperties.maptilerKey = process.env.VUE_APP_MAP_TILER_KEY;

app.component('center-wrapper', CenterWrapper);
app.component('app-card', AppCard);

app.use(store);

app.mount('#app')

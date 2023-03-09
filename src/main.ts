import { createApp } from "vue";
import { createPinia } from "pinia";
import piniaPersist from "pinia-plugin-persist";

import App from "./App.vue";
import router from "./router";
import axios from 'axios'

import "./assets/stylesheets/main.scss";

const app = createApp(App);
const pinia = createPinia();

// Set the base URL for Axios requests
axios.defaults.baseURL = '/api'

pinia.use(piniaPersist);
app.use(pinia);
app.use(router);
app.mount("#app");

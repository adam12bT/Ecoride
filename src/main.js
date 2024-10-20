/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// main.js

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router"; // Import your Vue Router instance
import vuetify from "./plugins/vuetify"; // Import your Vuetify instance

import OpenLayersMap from "vue3-openlayers";
import "vue3-openlayers/styles.css";

const app = createApp(App);

// Use plugins
app.use(OpenLayersMap /* options */);
app.use(router); // Use Vue Router
app.use(vuetify); // Use Vuetify

app.mount("#app");

import { createApp } from "vue";
import App from "./App.vue";

// Plugins
import "./plugins/firebase";

import Toast from "vue-toastification";
// Import the CSS or use your own!
import "vue-toastification/dist/index.css";
import { appendFile } from "fs";

const options = {
  // You can set your default options here
};

appendFile;

createApp(App).use(Toast, options).mount("#app");

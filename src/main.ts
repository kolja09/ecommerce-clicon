import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./icons.ts";

import components from "@/components/UI";

const app = createApp(App);

components.forEach((component) => {
  app.component(component.name, component);
});

app.use(store).use(router).mount("#app");

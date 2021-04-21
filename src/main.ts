import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// global use element-plus
import ElementPlus from "element-plus";
import "element-plus/lib/theme-chalk/index.css";

createApp(App)
  .use(store)
  .use(router)
  .use(ElementPlus, {
    zIndex: 3000,
    size: "small",
  })
  .mount("#app");

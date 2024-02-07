import { createApp } from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
import App from "./App.vue";
import router from "./router";
import "bootstrap";

const app = createApp(App);
app.use(VueAxios, axios);
axios.defaults.withCredentials = false;

app.use(router); // 不同的可以使用不同的路由器
app.mount("#app");

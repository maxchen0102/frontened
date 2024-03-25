import { createApp } from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
import App from "./App.vue";
import router from "./router";
import "bootstrap";
axios.defaults.baseURL="http://127.0.0.1:8000"

const app = createApp(App);
app.use(VueAxios, axios);
axios.defaults.withCredentials = false;


app.use(router); // 不同的可以使用不同的路由器
app.mount("#app");

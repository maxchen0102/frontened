import { createApp } from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
import App from "./App.vue";
import router from "./router";
import "bootstrap";

const app = createApp(App);
app.use(VueAxios, axios);
axios.defaults.withCredentials = true;

app.use(router); // 不同的可以使用不同的路由器
app.mount("#app");

router.beforeEach((to, from, next) => {
  console.log("to", to, "from", from, "next", next);
  if (to.meta.requiresAuth) {
    console.log("這需要驗證");
    const api = "https://vue-course-api.hexschool.io/api/user/check";
    const vm = this;
    axios.post(api).then((response) => {
      console.log(response.data);
      if (response.data.success) {
        next();
      } else {
        next({
          path: "/login",
        });
      }
    });
  } else {
    next();
  }
});

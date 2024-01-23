import { createApp } from 'vue';
import App from './App.vue';
import router1  from './router';

const app = createApp(App);

app.use(router1 ); // 不同的可以使用不同的路由器
app.mount('#app');



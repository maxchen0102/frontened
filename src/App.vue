<template>
  <!--component render place -->
  <router-view></router-view>
  <div class="container">
    <div class="row">
      <div class="col-4"></div>
      <div class="col-4"></div>
      <div class="col-4"></div>
    </div>
  </div>
  <router-view name="menu"></router-view>
  <P>我是整個網站的模板componnet</P>
  <button type="button" class="btn btn-primary">Primary</button>
  <P>我是整個網站的模板componnet</P>
  <P>我是整個網站的模板componnet</P>
  <P>我是整個網站的模板componnet</P>
  <P>我是整個網站的模板componnet</P>
  <P>我是整個網站的模板componnet</P>
  <P>我是整個網站的模板componnet</P>
  這是外層訊息 {{ books }}
  <com v-for="book in books" :bookinfo="book" />
  <ul v-for="book in books" class="book">
    <li>{{ book.name }}</li>
    <li>{{ book.author }}</li>
    <li>{{ book.id }}</li>
  </ul>
  <img alt="Vue logo" src="./assets/logo.png" />
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import login from "@/components/pages/login.vue";
import com from "@/components/pages/com.vue";
import com_2 from "@/components/pages/com_2.vue";

export default {
  name: "App",
  components: {
    //HelloWorld
    login,
    com,
    com_2,
  },
  data() {
    return {
      path: process.env.VUE_APP_APIPATH,
      msg: "gg",
      books: [
        {
          name: "chris",
          author: "max",
          id: 12,
        },
        {
          name: "teani",
          author: "wnag",
          id: 2,
        },
      ],
    };
  },

  created() {},
};
</script>

<style></style>

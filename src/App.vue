<template>
  <!--component render place -->
  <router-view></router-view>
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

  created() {
    //const api = `${process.env.VUE_APP_APIPATH}/api/storegg/products`;
    const api = "https://vue-course-api.hexschool.io/api/storegg/products";
    this.$http.get(api).then((response) => {
      console.log(response.data);
      console.log("ok");
      console.log(process.env.VUE_APP_APIPATH, process.env.VUE_APP_CUSTOMPATH);
    });
  },
};
</script>

<style></style>

<template>
  <Navbar></Navbar>
  <Card></Card>
  <!--component render place -->
  <h5>以下為main router view</h5>
  <router-view></router-view>
  <div class="container">
    <div class="row">
      <div class="col-4"></div>
      <div class="col-4">
        <img alt="Vue logo" src="./assets/logo.png" />
        <P>我是APP.vue模板componnet</P>
      </div>
      <div class="col-4"></div>
    </div>
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import login from "@/components/pages/login.vue";
import com from "@/components/pages/com.vue";
import com_2 from "@/components/pages/com_2.vue";
import Navbar from "./components/Navbar.vue";
import Card from "./components/Card.vue";
import Banner from "./components/Banner.vue";

export default {
  name: "App",
  components: {
    //HelloWorld
    Navbar,
    Card,
    Banner,
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

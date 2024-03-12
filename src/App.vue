<template>
  <Navbar></Navbar>
  <Card></Card>
  <div class="container">
    <div class="row">
      <div class="col-4"></div>
      <div class="col-4">
        <Quote></Quote>
      </div>
      <div class="col-4"></div>
    </div>
  </div>

  <!--component render place -->
  <h5>以下為main router view</h5>
  <router-view></router-view>

  <Footer></Footer>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Banner from "./components/Banner.vue";
import Quote from "./components/Quote.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    //HelloWorld
    Navbar,
    Footer,
    Banner,
    Quote,
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

<template>
  <Navbar></Navbar>
  


  <!--component render place -->

    <div class="container">
    <div class="row">
      <div class="col-4"></div>
      <div class="col-4">

      </div>
      <div class="col-4"></div>
    </div>
  </div>
  <h5>以下為main router view</h5>



  <router-view></router-view>

  <Footer></Footer>
</template>

<script>
import axios from 'axios'

import Navbar from "./components/Navbar.vue";
import Banner from "./components/Banner.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    //HelloWorld
    Navbar,
    Footer,
    Banner,
   
  },
  data() {
    return {
      path: process.env.VUE_APP_APIPATH,
  

    }
  },

  mounted()
  {
    
  },

  methods:{
     

    
  }
};
</script>

<style></style>

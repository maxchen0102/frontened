<template>
  <div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-4"></div>
        <div class="col-4"></div>
        <div class="col-4"></div>
        <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
          <products></products>
        </main>
      </div>
    </div>
  </div>
</template>

<script>
//import Sidebar from "./Sidebar.vue";
import products from "./products.vue";
import axios from 'axios';

export default {
  components: {
    products,
  },
  methods:{
    getTest() {
      const apiPath="http://localhost:3001/api/test";
      const apiPath2="https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY"; // NASA 
      axios.get(apiPath2).then((res)=>{
        console.log(res);
        console.log(res.data);
        console.log(res.data.date);
      })
    },
  },
  created(
  ){
    this.getTest();
  }
};
</script>

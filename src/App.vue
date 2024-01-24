<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Navbar</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <!---->
            <router-link class="nav-link active" to="/index">home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link active" to="/page">page</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link active" to="/jobs">jobs</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <!--component render place -->
  <router-view></router-view>
  <router-view name="menu"></router-view>
  <br />
  <br />

  <br />
  <br />
  <button type="button" class="btn btn-primary">Primary</button>

  <P>我是整個網站的模板componnet</P>
  <P>我是整個網站的模板componnet</P>
  <P>我是整個網站的模板componnet</P>
  <img alt="Vue logo" src="./assets/logo.png" />
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
export default {
  name: "App",
  components: {
    //HelloWorld
  },
  created() {
    const api = "https://vue-course-api.hexschool.io/api/storegg/products";
    this.$http.get(api).then((response) => {
      console.log(response.data);
      console.log("ok");
      console.log(process.env.VUE_APP_APIPATH);
    });
  },
};
</script>

<style></style>

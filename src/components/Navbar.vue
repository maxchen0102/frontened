<template>
      <div>
    <nav class="navbar navbar-expand-lg  navbar-dark bg-dark">
     
      <div class="container-fluid">
        <a class="navbar-brand" href="home">首頁</a>
        <button
          class="navbar-toggler"
          type="button"
          @click="toggleNavbar"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div :class="{'collapse': !navbarOpen, 'navbar-collapse': true}" id="navbarNav">
          <!-- Navbar content -->
                <ul class="navbar-nav">
            <li class="nav-item">
              <!---->
              <router-link class="nav-link active" to="/home">home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link active" to="/Dashboard"
                >Dashboard</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link active" to="/router_test"
                >router_test</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link active" to="/datapage"
                >資料測試</router-link
              >
            </li>
             <li class="nav-item">
              <router-link class="nav-link active" to="/form"
                >表單填寫</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link active" to="/emit"
                >Emit</router-link
              >
            </li>
          </ul>

           <ul class="navbar-nav ms-auto text-end">
              <li class="nav-item">
              <router-link class="nav-link active" to="/emit"
                >購物車
                </router-link
              >
            </li>
          </ul>
        
        </div>
      </div>
    </nav>
  </div>


</template>

<script>
export default {
  data() {
    return {
      navbarOpen: true // Initially open
    };
  },
  methods: {
    toggleNavbar() {
      this.navbarOpen = !this.navbarOpen;
    }
  }
};
</script>

<style>
/* Add any custom styles here */


</style>
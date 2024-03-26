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
             <li class="nav-item">
              <router-link to="/summer" class="nav-link active">Summer</router-link>
              >
            </li>
             <li class="nav-item">
             <router-link to="/winter" class="nav-link active">Winter</router-link>
            </li>
          </ul>

           
             
           <ul class="navbar-nav ms-auto text-end">
             
              <li class="nav-item">
              <router-link class="nav-link active" to="/emit"
                ><span class="icon"><i class="fas fa-shopping-cart"></i></span>
                <span>Cart ({{ cartTotalLength }})</span>
                </router-link
              >
            </li>
          </ul>
        
        </div>
      </div>
    </nav>

        <div class="is-loading-bar has-text-centered" v-bind:class="{'is-loading': $store.state.isLoading }">
      <div class="lds-dual-ring"></div>
    </div>
  </div>


</template>

<script>
export default {
  data() {
    return {
      navbarOpen: true, // Initially open
      cart: {
        items:[]
      }
    };
  },
  beforeCreate() {
    this.$store.commit('initializeStore')
  },
  mounted() {
    this.cart=this.$store.state.cart
  },
  methods: {
    toggleNavbar() {
      this.navbarOpen = !this.navbarOpen;
    }
  },
   computed: {
      cartTotalLength() {
          let totalLength = 0

          for (let i = 0; i < this.cart.items.length; i++) {
              totalLength += this.cart.items[i].quantity
          }

          return totalLength
      }
  }
};
</script>


<style >

.lds-dual-ring {
  display: inline-block;
  width: 80px;
  height: 80px;
}
.lds-dual-ring:after {
  content: " ";
  display: block;
  width: 64px;
  height: 64px;
  margin: 8px;
  border-radius: 50%;
  border: 6px solid #ccc;
  border-color: #ccc transparent #ccc transparent;
  animation: lds-dual-ring 1.2s linear infinite;
}
@keyframes lds-dual-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.is-loading-bar {
  height: 0;
  overflow: hidden;

  -webkit-transition: all 0.3s;
  transition: all 0.3s;

  &.is-loading {
    height: 80px;
  }
}
</style>
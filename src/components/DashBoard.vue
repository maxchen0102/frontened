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
import products from "./pages/products.vue";
export default {
  components: {
    products,
  },
};
</script>

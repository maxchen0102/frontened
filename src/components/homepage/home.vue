<template>
  <div class="home">
    <section class="hero is-medium is-dark mb-6">
      <div class="hero-body has-text-centered">
        <p class="title mb-6">Welcome to Djacket</p>
        <p class="subtitle">The best jacket store online</p>
      </div>
    </section>

    <div class="container">
       <div class="row">
        <div class="col text-center"> <!-- Added text-center class -->
          <h2 class="is-size-2">Latest products</h2>
        </div>
      </div>
<br>
 <div class="columns is-multiline">
        <ProductBox
          v-for="product in latestProducts"
          v-bind:key="product.id"
          v-bind:product="product"
          class="column is-3" 
        />
      </div>

    
    
    
      </div>
  </div>
</template>


<script>

import axios from 'axios';
import ProductBox from '@/components/homepage/productBox'


export default {
  name: "home",
  components: {
    ProductBox
  },
  props: {
    msg: String,
  },
  data() {
    return {
       latestProducts: []
    };
  },
  mounted() {
    this.getLatestProducts();
    document.title="home"
  },
  methods: {
   getLatestProducts() {
      axios.get("/api/v1/latest-products/")
        .then(response => {
          this.latestProducts = response.data;
        })
        .catch(error => {
          console.error('Error fetching latest products:', error);
        });
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.product-image {
  height: 200px; /* Set the height to the desired size */
  object-fit: cover; /* Maintain aspect ratio and cover the entire space */
}

.product-card {
  width: 100%; /* Set the width of each card */
  margin-bottom: 20px; /* Add some bottom margin for spacing between cards */
}
</style>

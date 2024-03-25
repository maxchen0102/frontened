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

      <div class="row">
        <div class="col-md-3" v-for="product in latestProducts" :key="product.id">
          <div class="card mb-4">
            <img :src="product.get_thumbnail" class="card-img-top product-image" alt="Product Image"> <!-- Added product-image class -->
            <div class="card-body">
              <h3 class="card-title">{{ product.name }}</h3>
              <p class="card-text">${{ product.price }}</p>
              <a href="#" class="btn btn-info">View Details</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>

import axios from 'axios';

export default {
  name: "home",
  components: {

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
</style>

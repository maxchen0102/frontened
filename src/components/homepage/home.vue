<template>
  <main role="main">
    <section class="jumbotron text-center">
      <div class="container">
        <home_word></home_word>
      </div>
    </section>

    <div class="album py-5 bg-light">
      <div class="container">
        <div class="row">
          <home_card></home_card>
        </div>
      </div>
    </div>
  </main>
  <h1>test</h1>
<button @click="fetchItems">get </button>
{{ items }}
</template>

<script>
import home_word from "./home_word.vue";
import home_card from "./home_card.vue";
import axios from 'axios';

export default {
  name: "home",
  components: {
    home_word,
    home_card,
  },
  props: {
    msg: String,
  },
  data() {
    return {
      data: 1234,
      meassge: "hello world ",
      price: 100,
      mul: 2,
      isBtnDisabled: true,
      number1: 1,
      picked: 1,
      checked: [],
      count: 0,
      pages: 5,
      api: "http://127.0.0.1:8000/api/product",
       items: [],
      
    };
  },
  methods: {
    plus: function () {
      this.count += 1;
    },
    fetchItems() {
    console.log("ok")
    axios.get(this.api)
      .then(response => {
        this.items = response.data;
      })
      .catch(error => {
        console.error('Error fetching items:', error);
      });
   },
  print() {
    console.log("ok")
  }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

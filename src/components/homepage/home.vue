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
</template>

<script>
import home_word from "./home_word.vue";
import home_card from "./home_card.vue";
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
    };
  },
  methods: {
    plus: function () {
      this.count += 1;
    },
    signout() {
      const api = "https://vue-course-api.hexschool.io/logout";
      const vm = this;
      this.$http.post(api).then((response) => {
        console.log(response.data);
        if (response.data.success) {
          vm.$router.push("/login");
        }
      });
    },
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

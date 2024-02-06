<template>
  <div class="contianer">
    <div class="row">
      <div class="col-4"></div>
      <div class="col-4">
        <h1>這是首頁</h1>
      </div>
      <div class="col-4"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  components: {},
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

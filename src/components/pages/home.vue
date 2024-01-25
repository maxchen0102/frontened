<template>
  <div class="contianer">
    <div class="row">
      <div class="col-4"></div>
      <div class="col-4">
        <nav aria-label="Page navigation example">
          <ul class="pagination">
            <li class="page-item">
              <a class="page-link" href="#">Previous</a>
            </li>
            <li class="page-item" v-for="page in pages">
              <a class="page-link" href> {{ page }}</a>
            </li>

            <li class="page-item"><a class="page-link" href="#">Next</a></li>
          </ul>
        </nav>
      </div>
      <div class="col-4"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
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

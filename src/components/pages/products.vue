<template>
  <table class="table">
    <thead>
      <tr>
        <th scope="col">id</th>
        <th scope="col">category</th>
        <th scope="col">num</th>
        <th scope="col">price</th>
        <th scope="col">origin_price</th>
        <th scope="col">title</th>
        <th scope="col">unit</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in products">
        <td>{{ item.id }}</td>
        <td>{{ item.category }}</td>

        <td>{{ item.num }}</td>
        <td>{{ item.price }}</td>
        <td>{{ item.origin_price }}</td>
        <td>{{ item.title }}</td>
        <td>{{ item.unit }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  data() {
    return {
      products: [],
    };
  },
  methods: {
    getProducts() {
      const api = "https://vue-course-api.hexschool.io/api/storegg/products";
      const vm = this;
      this.$http.get(api).then((response) => {
        console.log("Response Data:", response.data);
        vm.products = response.data.products;
      });
    },
  },
  created() {
    this.getProducts();
  },
};
</script>

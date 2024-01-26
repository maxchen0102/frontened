<template>
  <div>
    <div>
      <button
        type="button"
        class="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#productModal"
      >
        建立新的產品
      </button>
    </div>
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

    <!-- Modal -->
    <div
      class="modal fade"
      id="productModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">...</div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>
  </div>
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

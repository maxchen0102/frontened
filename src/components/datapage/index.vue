<template>
  <div class="container">
    <div class="row">
      <div class="col-4"></div>
      <div class="col-4">
        <h1>data testing</h1>
        <div class="input-group input-group-lg">
          <div class="input-group-prepend">
            <span class="input-group-text" id="inputGroup-sizing-lg"
              >Input</span
            >
          </div>
          <input
            type="text"
            class="form-control"
            aria-label="Large"
            aria-describedby="inputGroup-sizing-sm"
            v-model="score"
          />
          <input
            type="text"
            class="form-control"
            aria-label="Large"
            aria-describedby="inputGroup-sizing-sm"
            v-model="score2"
          />
        </div>
      </div>
      <div class="col-4">
        <button @click="cal()" type="button" class="btn btn-success">
          結果
        </button>
        {{ score }}
        {{ total }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      a: 1234,
      score: 0,
      score2: 0,
      total: 0,
    };
  },
  methods: {
    cal(score, score2) {
      this.total = score + score2;
    },
  },
};
</script>

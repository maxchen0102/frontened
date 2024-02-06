<template>
  <h1>inner</h1>
  內層訊息{{ innerMsg }} <br />
  內層 {{ innerArr }} <br />
  <ul v-for="book in innerBooks">
    <li>id = {{ book.id }}</li>
    <li>name={{ book.name }}</li>
    <li>author={{ book.author }}</li>
  </ul>

  <input
    :value="innerMsg"
    @input="$emit('update:innerMsg', $event.target.value)"
  />
</template>

<script>
export default {
  props: {
    innerMsg: String,
    innerBooks: {
      type: [String, Object],
    },
    innerArr: {
      tpye: [String, Array],
    },
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

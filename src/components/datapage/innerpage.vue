<template>
  <h1>inner</h1>

  {{ msg2 }}
  <br />
  <slot></slot>
  <h3>=====</h3>
  <slot name="a">這是預設內容</slot>
  <h3>=====</h3>
  <slot name="b">這是預設內容</slot>

  <slot name="test"> Fallback content </slot>
</template>

<script>
import deeppage from "./deeppage.vue";
export default {
  components: { deeppage },
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
    return {
      msg2: "child!",
    };
  },
  methods: {},
};
</script>

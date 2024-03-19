<template>
  <h1>deep</h1>
  深層{{ message }}
  {{ data }}
  <br />
</template>

<script>
import { inject } from 'vue'
export default {
 setup() {
  const message = inject('message');
  return {
    message
  };
  },
  data() {

    return {
      data:this.message
    }
  }

};
</script>

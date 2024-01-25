<template>
  <h1>This Component A!</h1>
  這是內層的訊息 {{ message }}
</template>

<script>
export default {
  name: "com",
  props: {
    message: String,
  },
};
</script>
<style scoped>
h1 {
  color: red;
}
</style>

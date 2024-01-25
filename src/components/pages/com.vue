<template>
  <div>這是內層的訊息 {{ bookinfo.name }}</div>
  <div>這是內層的訊息 {{ bookinfo.author }}</div>
  <div>這是內層的訊息 {{ bookinfo.id }}</div>
</template>

<script>
export default {
  name: "com",
  props: {
    message: String,
    bookinfo: Object,
  },
};
</script>

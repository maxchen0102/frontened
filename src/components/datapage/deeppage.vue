<template>
  <h1>deep</h1>
  深層{{ provideMsg }}
  <br />
</template>

<script>
export default {
  inject: ["provideMsg"],
};
</script>

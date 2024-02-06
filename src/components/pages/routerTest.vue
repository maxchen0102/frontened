<template>
  <h3>This is routerTest</h3>
  <RouterView></RouterView>
  <RouterLink to="/router_test/typeA">
    <button type="button" class="btn btn-success">去typeA</button>
  </RouterLink>
  <br />
  <br />
  <RouterLink to="/router_test/typeB"
    ><button type="button" class="btn btn-danger">去typeB</button>
  </RouterLink>
  <br />
  <br />
</template>

<script>
export default {};
</script>

<style></style>

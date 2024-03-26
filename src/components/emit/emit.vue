<template>
  <div>
    <comA></comA>
    <comB></comB>
  </div>
</template>

<script>
import mitt from 'mitt';
import comA from './comA.vue';
import comB from './comB.vue';

export default {
  components: {
    comA,
    comB
  },
  setup() {

    const emitter = mitt();
    
   
    return {
      emitter
    };
  }
};
</script>

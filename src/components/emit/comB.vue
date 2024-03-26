<template>
  <div>{{ message }}</div>
</template>

<script>
import mitt from 'mitt'; 

export default {
  setup() {
  
    const emitter = mitt();

 
    const message = ''

    emitter.on('custom-event', (msg) => {
      message.value = msg;
    });
    return {
      message
    };
  }
};
</script>

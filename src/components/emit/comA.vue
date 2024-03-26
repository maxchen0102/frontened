<template>
  <button @click="emitEvent">Send Event from comA to comB</button>
</template>

<script>
import mitt from 'mitt'; 
export default {
  setup() {

    const emitter = mitt();

    const emitEvent = () => {
      emitter.emit('custom-event', 'Message from comA');
    };
    return {
      emitEvent
    };
  }
};
</script>

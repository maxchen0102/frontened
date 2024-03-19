<template>
<deeppage></deeppage>

<div>{{ text }} <button type="button" @click="pushData">發送至另一個元件</button></div>

</template>


<script>

import mitt from 'mitt';

const emitter = mitt();

import deeppage from './deeppage.vue';
export default { 
    components: {
    deeppage,
  },
  data() {
    return{
  text: '這有一段話'
  
    }
  },
  methods: {
 
 pushData() {
      emitter.emit('getData', this.text);
    }
  
  },
  
  props:['innercount','innertext','innerdata']
};
</script>


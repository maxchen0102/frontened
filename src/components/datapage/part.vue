<template>
<div>{{ text }}</div>
</template>

<script>
import mitt from 'mitt';
const emitter = mitt();
import { inject } from 'vue'
export default {
 setup() {

  },
  data() {

      return {
         text: '原始資料'
    }
    },
    created() {
     emitter.on('getData', (msg) => {
      this.text = msg;
    });
   
    },
    methods:{
      
  }

};
</script>

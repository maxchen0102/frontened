<template>

<innerpage ></innerpage>

<part></part>
</template>


<script>

import mitt from 'mitt';

const emitter = mitt();
import { provide } from "vue";
import innerpage from "./innerpage.vue";
import part from "./part.vue";

export default {
  components: {
    innerpage,
    part,
  },
  setup() {
 
 },
  data() {
    return {
        sum:0
    };
  },
  methods: {

  },
  created(){

  },

};
</script>

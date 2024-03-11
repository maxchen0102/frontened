<template>


<div class="card" style="width: 18rem;">
  
  <div class="card-body">
    <h5 class="card-title">{{ innercount }}</h5>
    <h5 class="card-title">{{ innertext }}</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <RouterLink to="/home">go to home</RouterLink>
    <button @click="emittext">emit</button>
  </div>
</div>

<ul>
  <li v-for="item in innerdata" :key="item.id">{{ item }}</li>
</ul>

 <slot name="header"></slot>
 <h1>===================</h1>
    <slot name="content"></slot>

</template>

<script>

export default {
 
  methods: {

    emittext() {
      this.$emit('child_text',"no world")
    }
  },
  data() {
    
  },
  props:['innercount','innertext','innerdata']
};
</script>

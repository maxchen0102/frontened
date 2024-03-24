<template>
  <main role="main">
    <section class="jumbotron text-center">
      <div class="container">
       
      </div>
    </section>

    <div class="album py-5 bg-light">
      <div class="container">
        <div class="row">
    
        </div>
      </div>
    </div>
  </main>

</template>

<script>

import axios from 'axios';

export default {
  name: "home",
  components: {

  },
  props: {
    msg: String,
  },
  data() {
    return {
   
    };
  },
  methods: {
  
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

<template>
<h1>{{ count  }}</h1>
<button @click="add">add </button>
<div v-if="warring"> Too high</div>

<h3>below is inner page data </h3>
<innerpage
 :innercount="count"
 :innertext="text"
 :innerdata="car_data"
 @child_text="handle_text">

<template v-slot:header>
<h1>header</h1>
</template>

<template v-slot:content>
  <h1>content</h1>
</template>
</innerpage>


<input type="text" v-model="score"
  :min="1"
  :max="999">
score {{score  }}

 <h4>come from child </h4>
{{child_text2}}

</template>


<script>
import innerpage from "./innerpage.vue";
export default {
  components: {
    innerpage,
  },

  data() {
    return {
      count: 0,
      warring: false,
      text: "hello",
      car_data: ["1", "2", "3"],
      child_text2: "",
      score:1
    };
  },
  methods: {

    add() {
      this.count += 1 
      if (this.count > 5) {
        this.warring=true
      }
      
    },
    handle_text(child_text) {
      this.child_text2=child_text
    }
  },
  created(){

  },

};
</script>

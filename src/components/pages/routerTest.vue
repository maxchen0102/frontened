<template>
  <div>
    <p>Count: {{ count2 }}</p>
    <span>{{$store.state.count}}</span>
     <button @click="incrementCount">Increment</button>
  </div>
</template>

<script>
import { useStore } from 'vuex';

export default {
  setup() {
    const store = useStore();
    const count2=store.state.count;
    console.log(store) 

     const incrementCount = () => {
      store.commit('increment');
    };
    return {
      count2,
      incrementCount,
    };
  }
};
</script>

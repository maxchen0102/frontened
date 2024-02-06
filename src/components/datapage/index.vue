<template>
  <button @click="change(flag)" type="button" class="btn btn-danger">
    改變
  </button>
  <ul v-if="flag">
    <li v-for="item in arr">{{ item }}</li>
  </ul>
  外層訊息{{ msg }}
  <br />
  ===========================================================
  <br />
  {{ msg2 }}
  <innerpage> {{ msg2 }} </innerpage>
  <innerpage>
    <template v-slot:a> I am injected content </template>
  </innerpage>
  <template> I am injected content </template>
</template>

<script>
import innerpage from "./innerpage.vue";
export default {
  components: {
    innerpage,
  },
  provide() {
    return {
      provideMsg: this.msg,
      //provideMsg2: computed(() => this.msg),
    };
  },

  data() {
    return {
      a: 1234,
      score: 0,
      score2: 0,
      total: 0,
      flag: true,
      arr: ["chris", "max", "bob"],
      msg: "hello",
      msg2: "Parent !",
      books: [
        {
          id: 123,
          name: "magic",
          author: "chris",
        },
        {
          id: 2,
          name: "economic",
          author: "max",
        },
      ],
    };
  },
  methods: {
    cal(score, score2) {
      this.total = score + score2;
    },
    change(flag) {
      this.flag = !flag;
    },
  },
  created(){

  },

};
</script>

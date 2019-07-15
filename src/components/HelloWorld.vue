<template>
  <div class="hello">
    <!-- <h1>{{ msg }}</h1> -->
<!-- operand1: {{operand1}} | operand2: {{operand2}} -->
<hr>
result:{{result}}

<hr>
isTimeFinished: {{isTimeFinished}}
  </div>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  computed: {
    ...mapGetters(['result', 'isTimeFinished']),
    // operand1(){
    //   return this.$store.getters.getOperand1;
    // },
    // operand2(){
    //   return this.$store.state.operand2;
    // },
    // result(){
    //   return this.$store.getters.getResult;
    // }
  }
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

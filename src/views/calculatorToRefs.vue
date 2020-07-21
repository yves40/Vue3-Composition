<template>
  <div class="calculator">
    <h3>{{Version}}</h3>
    <form class="calc-form">
      <input type="text" class="field" v-model="num1"  maxlength="2"/>
      <span class="operator"> + </span>
      <input type="text" class="field" v-model="num2"  maxlength="2"/>
      <span class="operator"> = </span>
      <span class="result">{{result}}</span>
    </form>
  </div>
</template>

<script>

import { reactive, computed, toRefs } from "vue";

function useCalculator(n1, n2) {
    let state = reactive( {
      num1: n1,
      num2: n2,
      result: computed( () => parseInt(state.num1) + parseInt(state.num2))
    })
    console.log(JSON.stringify(state))
    return toRefs(state);
}

export default {
  props: {
    preset1: String,
    preset2: String,
  },
  name: 'calculatorToRefs',
  setup(props) {
    console.log(JSON.stringify(props))
    let Version = 'calculatorToRefs: 1.22, Jul 21 2020'
    let dummy = {
      num1: 0,
      num2: 0,
    }

    if(!isNaN(parseInt(props.preset1))) {
       dummy.num1 = parseInt(props.preset1);
    }
    else {
       dummy.num1 = 0;
    }
    if(!isNaN(parseInt(props.preset2))) {
       dummy.num2 = parseInt(props.preset2);
    }
    else {
       dummy.num2 = 0;
    }

    // let { num1, num2, result } = useCalculator();
    let { num1, num2, result } = useCalculator(dummy.num1, dummy.num2);
    return { 
      Version,
      num1, num2, result
    }
  }
}

</script>

<style scopped>
  .calculator { display: flex; flex-direction: column; align-items: center;}
  .calc-form { width: 32 rem; }
</style>

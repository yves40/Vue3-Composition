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

function useCalculator() {
    let state = reactive( {
      num1: 0,
      num2: 0,
      result: computed( () => parseInt(state.num1) + parseInt(state.num2))
    })
    return toRefs(state);
}

export default {
  name: 'calculatorTorefs',
  setup() {
    let Version = 'calculatorToRefs: 1.03, Jul 03 2020'
    let { num1, num2, result } = useCalculator();
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

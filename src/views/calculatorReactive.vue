<template>
  <div class="calculator">
    <h3>{{Version}}</h3>
    <form class="calc-form">
      <input type="text" class="field" v-model="state.num1" @keyup="addNumbers" maxlength="2"/>
      <span class="operator"> + </span>
      <input type="text" class="field" v-model="state.num2" @keyup="addNumbers" maxlength="2"/>
      <span class="operator"> = </span>
      <span class="result">{{state.result}}</span>
    </form>
  </div>
</template>

<script>

import { reactive } from "vue";

export default {
  name: 'calculatorreactive',
  setup() {
    let Version = 'calculatorReactive: 1.01, Jul 02 2020'
    let state = reactive( {
      num1: 0,
      num2: 0,
      result: 0
    })


    function addNumbers() {
      state.result = parseInt(state.num1) + parseInt(state.num2);
    }

    return { 
      Version,
      state,
      addNumbers
    }
  }
}

</script>

<style scopped>
  .calculator { display: flex; flex-direction: column; align-items: center;}
  .calc-form { width: 32 rem; }
</style>

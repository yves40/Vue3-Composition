<template>
  <div class="calculator">
    <h3>{{Version}}</h3>
    <form class="calc-form">
      <input type="text" class="field" v-model="num1" @keyup="addNumbers" maxlength="2"/>
      <span class="operator"> + </span>
      <input type="text" class="field" v-model="num2" @keyup="addNumbers" maxlength="2"/>
      <span class="operator"> = </span>
      <span class="result">{{result}}</span>
    </form>
  </div>
</template>

<script>

import { ref } from "vue";

export default {
  name: 'calculatorRef',
  setup() {
    let Version = 'calculatorRef: 1.14, Jul 02 2020'
    let num1 = ref(0);
    let num2 = ref(0);
    let result = ref(0);

    function addNumbers() {
      result.value = parseInt(num1.value) + parseInt(num2.value);
    }

    return { 
      num1,
      num2,
      result,
      Version,
      addNumbers
    }
  }
}

</script>

<style scopped>
  .calculator { display: flex; flex-direction: column; align-items: center;}
  .calc-form { width: 32 rem; }
</style>

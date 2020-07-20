<template>
  <div class="calculator">
    <h3>{{Version}}</h3>
    <h5>{{Header}}</h5>
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
  props: {
    msg: String,
    preset1: String,
    preset2: String,
  },
  name: 'calculatorRef',
  setup(props) {

    console.log(JSON.stringify(props))

    let Version = 'calculatorRef: 1.40, Jul 16 2020'
    let Header = props.msg;
    let num1 ;
    let num2;

    if(!isNaN(parseInt(props.preset1))) {
       num1 = ref(parseInt(props.preset1));
    }
    else {
       num1 = ref(0)
    }
    if(!isNaN(parseInt(props.preset2))) {
       num2 = ref(parseInt(props.preset2));
    }
    else {
       num2 = ref(0)
    }

    let result = ref(num1.value + num2.value);

    function getVersion() {
      return  Version;
    }
    function addNumbers() {
      result.value = parseInt(num1.value) + parseInt(num2.value);
    }

    return { 
      num1,
      num2,
      result,
      Version,
      Header,
      addNumbers,
    }
  }
}

</script>

<style scopped>
  .calculator { display: flex; flex-direction: column; align-items: center;}
  .calc-form { width: 32 rem; }
  h3 { padding: 2px; margin: 4px;}
  h5 { padding: 2px; margin: 4px;}
</style>

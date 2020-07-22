<template>
  <div class="calculator">
    <div class="moduletitle">{{Version}}</div>
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

import { ref, watch } from "vue";

export default {
  props: {
    msg: String,
    preset1: String,
    preset2: String,
  },
  name: 'calculatorRef',
  setup(props) {

    console.log(JSON.stringify(props))

    let Version = 'calculatorRef: 1.44, Jul 22 2020'
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
    watch( [num1, num2], ([c1, c2], [p1, p2]) => {
        console.log('num1 : ' + c1 + ' ____ ' + p1);
        console.log('num2 : ' + c2 + ' ____ ' + p2);
    })

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


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
    <div class="moduletitle">Modified {{modifications}} time(s)</div>
  </div>
</template>

<script>

import { onMounted, onBeforeUnmount, ref, watch, computed } from "vue";
import { useStore } from "vuex";
import { Router, useRouter } from "vue-router";

export default {
  props: {
    msg: String,
    preset1: String,
    preset2: String,
  },
  name: 'calculatorRef',
  setup(props, context) {

    const store = useStore();
    const router = useRouter();
    router.getRoutes().forEach( rt => console.info(rt.path));
    
    let Version = 'calculatorRef: 1.76, Aug 11 2020 '
    let Header = props.msg;
    let num1 ;
    let num2;
    let result = 0;
    let modifications = computed( () => store.getters.getModificationsNumber);

    // Have a look at passed parameters if any
    if(!isNaN(parseInt(props.preset1))) {
       num1 = ref(parseInt(props.preset1));
    }
    else {
       num1 = ref(0)
    }
    // Update the store
    store.dispatch('updateNum1', { num1: num1 })
    if(!isNaN(parseInt(props.preset2))) {
       num2 = ref(parseInt(props.preset2));
    }
    else {
       num2 = ref(0)
    }
    // Update the store
    store.dispatch('updateNum2', { num2: num2 })
    // Read the result in the store 
    result = computed( () => store.state.result );

    onBeforeUnmount(() =>  {
      console.log(Version + 'UnMounted');
    })

    onMounted(() =>  {
      console.log(Version + 'Mounted');
    })
    function getVersion() {
      return  Version;
    }
    function addNumbers() {
      store.dispatch('updateResult', { num1: num1.value, num2: num2.value} );
    }
    watch( [num1, num2], ([c1, c2], [p1, p2]) => {
      console.log('watch handler: num1 changed to: ' + c1 + ' from ' + p1);
      console.log('watch handler: num2 changed to: ' + c2 + ' from ' + p2);
  })

    return { 
      num1,
      num2,
      result,
      modifications,
      Version,
      Header,
      addNumbers,
    }
  }
}

</script>


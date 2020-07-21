<template>
    {{Version}}
  <div class="home">
    <topmenu></topmenu>
    <numbers/>
    <calculatorRef msg="2 params" preset1= "12" preset2="24"/>
    <calculatorToRefs/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld'
import calculatorRef from '@/views/calculatorRef'
import calculatorToRefs from './calculatorToRefs'
import numbers from './numbers';
import topmenu from "./topmenu"

export default {
  name: 'Home',
  components: {
    topmenu,
    HelloWorld,
    calculatorRef,
    calculatorToRefs,
    numbers
  },
  setup() {
    const Version = 'Home.vue 1.09, Jul 21 2020'

    return { Version };
  }
}
</script>

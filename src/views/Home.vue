<template>
  <div class="home">
    <h3>{{Version}}</h3>
    <calculatorRef msg="2 params" preset1= "12" preset2="24"/>
    <calculatorToRefs/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld'
import calculatorRef from '@/views/calculatorRef'
import calculatorToRefs from './calculatorToRefs'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    calculatorRef,
    calculatorToRefs
  },
  setup() {
    const Version = 'Home.vue 1.06, Jul 21 2020'

    return { Version };
  }
}
</script>

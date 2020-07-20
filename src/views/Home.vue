<template>
  <div class="home">
    <h3>{{Version}}</h3>
    <calculatorRef msg="1st param" preset1="12"/>
    <calculatorRef msg="2nd param" preset2="24"/>
    <calculatorRef msg="2 params" preset1= "12" preset2="24"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import calculatorRef from '@/views/calculatorRef.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    calculatorRef
  },
  setup() {
    const Version = 'Home.vue 1.05, Jul 20 2020'
    const HelloMessage = 'Message for HelloWorld: 1.00, Jul 12 2020'

    return { Version, HelloMessage };
  }
}
</script>

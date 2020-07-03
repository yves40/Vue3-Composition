<template>
  <p>Multiple root components</p>
  <div id="app">
    <h1>Learning Vue3 composition</h1>
    <h3>Version is {{ Version }}</h3>
    <p>Capacity: {{ capacity }}</p>
    <p>Developers are : {{ devnumber }}</p>
    <ul>
      <li v-for="(name, index) in developers" :key="index">
        {{ name }}
      </li>
    </ul>
    <button @click="increaseCapacity">Increase</button>
    <calculatorRef/>
    <calculatorReactive/>
    <calculatorComputed/>
    <calculatorToRefs/>
  </div>
</template>

<script>

import { ref, computed, onMounted, onUpdated, watchEffect } from "vue"; // <-- Use this line if you're in a Vue 3 app
import calculatorRef  from "./views/calculatorRef";
import calculatorReactive  from "./views/calculatorReactive";
import calculatorComputed  from "./views/calculatorComputed";
import calculatorToRefs  from "./views/calculatorToRefs";

export default {
  name: 'App',
  components: {
    calculatorRef,
    calculatorReactive,
    calculatorComputed,
    calculatorToRefs
  },

  setup() {
      const count = ref(0);
      const capacity = ref(3);
      const Version = "App.vue 1.31, Jul 03 2020";
      const developers = ref(["Yves", "Isabelle", "Barbilec", "Bintoul", "Ratoon", "Tono"]);
      const devnumber = computed(() => {
        return developers.value.length;
      })
      function increaseCapacity() { 
        capacity.value++;
      }
      watchEffect( () => {
      });
      onMounted( () => { 
        console.log('Mounted') ;
      });      
      onUpdated( () => { console.log('Updated: ' + capacity.value)});
      return { capacity, increaseCapacity, Version, developers, devnumber };
    }
  };

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

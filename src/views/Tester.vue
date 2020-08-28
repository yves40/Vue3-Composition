<template>
  <div class="calculator">
    <div class="moduletitle">{{Version}}</div>
    <form class="calc-form">
        <numfield v-model="age" minvalue="10" maxvalue="120" message="Age please:"/>
        <numfield v-model="size" maxvalue="210" message="Size please:"/>
        <numfield v-model="weight" minvalue="50" message="Your weight:"/>
    </form>
  </div>
</template>

<script>

import numfield from "./numfield"

import { onMounted, onBeforeUnmount, ref, watch, computed } from "vue";

export default {
  props: {
  },
  components: {
    numfield,
  },
  name: 'Tester',
  setup(props, context) {

    let Version = 'Tester: 1.15, Aug 28 2020 '
    let age = ref(55);
    let size = ref(175);
    let weight = ref(100);

    // Test lifecycle handlers
    onBeforeUnmount(() =>  { console.log(Version + 'UnMounted');})
    onMounted(() =>  {console.log(Version + 'Mounted');})
    
    //-----------------------------------------------------------------------
    // Track user actions
    //-----------------------------------------------------------------------
    watch( [age], ([n1], [p1]) => {
      console.log("**** " + n1 + "/" + p1 )
    })

    // Utilities
    function getVersion() { return  Version; }

    return { 
      age,
      size,
      weight,
      Version,
    }
  }
}

</script>


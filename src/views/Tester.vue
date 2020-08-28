<template>
  <div class="calculator">
    <div class="moduletitle">{{Version}}</div>
    <form class="calc-form">
        <numfield v-model="mini" minvalue="10" maxvalue="120" message="Age please:"/>
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

    let Version = 'Tester: 1.10, Aug 28 2020 '
    let mini = ref(55);

    // Test lifecycle handlers
    onBeforeUnmount(() =>  { console.log(Version + 'UnMounted');})
    onMounted(() =>  {console.log(Version + 'Mounted');})
    
    //-----------------------------------------------------------------------
    // Track user actions
    //-----------------------------------------------------------------------
    watch( [mini], ([n1], [p1]) => {
      console.log("**** " + n1 + "/" + p1 )
    })

    // Utilities
    function getVersion() { return  Version;}

    return { 
      mini,
      Version,
    }
  }
}

</script>


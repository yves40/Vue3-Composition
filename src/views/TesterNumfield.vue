<template>
    <div class="moduletitle">{{Version}}</div>
    <div>
      <numfield v-model="age" minvalue="10" maxvalue="120" message="Age please:"/>
      <numfield v-model="size" maxvalue="210" message="Size please:"/>
      <numfield v-model="weight" minvalue="50" message="Your weight:"/>
      <numfield v-model="freezone" message="Free number"/>
      <div class="grid2-60 viewframe">
        <span>Result</span>
        <span>{{ thesum }}</span>
      </div>
      <div class="moduletitle">
        <button class="btn btn-outline-primary">Validate</button>
      </div>
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
  name: 'TesterNumfield',
  setup(props, context) {

    let Version = 'TesterNumfield: 1.26, Sep 21 2020 '
    let age = ref(55);
    let size = ref(175);
    const weight = ref(100);
    let freezone = ref(100);
    let thesum = computed( () => age.value+size.value+weight.value+freezone.value)

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
      freezone,
      thesum,
      Version,
    }
  }
}

</script>

<style scoped>
#outer-grid {
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  grid-gap: 8px;
  grid-auto-flow: column;
}
#outer-grid > div {
  background-color: orangered;
  color: white;
  font-size: 4vw;
  padding: 8px;
}
#inner-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 5px;
}
#inner-grid > div {
  background: salmon;
  padding: 8px;
}
</style>


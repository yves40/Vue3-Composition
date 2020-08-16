<template>
  <div class="calculator">
    <div class="moduletitle">{{Version}}</div>
    <form class="calc-form">
      <input type="text" class="field" v-model="thefield" maxlength="2"/>
    </form>
  </div>
</template>

<script>

import { onMounted, onBeforeUnmount, ref, watch } from "vue";

export default {
  props: {
    initialvalue: String,
  },
  emits: [
    "One", "Two", "Three", "Triggered"
  ],
  name: 'numfield',
  setup(props, context) {

    let Version = 'numfield: 1.07, Aug 12 2020 '
    let thefield = ref(0);

    context.emit('Triggered');
    //-----------------------------------------------------------------------
    // Track user actions
    //-----------------------------------------------------------------------
    watch( [thefield], ([c1], [p1]) => {
      console.log("**** " + c1 +  " **************************")
      let trackchange = check(thefield, c1, p1);
    })

    // Utilities
    function getVersion() { return  Version;}
    function check(field, ckey, pkey) {  // Get field, current and previous field value
      let status = false;
      // check we have a number, otherwise reset to previous value
      if ((ckey !== pkey)||(ckey === "")) {
        if(isNaN(ckey)||(ckey === ""))
        {
          console.log('Number please..., reset to zero' );
          field.value = 0;
          status = true;
        }
        else {
          console.log('watch handler: change from: ' + (pkey===""? 'Nothing': pkey) + ' to ' + ckey);
          if(ckey !== "0") field.value = ckey.replace(/^0+/, '');
          status = true;
        }
      }
      return status;
    }

    return { 
      thefield,
      Version,
    }
  }
}

</script>


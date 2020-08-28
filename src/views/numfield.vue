<template>
  <div class="calculator">
    <div class="moduletitle">{{Version}}</div>
    <form class="calc-form">
      {{msg}}
      <input type="text" class="field" v-model="thenumber" />
    </form>
  </div>
</template>

<script>

import { onMounted, onBeforeUnmount, ref, watch } from "vue";
import { modelNumberWrapper } from "../wrappers/modelNumberWrapper";

export default {
  props: {
    modelValue: Number,
    maxvalue: String,
    minvalue: String,
    message: String
  },
  name: 'numfield',
  setup(props, {emit}) {

    let Version = 'numfield: 1.28, Aug 28 2020 '

    console.log(JSON.stringify(props))

    const thenumber = modelNumberWrapper(props, emit, 'modelValue');
    const min = props.minvalue;
    const max = props.maxvalue;
    const msg = props.message;


    //-----------------------------------------------------------------------
    // Track user actions
    //-----------------------------------------------------------------------
    watch( [thenumber], ([ckey], [pkey]) => {
      let trackchange = check(thenumber, ckey, pkey);
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
          if(ckey !== "0") field.value = parseInt(ckey);
          status = true;
        }
      }
      return status;
    }

    return { 
      thenumber,
      msg,
      Version,
    }
  }
}

</script>


<template>
  <div class="localgrid">
    {{msg}} 
    <input type="text" class="field" v-model="thenumber" />
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

    let Version = 'numfield: 1.36, Aug 31 2020 '

    console.log(JSON.stringify(props))

    const thenumber = modelNumberWrapper(props, emit, 'modelValue');
    const min = props.minvalue;
    const max = props.maxvalue;
    let error = "";
    let msg;

    msg = props.message;
    if(!isNaN(min)&&!isNaN(max)) {
      msg = props.message + ' ' + min + ' to ' + max;   
    }
    else{ 
      if(!isNaN(min)) { msg = props.message + ' Min:' + min };
      if(!isNaN(max)) { msg = props.message + ' Max:' + max };
    }


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

<style scoped>

  .localgrid {
    display:grid;
    grid-gap: 20px; 
    grid-template-columns: 80% 20%;
    margin: auto;
    text-align: right;
    align-items: center;
  }

</style>

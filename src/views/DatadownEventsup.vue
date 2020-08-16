<template> 
  <label> 
    <div class="moduletitle">{{Version}}</div>
    <input type="text" v-model="message" > 
    <input type="checkbox" v-model="isDraft"> Draft 
  </label>
</template>

<script>

import { computed } from 'vue'
import { useModelWrapper } from "../wrappers/useModelWrapper";

export default { 
  props: { 
    modelValue: String, 
    payload: {
      draft: Boolean,
      minvalue: 0,
    },
  },
  setup(props, { emit }) { 
    const Version = "DatadownEventup 1.09: Aug 16 2020"
    return { 
      Version, 
      message: useModelWrapper(props, emit, 'modelValue'), 
      isDraft: useModelWrapper(props, emit, 'payload') 
    }
  }
}

</script>

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
    draft: Boolean
  },
  setup(props, { emit }) { 
    const Version = "DatadownEventup 1.07: Aug 14 2020"
    return { 
      Version, 
      message: useModelWrapper(props, emit, 'modelValue'), 
      isDraft: useModelWrapper(props, emit, 'draft') 
    }
  }
}

</script>

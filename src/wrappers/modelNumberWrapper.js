import { computed } from 'vue'
export function modelNumberWrapper(props, emit, name = 'modelValue') { 
  return computed({ 
    get: () =>  {
      return parseInt(props[name]) ;
    },
    set: (value) => { 
      if(isNaN(value)) {
        emit(`update:${name}`, 0); 
      }
      else {
        emit(`update:${name}`, parseInt(value));
      }
    }
  })
}

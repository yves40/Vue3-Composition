import { computed } from 'vue'
export function useModelWrapper(props, emit, name = 'modelValue') { 
  return computed({ 
    get: () =>  {
      return props[name] ;
    },
    set: (value) => { 
      //console.log(value);
      emit(`update:${name}`, value) 
    }
  })
}

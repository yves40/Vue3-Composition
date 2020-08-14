import { computed } from 'vue'
export function useModelWrapper(props, emit, name = 'modelValue') { 
  return computed({ 
    get: () =>  {
      //console.log("Return property " + name);
      return props[name] ;
    },
    set: (value) => { 
      //console.log(value);
      emit(`update:${name}`, value) 
    }
  })
}

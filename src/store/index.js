import Vuex from 'vuex'

export default Vuex.createStore({
  state: {
    Version: 'index:1.02, Aug 10 2020 ',
    num1: 0,
    num2: 0,
    result: 0,
  },
  getters: {
    getVersion() { return state.Version;},
    getNum1() { return state.num1;},
    getNum2() { return state.num2;},
    getResult() { return sate.result;}
  },
  mutations: {
    setNum1(num) { 
      state.num1 = num;
    },
    setNum2(num) { 
      state.num2 = num;
    }
  },
  actions: {
    updateResult({commit, state}, payload) { 
      console.info(state.Version + JSON.stringify(payload)) ;
    }, 
    updateNum1({commit, state}, payload) {
      console.info(state.Version + 'Action num1') ;
      commit('setNum1');
    },
    updateNum2({commit, state}, payload) {
      console.info(state.Version + 'Action num2') ;
      commit('setNum2');
    }
  },
  modules: {
  }
});

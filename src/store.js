import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    operand1: 5,
    operand2: 0,
    result: 0,
    timeFinished: false,
  },
  getters: {
    getOperand1(store) {
      return store.operand1;
    },
    isTimeFinished(store) {
      return store.timeFinished;
    },
    result(store) {
      return Number(store.operand1) + Number(store.operand2);
    },
  },
  mutations: {
    changeOperand(state, value) {
      state.operand1 = value.operand1;
      state.operand2 = Number(value.operand2);
    },
    setTimeFinished(state) {
      state.timeFinished = true;
    },
  },
  actions: {
    incrementAsync({ commit }) {
      setTimeout(() => {
        commit('increment');
      }, 1000);
      // commit(DATA_LOAD_PRODGESS);
      // fetch('/').then().then(
      //   commit(DATA_LOAD_SUCCESS);
      // }).catch(
      //   commit(DATA_LOAD_ERROR);
      // )
    },
  },
});

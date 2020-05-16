import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    theMessages: [],
  },
  mutations: {
    msgData(state, data) {
      state.theMessages.push(data);
    },
  },
  actions: {
    sendBtn(context, msg) {
      context.commit('msgData', msg);
    },
  },
  modules: {
  },
});

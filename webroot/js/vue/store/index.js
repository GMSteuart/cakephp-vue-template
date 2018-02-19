import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate'

import Users from '@/store/modules/Users';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    Users,
  },
  plugins: [createPersistedState({
    storage: window.sessionStorage,
    paths: [
      // 'Users'
    ]
  })]
});
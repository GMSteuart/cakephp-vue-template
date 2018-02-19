import { assign, isEmpty } from 'lodash';
import auth from '@/auth';

const users = {
  namespaced: true,
  state: {
    active: {},
  },
  actions: {
    ['login']({commit}, user) {
      return auth.login(user)
        .then((user) => {
          commit('setActive', user);
          return user;
        })
    },
    ['logout']({commit}) {
      commit('logout');
      return auth.logout();
    }
  },
  mutations: {
    ['setActive'](state, user) {
	    state.active = user;
    },
    ['logout'](state) {
      state.active = {};
    }
  }
};

export default users;
/**
 * ProtoVue
 *
 * Vue implementation for the ProtoVue software. Default HTML5 tags that are meant
 * to be overriden use the 'pv' prefix for (P)roto(V)ue.
 *
 */
// import styles
import 'animate.css/animate.min.css';

import Vue from 'vue';
import App from '@/App';
import Vuetify from 'vuetify';

import router from '@/router'

import store from '@/store';

Vue.use(Vuetify);

new Vue({
  el: '#app',
  components: {
    App
  },
  router,
  store
});
import Vue from 'vue';
import Vuex from 'vuex';
import login from '../store/login';
import join from "./join";

import layout from './layout';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    layout, join, login
  },
});
import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import * as VueGoogleMaps from 'vue2-google-maps';
import VueTouch from 'vue-touch';
import Trend from 'vuetrend';
import Toasted from 'vue-toasted';
import VueApexCharts from 'vue-apexcharts';
import Vuex from 'vuex'
import axios from 'axios'

import InfiniteLoading from "vue-infinite-loading";

import store from './store';
import router from './router';
import App from './App';
import Widget from './components/Widget/Widget';

Vue.prototype.$http = axios;
Vue.use(BootstrapVue);
Vue.use(VueTouch);
Vue.use(Trend);
Vue.use(Vuex);
Vue.use(InfiniteLoading);
Vue.component('Widget', Widget);
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyB7OXmzfQYua_1LEhRdqsoYzyJOPh9hGLg',
  },
});
Vue.component('apexchart', VueApexCharts);
Vue.use(Toasted, {duration: 10000});
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  Vuex,
  axios,
  render: h => h(App),
});
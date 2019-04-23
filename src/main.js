import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex/store'
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
import Store from 'storejs'
import LazyLoad from 'mint-ui'

Vue.use(LazyLoad);
Vue.use(MuseUI);
Vue.use(Store);
Vue.config.productionTip = false;

/* eslint-disable no-new */
Vue.filter('capitalize', function (value) {
  if (!value) return '';
  value = value.toString();
  return value.charAt(0).toUpperCase() + value.slice(1)
});

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
});

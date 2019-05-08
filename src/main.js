import Vue from 'vue'
import store from './vuex/store'
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
import LazyLoad from 'mint-ui'
import VueTouch from 'vue-touch'
import App from './App'
import Store from 'storejs'
import router from './router'
import Helpers from 'muse-ui/lib/Helpers'

Vue.use(Helpers);
Vue.use(LazyLoad);
Vue.use(MuseUI);
Vue.use(Store);
Vue.use(VueTouch, {name: 'v-touch'});
Vue.config.productionTip = false;
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
});

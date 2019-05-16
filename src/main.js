import Vue from 'vue'
import store from './vuex/store'
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
import LazyLoad from 'mint-ui'
import App from './App'
import Store from 'storejs'
import router from './router'
import Helpers from 'muse-ui/lib/Helpers'
import "swiper/dist/css/swiper.min.css";
import Mui from 'vue-awesome-mui';

Vue.use(Helpers);
Vue.use(LazyLoad);
Vue.use(MuseUI);
Vue.use(Store);
Vue.use(Mui);
Vue.config.productionTip = false;
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
});

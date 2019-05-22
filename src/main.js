import 'muse-ui-loading/dist/muse-ui-loading.css';
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
import Loading from 'muse-ui-loading';
import axios from 'axios';


Vue.use(Loading);
Vue.use(Helpers);
Vue.use(LazyLoad);
Vue.use(MuseUI);
Vue.use(Store);
Vue.use(Mui);

Vue.prototype.$axios=axios;
Vue.config.productionTip = false;
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
});

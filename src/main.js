import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex/store'
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
import Store from 'storejs'


Vue.use(MuseUI);
Vue.use(Store);

const ToastOption = {
  position: 'top', // 弹出的位置
  time: 2000, // 显示的时长
  closeIcon: 'close', // 关闭的图标
  close: false, // 是否显示关闭按钮
  successIcon: 'check_circle', // 成功信息图标
  infoIcon: 'info', // 信息信息图标
  warningIcon: 'priority_high', // 提醒信息图标
  errorIcon: 'warning' // 错误信息图标
}

import Toast from 'muse-ui-toast';
Vue.use(Toast, ToastOption);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
});

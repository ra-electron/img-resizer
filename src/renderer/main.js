import Vue from 'vue';
import axios from 'axios';

import App from './App';


/** 自定义指令区域 */
import paste from '@/directive/paste.js'
Vue.use(paste)
/** ---------------- */


if (!process.env.IS_WEB) Vue.use(require('vue-electron'));
Vue.http = Vue.prototype.$http = axios;
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  components: { App },
  template: '<App/>',
}).$mount('#app');

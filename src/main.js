// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import '../static/css/layout.css'
import '../static/css/iconfont/iconfont.css'
import '../static/js/base.js'

Vue.prototype.axios = axios;
Vue.config.productionTip = false;

Vue.prototype.$axios = axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router
})

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import fastclick from 'fastclick'
import VueResource from 'vue-resource'
import VueLazyload from 'vue-lazyload'
import store from './store'
Vue.use(VueResource)

Vue.config.productionTip = false
fastclick.attach(document.body)
/* eslint-disable no-new */
Vue.use(VueLazyload, {
  loading: 'common/img/loading.gif'
})

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})

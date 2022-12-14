import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import store from './store'
import './assets/css/style.less'

Vue.config.productionTip = false
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

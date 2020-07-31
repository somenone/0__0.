import Vue from 'vue'
import App from './App.vue'
import router from './router'


require("./http/http")
require("./components/confirm/confirm")
require("./components/anyComfirm/anyConfirm")


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

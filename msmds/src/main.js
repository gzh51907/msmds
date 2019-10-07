import Vue from 'vue'
import App from './App.vue'

import router from './router'


Vue.config.productionTip = false

// 4. 把router实例注入到vue实例中
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

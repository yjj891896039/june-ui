import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './permission'
import loading from '@/components/pc/loading/loading.js'
Vue.use(ElementUI);

Vue.config.productionTip = false
Vue.prototype.$store = store
Vue.prototype.$loading = loading
new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')

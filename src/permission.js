import Vue from 'vue'
import router from './router'

router.beforeEach((to, from, next) => {
    // Vue.prototype.$loading.show();
    // setTimeout(() => {
    //     Vue.prototype.$loading.hide();
    // }, 1000);
    next()
})

router.afterEach(() => { })
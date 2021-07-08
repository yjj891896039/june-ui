import Vue from 'vue'
import router from './router'

router.beforeEach((to, from, next) => {
    console.log('to:', to);
    Vue.prototype.$loading.show();
    setTimeout(() => {
        Vue.prototype.$loading.hide();
    }, 1000);
    next()
})

router.afterEach(() => { })
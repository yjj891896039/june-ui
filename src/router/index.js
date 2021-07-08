import Vue from 'vue'
import VueRouter from 'vue-router'
import BasicLayout from '@/layouts/BasicLayout.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'basic',
        redirect: '/about',
        component: BasicLayout,
        children: [
            {
                path: '/home', 
                name: 'Home',
                component: () => import('../pages/home/home.vue')
            },
            {
                path: '/about',
                name: 'About',
                component: () => import('../pages/about/about.vue')
            },
        ]
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
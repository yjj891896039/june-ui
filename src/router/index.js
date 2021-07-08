import Vue from 'vue'
import VueRouter from 'vue-router'
import BasicLayout from '@/layouts/BasicLayout/BasicLayout.vue'
import GuideLayout from '@/layouts/GuideLayout/GuideLayout.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        redirect: '/component',
    },
    {
        path: '/component',
        name: 'basic',
        redirect: '/component/about',
        component: BasicLayout,
        children: [
            {
                path: 'updateLog', 
                name: 'updateLog',
                component: () => import('../pages/updateLog/updateLog.vue')
            },
            {
                path: 'about',
                name: 'About',
                component: () => import('../pages/about/about.vue')
            },
            {
                path: 'quickStart',
                name: 'quickStart',
                component: () => import('../pages/quickStart/quickStart.vue')
            }
        ]
    },
    {
        path: '/guide',
        name: 'guide',
        redirect: '/guide/designIdea',
        component: GuideLayout,
        children: [
            {
                path: 'designIdea', 
                name: 'designIdea',
                component: () => import('../pages/designIdea/designIdea.vue')
            },
            {
                path: 'nav', 
                name: 'nav',
                component: () => import('../pages/nav/nav.vue')
            }
        ]
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
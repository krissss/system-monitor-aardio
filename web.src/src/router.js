// https://next.router.vuejs.org/zh/guide
import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
    { path: '/', component: () => import('./components/AppHome.vue') },
    { path: '/setting', component: () => import('./components/AppSetting.vue') },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router

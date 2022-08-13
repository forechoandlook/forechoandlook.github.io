import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('../views/Home.vue'),
        meta: { title: 'Home'}
    },
    {
        path: '/category/:cate',
        name: 'category',
        component: () => import('../views/Home.vue'),
        meta: { title: 'Category', params: 'cate'}
    },
    {
        path: '/search/:words',
        name: 'search',
        component: () => import('../views/Home.vue'),
        meta: { title: 'Search', params: 'words'}
    },
    {
        path: '/about',
        name: 'about',
        component: () => import('../views/About.vue'),
        meta: { title: 'About'}
    },
    {
        path: '/friend',
        name: 'friend',
        component: () => import('../views/About.vue'),
        meta: { title: 'About'}
    },
]     

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

// const router = new HashRouter();

router.beforeEach((to, from, next) => {
    let title = 'OmicsML'
    if (to.meta.params){
        title = `${to.meta.title}:${to.params[to.meta.params] || ''} - ${title}`
    }else {
        title = `${to.meta.title} - ${title}`
    }
    document.title = title
    if (to.path !== from.path) {
        store.dispatch('setLoading', true);
    }
    next();
})
router.afterEach((to, from) => {
    setTimeout(() => {
        store.dispatch('setLoading', false);
    }, 1500)
})
export default router

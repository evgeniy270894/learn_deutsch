import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import store from './store/store'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/books',
            name: 'books',
            component: () => import('@/views/Books.vue')
        },
        {
            path: '/books/:id',
            name: 'book',
            props: true,
            component: () => import('@/views/Book.vue')
        },
        {
            path: '/words',
            name: 'words',
            component: () => import('@/views/Words.vue')
        },
        {
            path: '/profile',
            name: 'profile',
            component: () => import('@/views/Profile.vue'),
            beforeEnter: AuthGuard
        },
        {
            path: '/signin',
            name: 'signin',
            component: () => import('@/views/Signin.vue')
        },
        {
            path: '/signup',
            name: 'signup',
            component: () => import('@/views/Signup.vue')
        },


    ]
})

function AuthGuard(from, to, next) {
    if(store.getters.isAuthenticated)
        next()
    else
        next('/signin')
}

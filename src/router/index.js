import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    component: () =>
        import ("../views/Home/index"),
    children: [{
        path: '/',
    }]
}, {
    path: '/test',
    name: "home",
    component: () =>
        import ("../views/Home/index.vue")
}]

const router = new VueRouter({
    base: process.env.BASE_URL,
    routes
})

export default router
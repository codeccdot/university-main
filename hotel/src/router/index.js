import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect:'/index'
  },

  {
    path: '/index',
    name: '主页',
    component: () => import(/* webpackChunkName: "about" */ '../components/index')
  }
]

const router = new VueRouter({
  routes
})

export default router

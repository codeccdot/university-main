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
    component: () => import(/* webpackChunkName: "about" */ '../components/index'),
    children:[
      {
        path: '/img',
        component: () => import('../components/item1-img')
      },
      {
        path: '/img2',
        component: () => import('../components/item1-img2')
      }
    ]

  }

]

const router = new VueRouter({
  routes
})

export default router

import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
// 路由的使用与配置
export default new Router({
  routes: [
    {
      name: 'home',
      path: '/',
      component: () => import('@/views/home')
    },
    {
      name: 'login',
      path: '/login',
      component: () => import('@/views/login')
    }
  ]
})

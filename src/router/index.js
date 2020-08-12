import Vue from 'vue'
import Router from 'vue-router'
import home from './home'
import user from './user'
import items from './items'
import order from './order'
import login from './login'
import { getLocalStorage } from '@/utils/localStorage'

Vue.use(Router)

const router = new Router({
  routes: [...home, ...user, ...items, ...order, ...login]
})

router.beforeEach((to, from, next) => {
  const { Authorization } = getLocalStorage('Authorization')
  if (!Authorization && to.meta.login) {
    next({ name: 'login', query: { redirect: to.name } })
    return
  }
  next()
})

export default router

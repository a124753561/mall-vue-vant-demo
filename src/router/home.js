import Tabbar from '@/components/Tabbar/'

export default [
  {
    path: '/',
    name: 'home',
    components: {
      default: () => import('@/views/home/index'),
      tabbar: Tabbar
    },
    meta: {
      keepAlive: true
    }
  },
  {
    path: '*',
    redirect: {
      name: 'home'
    }
  }
]

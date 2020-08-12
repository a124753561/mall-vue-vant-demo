import Tabbar from '@/components/Tabbar'

export default [{
  path: '/user',
  name: 'user',
  meta: {
    keepAlive: true,
    login: true
  },
  components: {
    default: () => import('@/views/user/index'),
    tabbar: Tabbar
  }
}]

import Tabbar from '@/components/Tabbar/'

export default [{
  path: '/items',
  name: 'items',
  components: {
    default: () => import('@/views/items/index'),
    tabbar: Tabbar
  },
  meta: {
    keepAlive: true
  }
}, {
  path: '/items/category',
  name: 'category',
  components: {
    default: () => import('@/views/items/category/index'),
    tabbar: Tabbar
  },
  props: route => route.query
}, {
  path: '/items/detail/:itemId',
  name: 'detail',
  props: true,
  component: () => import('@/views/items/detail/index')
}]

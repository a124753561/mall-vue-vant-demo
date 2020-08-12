import Tabbar from '@/components/Tabbar/'

export default [
  {
    path: '/order',
    name: 'cart',
    components: {
      default: () => import('@/views/order/cart/'),
      tabbar: Tabbar
    },
    meta: {
      keepAlive: true
    }
  }
]

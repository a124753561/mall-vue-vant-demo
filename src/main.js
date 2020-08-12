import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'vant/lib/index.css'
import 'vant/lib/icon/index.css'
import '@/assets/scss/iconfont/iconfont.css'
import settings from './setttins'
import Field from '@/components/Field/'
import FieldGroup from '@/components/FieldGroup/'
import { Button, Toast, Icon, Cell, CellGroup, Row, Col, Search, Sidebar, SidebarItem, Lazyload } from 'vant'
import filters from '@/filter'
require('./mock')

Vue.config.productionTip = false
Vue.prototype.settings = settings

Vue.component(Field.name, Field)
Vue.component(FieldGroup.name, FieldGroup)
Vue.use(filters)

Vue.use(Button)
Vue.use(Toast)
Vue.use(Icon)
Vue.use(Cell)
Vue.use(CellGroup)
Vue.use(Row)
Vue.use(Col)
Vue.use(Search)
Vue.use(Sidebar)
Vue.use(SidebarItem)
Vue.use(Lazyload, {
  preLoad: 1.3,
  error: require('@/assets/images/goods_default.png'),
  loading: require('@/assets/images/goods_default.png'),
  attempt: 1,
  listenEvents: ['scroll'],
  lazyComponent: true
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

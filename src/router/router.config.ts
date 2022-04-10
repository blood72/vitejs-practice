import { RouteRecordRaw } from 'vue-router'
import Home from '@/views/Home.vue'
import Pinia from '@/views/Pinia.vue'
import NotFound from '@/views/NotFound.vue'

// causes https://github.com/fengyuanchen/vue-feather/issues/8
const Test = { template: '<div></div>' }

const routerMap: RouteRecordRaw[] = [
  <RouteRecordRaw>{ path: '/', name: 'Home', component: Home },
  <RouteRecordRaw>{ path: '/pinia', name: 'Pinia', component: Pinia },
  <RouteRecordRaw>{ path: '/test', name: 'Test', component: Test },
  <RouteRecordRaw>{ path: '/:path(.*)', component: NotFound, meta: { error: true } },
]

export default routerMap

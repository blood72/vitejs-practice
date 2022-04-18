import { RouteRecordRaw } from 'vue-router'
import Home from '@/views/Home.vue'
import Pinia from '@/views/Pinia.vue'
import TodoList from '@/views/TodoList.vue'
import NotFound from '@/views/NotFound.vue'

// causes https://github.com/fengyuanchen/vue-feather/issues/8
export const Test = { template: '<div></div>' }

const routerMap: Array<RouteRecordRaw> = [
  { path: '/', name: 'Home', component: Home },
  { path: '/pinia', name: 'Pinia', component: Pinia },
  { path: '/todo', name: 'Todo', component: TodoList },
  { path: '/test', name: 'Test', component: Test },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */'@/views/About.vue')
  },
  { path: '/:path(.*)', component: NotFound, meta: { error: true } },
]

export default routerMap

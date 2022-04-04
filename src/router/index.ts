import { createRouter, createWebHistory, RouterOptions } from 'vue-router'
import Home from '@/views/Home.vue'

// causes https://github.com/fengyuanchen/vue-feather/issues/8
const Test = { template: '<div></div>' }

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/test', name: 'Test', component: Test },
]

export default createRouter({
  history: createWebHistory(),
  routes,
} as RouterOptions)

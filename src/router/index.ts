import { createRouter, createWebHistory, RouterOptions } from 'vue-router'
import routes from './router.config'

export default createRouter(<RouterOptions>{
  history: createWebHistory(),
  routes,
})

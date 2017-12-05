import Vue from 'vue'
import Router from 'vue-router'

import Home from '../pages/home.vue'
import About from '../pages/about.vue'

Vue.use(Router)

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/about',
    component: About
  }
]

export const router = new Router ({
  routes,
  mode: 'history'
})

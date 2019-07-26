import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About.vue')
    },
    {
      path: '/wedding',
      name: 'wedding',
      component: () => import('./views/Wedding.vue')
    },
    {
      path: '/gallery',
      name: 'gallery',
      component: () => import('./views/Gallery.vue')
    },
    {
      path: '/plans',
      name: 'plans',
      component: () => import('./views/Plans.vue')
    },
    {
      path: '/calculator',
      name: 'calculator',
      component: () => import('./views/Calculator.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('./views/Contact.vue')
    }
  ],
  scrollBehavior() {
    return {
      x: 0,
      y: 0
    }
  }
})
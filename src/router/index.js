import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }, {
      path: '/login',
      name: 'Login',
      component: Home
    }, {
      path: '/register',
      name: 'Register',
      component: Home
    }, {
      path: '*',
      redirect: '/'
    }
  ]
})

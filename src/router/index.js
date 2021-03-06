import Vue from 'vue'
import Router from 'vue-router'

import GuestMiddleware from './middleware/GuestMiddleware'

import Home from '@/components/Home'
import Login from '@/components/auth/Login'
import Register from '@/components/auth/Register'

import Account from './account'
import Game from './game'

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
      component: Login,
      beforeEnter: GuestMiddleware
    }, {
      path: '/register',
      name: 'Register',
      component: Register,
      beforeEnter: GuestMiddleware
    },
    Account,
    Game,
    {
      path: '*',
      redirect: '/'
    }
  ]
})

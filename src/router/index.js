import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Surveys from '@/components/Surveys'
import Reports from '@/components/Reports'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: '',
      component: Home
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/surveys',
      name: 'Surveys',
      component: Surveys
    },
    {
      path: '/reports',
      name: 'Reports',
      component: Reports
    }
  ]
})

import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import First from '@/components/First'
import Second from '@/components/Second'
import Third from '@/components/Third'
import Fourth from '@/components/Fourth'
import Vuetify from 'vuetify'

Vue.use(Router)
Vue.use(Vuetify)

export default new Router({
  mode: 'history',
  base: '/',
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/home',
      name: 'First',
      component: First
    },
    {
      path: '/problem',
      name: 'Second',
      component: Second
    },
    {
      path: '/solution',
      name: 'Third',
      component: Third
    },
    {
      path: '/team',
      name: 'Fourth',
      component: Fourth
    }
  ]
})

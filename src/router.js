import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home'
import Editor from './views/Editor'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/editor',
      name: 'Editor',
      component: Editor
    }
  ]
})

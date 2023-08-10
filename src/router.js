import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import favourite from './views/favourites.vue'

Vue.use(Router)

const router =  new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path:'/favourite',
      name:"favourite",
      component:favourite
    }
  ]
})
export default router

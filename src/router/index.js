import Vue from 'vue'
import VueRouter from 'vue-router'
import Answer from '../views/Answer.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Answer',
    component: Answer
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
  {
    path: '/father',
    name: 'Father',
    component: () => import(/* webpackChunkName: "about" */ '../views/Father.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router

import Vue from 'vue'
import VueRouter from 'vue-router'
import Step1 from '../views/Step1.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Step1',
    component: Step1
  },
  {
    path: '/customer-info',
    name: 'Step2',
    component: () => import('../views/Step2.vue')
  },
  {
    path: '/summary',
    name: 'Step3',
    component: () => import('../views/Step3.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

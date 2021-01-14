import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import LoginTest from '../views/LoginTest.vue'
// import TravelTest from '../views/TeavelTest.vue'


Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/test',
    name: 'Test',
    component: () => import('../views/Test.vue'),
  },
  {
    path:'/LoginTest',
    name: 'LoginTest',
    component:LoginTest,
  },
  {
    path:'/TravelTest',
    name:'TravelTest',
    component: () => import('../views/TravelTest.vue'),
    // component:TravelTest,
  },
  {
    path:'/FormTest',
    name:'FormTest',
    component: () => import('../views/FormTest.vue'),
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

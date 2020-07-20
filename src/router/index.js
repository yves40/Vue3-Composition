import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../views/Home.vue'
import calculatorRef from "../views/calculatorRef"
import calculatorReactive from "../views/calculatorReactive"
import calculatorComputed from "../views/calculatorComputed"

const routes = [
{
  path: '/', name: 'Home',component: Home
},
{
  path: '/calcref', name: 'calcref',component: calculatorRef
},
{
  path: '/calcreactive', name: 'calcreactive',component: calculatorReactive
},
{
  path: '/calccomputed', name: 'calcrcomputed',component: calculatorComputed
},
{
  path: '/about',name: 'About', component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
}
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

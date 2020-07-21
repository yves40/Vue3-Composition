import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../views/Home.vue'
import calculatorRef from "../views/calculatorRef"
import calculatorReactive from "../views/calculatorReactive"
import calculatorComputed from "../views/calculatorComputed"
import calculatorToRefs from "../views/calculatorToRefs"
import about from "../views/About"

const routes = [
  { path: '/', name: 'Home',component: Home },
  { path: '/calcref', name: 'calcref',           component: calculatorRef, props: true},
  { path: '/calcreactive', name: 'calcreactive', component: calculatorReactive, props: true},
  { path: '/calccomputed', name: 'calccomputed', component: calculatorComputed, props: true},
  { path: '/calctorefs', name: 'calctorefs', component: calculatorToRefs, props: true},
  { path: '/about',name: 'about', component: about}
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

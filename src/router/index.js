import Vue from 'vue'
import VueRouter from 'vue-router'
import CandyPage from '../views/CandyPage.vue'
import AddCandy from '../components/AddCandy.vue'
import EditCandy from '../components/EditCandy.vue'
import DeleteCandy from '../components/DeleteCandy.vue'
import UserLogin from '../components/UserLogin.vue'
import UserSignup from '../components/UserSignup.vue'
import UserLogout from '../components/UserLogout.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: CandyPage
  },
  {
    path: '/add',
    name: 'addCandy',
    component : AddCandy
  },
  {
    path: '/edit',
    name: 'editCandy',
    component : EditCandy
  },
  {
    path: '/delete',
    name: 'deleteCandy',
    component : DeleteCandy
  },
  {
    path: '/login',
    name: 'userlogin',
    component : UserLogin
  },
  {
    path: '/signup',
    name: 'signUp',
    component : UserSignup
  },
  {
    path: '/logout',
    name: 'logout',
    component : UserLogout
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router

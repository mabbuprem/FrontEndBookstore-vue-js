import Vue from 'vue'
import VueRouter from 'vue-router'
//import HomeView from '../views/HomeView.vue'
import dashboardBarView from '../views/DashboardBarView.vue'
import LoginView from '../views/LoginView'
import SignupOrLogin from '../views/SignupOrLogin.vue'
import ForgetPasswordView from '../views/ForgetPasswordView'
import resetPasswordView from '../views/ResetPasswordView'
import GetAllBooks from '../components/GetAllBooks.vue'
import BookDetail from '../views/DetailsView'
import AddressUI from '../views/AddressView'
import Mycart from '../views/CartView'
import ConfirmOrder from '../views/OrderConformView'

import SearchResult from '../views/SearchView'
//import GetAllBooksView from '../views/GetAllBooksView.vue'
Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   name: 'home',
  //   component: HomeView
  // },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // },
  {
    path: '/dashboard',
    name: 'dashboardUI',
    component:dashboardBarView, 
    children: [{ path: '/', name: 'GetAllBooks', component: GetAllBooks }],
    },
  {
    path: '/login',
    name: 'LoginUI',
    component:LoginView 
  },
    {
    path: '/admin',
    name:'RegisterUI',
    component:SignupOrLogin 
  },
  {
    path: '/forget',
    name: 'forgetUI',
    component: ForgetPasswordView 
  },

  {
    path: '/resetPassword/:token',
    name: 'resetPasswordUI',
    component: resetPasswordView,
    
  },

  {
    path: '/bookDetail',
    name: 'BookDetail',
    component: BookDetail
  },

  {
    path: '/address',
    name: 'AddressUI',
    component: AddressUI
  },

  {
    path: '/myCart',
    name: Mycart,
    component: Mycart
  },

  {
    path: '/confirmOrder',
    name: ConfirmOrder,
    component: ConfirmOrder
  },

  {
    path: '/searchResult',
			name: 'SearchResult',
			component: SearchResult
  },
  

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

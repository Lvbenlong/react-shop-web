import Home from './pages/Home'
import Wishlist from './pages/Wishlist'
import Login from './pages/Login'
import Product from './pages/Product'
import ProductList from './pages/ProductList'
import DealDetail from './pages/DealDetail'
import Ask from './pages/Ask'
import Feedback from './pages/Feedback'
import Contact from './pages/Contact'
import About from './pages/About'
import User from './pages/User/Index'
import Order from './pages/User/Order'
import Coupons from './pages/User/Coupons'
import Address from './pages/User/Address'

const routes = [
  {
    path: '/',
    component: Home,
    exact: true
  },
  {
    path: '/wishlist',
    component: Wishlist,
  },
  {
    path: '/login',
    component: Login,
  },
  {
    path: '/products',
    component: ProductList,
  },
  {
    path: '/product/:slug',
    component: Product,
  },
  {
    path: '/deals/:slug',
    component: DealDetail,
  },
  {
    path: '/ask',
    component: Ask,
  },
  {
    path: '/feedback',
    component: Feedback,
  },
  {
    path: '/contact',
    component: Contact,
  },
  {
    path: '/about',
    component: About,
  },
  {
    path: '/user',
    component: User,
    routes: [
      {
        path: '/user/',
        component: Order,
      },
      {
        path: '/user/coupons',
        component: Coupons,
      },
      {
        path: '/user/address',
        component: Address,
      },
    ]
  },
]

export default routes
import Home from './pages/Home'
import Wishlist from './pages/Wishlist'
import Login from './pages/Login'
import Product from './pages/Product'
import ProductDetails from './pages/ProductDetails'
import ProductAttributes from './pages/ProductAttributes'
import ProductReviews from './pages/ProductReviews'
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
import OrderDetail from './pages/Order'

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
    routes: [
      {
        path: '/product/:slug/',
        component: ProductDetails,
      },
      {
        path: '/product/:slug/attributes',
        component: ProductAttributes,
      },
      {
        path: '/product/:slug/reviews',
        component: ProductReviews,
      },
    ]
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
    path: '/user/:tool',
    component: User,
    routes: [
      {
        path: '/user/order',
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
  {
    path: '/order/:number',
    component: OrderDetail,
  },
]

export default routes
import Vue from 'vue';
import VueRouter from 'vue-router';
import AddProduct from '@/views/AddProduct.vue';
import Home from '../views/Home.vue';
import ShoppingCart from '../views/ShoppingCart.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/shopping-cart',
    name: 'Shopping cart',
    component: ShoppingCart,
  },
  {
    path: '/add-product',
    name: 'Add product',
    component: AddProduct,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;

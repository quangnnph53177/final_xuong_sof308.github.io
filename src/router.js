import { createRouter, createWebHistory } from 'vue-router'
import ProductList from './components/ProductList.vue'
import CategoryList from './components/CategoryList.vue'
import ProductDetail from './components/ProductDetail.vue'
import Cart from './components/Cart.vue';


const routes = [
  {
    path: '/',
    name: 'Default',
    component: ProductList,
  },
  {
    path: '/products',
    name: 'ProductList',
    component: ProductList,
  },
  {
    path: '/categories',
    name: 'CategoryList',
    component: CategoryList,
  },
  {
    path: '/product/1',
    name: 'ProductDetail',
    component: ProductDetail,
  },
  {
    path: '/', component: ProductList ,
    path: '/cart', component: Cart,
  }
  

]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})

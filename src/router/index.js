import { createRouter, createWebHistory } from "vue-router";
//import Home from "@/components/HelloWorld";
import Home from "@/components/homepage/home";
import product from "@/components/homepage/product";
import Cart from "@/components/homepage/Cart";
import Checkout from "@/components/homepage/Checkout";
import Success from "@/components/homepage/Success.vue";

import Dashboard from "@/components/productPage/Dashboard";
import Products from "@/components/productPage/products";
import routerTest from "@/components/pages/routerTest";
import typeA from "@/components/pages/typeA";
import typeB from "@/components/pages/typeB";
import typeC from "@/components/pages/typeC";
import index from "@/components/datapage";
import form from "@/components/form/form.vue";
import Category from "@/components/homepage/Category.vue";


const routes = [
  {
    paht: "*",
    redirect: "home",
  },
  {
    name: "首頁",
    path: "/home",
    component: Home,
    meta: { requiresAuth: false },
    children: [],
  },
   {
    name: "form",
    path: "/form",
    component: form,
    meta: { requiresAuth: false },
    children: [],
  },
   {
    path: '/:category_slug/:product_slug',
    name: 'product',
    component: product
  },
    {
    path: '/cart',
    name: 'Cart',
    component: Cart
  },
   {
    path: '/cart/success',
    name: 'Success',
    component: Success
  },
      {
    path: '/cart/checkout',
    name: 'Checkout',
    component: Checkout
  },
    {
    path: '/:category_slug',
    name: 'Category',
    component: Category
  },
  {
    name: "Dashboard",
    path: "/Dashboard",
    component: Dashboard,
    children: [
      {
        name: "products",
        path: "products",
        component: Products,
      },
    ],
  },
  {
    name: "router-test",
    path: "/router_test",
    component: routerTest,

    children: [
      {
        name: "typeA",
        path: "typeA",
        component: typeA,
      },
      {
        name: "typeB",
        path: "typeB",
        component: typeB,
      },
    ],
  },
  {
    name: "datapage",
    path: "/datapage",
    component: index,
    meta: { requiresAuth: false },
    children: [],
  },
];

const router = createRouter({
  linkActiveClass: "active",
  history: createWebHistory(),
  routes,
});

export default router;

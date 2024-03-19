import { createRouter, createWebHistory } from "vue-router";
//import Home from "@/components/HelloWorld";
import Home from "@/components/homepage/home";

import Dashboard from "@/components/productPage/Dashboard";
import Products from "@/components/productPage/products";
import routerTest from "@/components/pages/routerTest";
import typeA from "@/components/pages/typeA";
import typeB from "@/components/pages/typeB";
import typeC from "@/components/pages/typeC";
import index from "@/components/datapage";
import form from "@/components/form/form.vue";
import emit from "@/components/emit/emit.vue";


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
    name: "emit",
    path: "/emit",
    component: emit,
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

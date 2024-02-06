import { createRouter, createWebHistory } from "vue-router";
//import Home from "@/components/HelloWorld";
import Home from "@/components/pages/home";

import Dashboard from "@/components/DashBoard";
import Products from "@/components/pages/products";
import routerTest from "@/components/pages/routerTest";
import typeA from "@/components/pages/typeA";
import typeB from "@/components/pages/typeB";

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
];

const router = createRouter({
  linkActiveClass: "active",
  history: createWebHistory(),
  routes,
});

export default router;

//像個路由器

import { createRouter, createWebHistory } from "vue-router";
//import Home from "@/components/HelloWorld";
import Home from "@/components/pages/home";

import Dashboard from "@/components/DashBoard";
import Products from "@/components/pages/products";

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
    name: "Dsahboard",
    path: "/admin",
    component: Dashboard,
    children: [
      {
        name: "products",
        path: "products",
        component: Products,
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

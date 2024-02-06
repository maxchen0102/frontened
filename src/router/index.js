//像個路由器

import { createRouter, createWebHistory } from "vue-router";
//import Home from "@/components/HelloWorld";
import Home from "@/components/pages/home";

import Jobs from "@/components/jobs/jobs";
import Login from "@/components/pages/login";
import Dashboard from "@/components/DashBoard";
import Products from "@/components/pages/products";

const routes = [
  {
    paht: "*",
    redirect: "index",
  },
  {
    name: "首頁",
    path: "/index",
    component: Home,
    meta: { requiresAuth: false },
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
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    name: "jobs",
    path: "/jobs",
    component: Jobs,
  },
];

const router = createRouter({
  linkActiveClass: "active",
  history: createWebHistory(),
  routes,
});

export default router;

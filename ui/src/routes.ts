import { createRouter, createWebHistory } from "vue-router";

const Hero = () => import("./views/Hero.vue");
const Login = () => import("./views/Login.vue");
const Settings = () => import("./views/Settings.vue");

export const routes = [
  {
    path: "/game",
    component: Hero
  },
  {
    path: "/",
    component: Login
  },
  {
    path: "/settings",
    component: Settings
  }
];

export const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
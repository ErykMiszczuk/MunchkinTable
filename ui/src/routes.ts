import { createRouter, createWebHistory } from "vue-router";

const Hero = () => import("./views/Hero.vue");
const Login = () => import("./views/Login.vue");
const Settings = () => import("./views/Settings.vue");

export const ROUTES = {
  GAME: {
    path: "/game",
    component: Hero
  },
  LOGIN: {
    path: "/",
    component: Login
  },
  SETTINGS: {
    path: "/settings",
    component: Settings
  }
};

const routes = Object.values(ROUTES);

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
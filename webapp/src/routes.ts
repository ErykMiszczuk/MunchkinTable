import { createRouter, createWebHistory } from "vue-router";
import { useStore } from "./stores/main";

const Hero = () => import("./views/Hero.vue");
const Login = () => import("./views/Login.vue");
const Settings = () => import("./views/Settings.vue");
const MainMenu = () => import("./views/MainMenu.vue");
const CreateMatch = () => import("./views/CreateMatch.vue");
const JoinMatch = () => import("./views/JoinMatch.vue");

export const ROUTES = {
  MAINMENU: {
    path: "/",
    name: "Main Menu",
    component: MainMenu
  },
  CREATEMATCH: {
    path: "/create-match",
    name: "Craete Match",
    component: CreateMatch
  },
  JOINMATCH: {
    path: "/join-match",
    name: "Join Match",
    component: JoinMatch,
  },
  GAME: {
    path: "/game",
    name: "Hero",
    component: Hero
  },
  LOGIN: {
    path: "/login",
    name: "Login",
    component: Login
  },
  SETTINGS: {
    path: "/settings",
    name: "Settings",
    component: Settings
  }
};

const routes = Object.values(ROUTES);

const router = createRouter({
  history: createWebHistory(),
  routes
});

// router.beforeEach((to, from) => {
//   const store = useStore();

//   if (store.name === "" && to.name !== ROUTES.LOGIN.name) {
//     return { name: ROUTES.LOGIN.name };
//   }
// });

export default router;
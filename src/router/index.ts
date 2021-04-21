import { createRouter, createWebHistory, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const history =
    process.env.NODE_ENV === 'production' && process.env.IS_ELECTRON
        ? createWebHashHistory(process.env.BASE_URL)
        : createWebHistory(process.env.BASE_URL)

const router = createRouter({
  history,
  routes,
});

export default router;

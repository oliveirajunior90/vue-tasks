import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "login",
      component: () =>
        import(/* webpackChunkName: "about" */ "@/pages/Login.vue"),
    },
    {
      path: "/dashboard",
      component: () => import("@/pages/Dashboard.vue"),
      children: [
        {
          path: "/",
          component: () => import("@/pages/Tasks.vue"),
        },
      ],
    },
  ],
});

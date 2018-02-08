import Vue from "vue";
import Router from "vue-router";
import Home from "@/pages";
import Reset from "@/pages/reset";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
      children: [
        {
          path: "/reset",
          name: "Reset",
          component: Reset
        }
      ]
    }
  ]
});

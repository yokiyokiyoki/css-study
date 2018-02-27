import Vue from "vue";
import Router from "vue-router";
import Home from "@/pages";
import Reset from "@/pages/reset";
import Center from "@/pages/center";
import Clear from "@/pages/clear";
import Measure from "@/pages/measure";

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
        },
        {
          path: "/center",
          name: "Center",
          component: Center
        },
        {
          path: "/clear",
          name: "Clear",
          component: Clear
        },
        {
          path: "/measure",
          name: "Measure",
          component: Measure
        },
        {}
      ]
    }
  ]
});

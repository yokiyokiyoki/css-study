import Vue from "vue";
import Router from "vue-router";
import Home from "@/pages";
import Reset from "@/pages/reset";
import Center from "@/pages/center";
import Clear from "@/pages/clear";
import Measure from "@/pages/measure";
import ImportFont from "@/pages/importFont";
import LessFun from "@/pages/lessFun";
import FourPalace from "@/pages/fourPalace";

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
        {
          path: "importFont",
          name: "ImportFont",
          component: ImportFont
        },
        {
          path: "lessFun",
          name: "LessFun",
          component: LessFun
        },
        {
          path: "fourPalace",
          name: "FourPalace",
          component: FourPalace
        }
      ]
    }
  ]
});

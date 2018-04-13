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
import FixWidth from "@/pages/fixWidth";
import Average from "@/pages/average";
import FullScreen from "@/pages/fullScreen";
import Flex from "@/pages/flex";
import HolyGrail from "@/pages/holygrail";

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
        },
        {
          path: "fixWidth",
          name: "FixWidth",
          component: FixWidth
        },
        {
          path: "average",
          name: "Average",
          component: Average
        },
        {
          path: "fullScreen",
          name: "FullScreen",
          component: FullScreen
        },
        {
          path: "flex",
          name: "Flex",
          component: Flex
        },
        {
          path: "holyGrail",
          name: "HolyGrail",
          component: HolyGrail
        }
      ]
    }
  ]
});

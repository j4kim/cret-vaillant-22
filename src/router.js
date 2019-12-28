import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Path from "./views/Path.vue";
import Panorama from "./views/Panorama.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/street-lounge",
      name: "street-lounge",
      component: Path
    },
    {
      path: "/lounge",
      name: "lounge",
      component: Panorama
    }
  ]
});

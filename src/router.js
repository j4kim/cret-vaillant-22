import Vue from "vue";
import Router from "vue-router";
import Street from "./views/Street.vue";
import Path from "./views/Path.vue";
import Panorama from "./views/Panorama.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    { path: "/", redirect: "/street" },
    {
      path: "/street",
      name: "street",
      component: Street
    },
    {
      path: "/street-lounge",
      name: "street-lounge",
      component: Path,
      meta: {
        start: 1341,
        stop: 1398,
        destination: "lounge"
      }
    },
    {
      path: "/lounge",
      name: "lounge",
      component: Panorama,
      meta: {
        ways: {
          "0": "kitchen",
          "3000": "bedroom"
        }
      }
    },
    {
      path: "/bedroom",
      name: "bedroom"
    },
    {
      path: "/kitchen",
      name: "kitchen"
    },
    {
      path: "/bathroom",
      name: "bathroom"
    },
    {
      path: "/garden",
      name: "garden"
    }
  ]
});

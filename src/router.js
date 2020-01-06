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
    {
      path: "/",
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
      },
      beforeEnter(to, from, next) {
        if (to.meta.images) {
          next();
        } else {
          console.warn("Path images not yet preloaded");
          next('/');
        }
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
      },
      beforeEnter(to, from, next) {
        if (to.meta.image) {
          next();
        } else {
          console.warn("Panorma image not yet preloaded");
          next('/');
        }
      }
    }
  ]
});

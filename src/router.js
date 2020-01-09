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
        ways: [
          {
            position: 600,
            destination: "bedroom",
            label: "Aller dans la chambre"
          },
          {
            position: 1550,
            destination: "kitchen",
            label: "Aller à la cuisine"
          }
        ]
      }
    },
    {
      path: "/lounge-bedroom",
      name: "lounge-bedroom",
      component: Path,
      meta: {
        start: 1478,
        stop: 1501,
        destination: "bedroom",
        computeFilename(i) {
          return "IMG_" + i + ".JPG";
        }
      }
    },
    {
      path: "/lounge-kitchen",
      name: "lounge-kitchen",
      component: Path,
      meta: {
        start: 1614,
        stop: 1626,
        destination: "kitchen",
        computeFilename(i) {
          return "IMG_" + i + ".JPG";
        }
      }
    },
    {
      path: "/bedroom",
      name: "bedroom",
      component: Panorama,
      meta: {
        ways: [
          {
            position: 700,
            destination: "kitchen",
            label: "Aller à la cuisine"
          }
        ]
      }
    },
    {
      path: "/bedroom-kitchen",
      name: "bedroom-kitchen",
      component: Path,
      meta: {
        start: 1542,
        stop: 1561,
        destination: "kitchen"
      }
    },
    {
      path: "/kitchen",
      name: "kitchen",
      component: Panorama
    },
    {
      path: "/bathroom",
      name: "bathroom",
      component: Panorama
    },
    {
      path: "/garden",
      name: "garden",
      component: Panorama
    }
  ]
});

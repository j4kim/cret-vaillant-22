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
      label: "Rue",
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
      label: "Séjour",
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
      name: "bedroom",
      label: "Chambre à coucher",
    },
    {
      path: "/kitchen",
      name: "kitchen",
      label: "Cuisine",
    },
    {
      path: "/bathroom",
      name: "bathroom",
      label: "Salle de bain",
    },
    {
      path: "/garden",
      name: "garden",
      label: "Jardin",
    }
  ]
});

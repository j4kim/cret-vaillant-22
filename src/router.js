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
      component: Path,
      meta: {
        images: [
          "IMG_1341.jpg",
          "IMG_1342.jpg",
          "IMG_1343.jpg",
          "IMG_1344.jpg",
          "IMG_1345.jpg",
          "IMG_1346.jpg",
          "IMG_1347.jpg",
          "IMG_1348.jpg",
          "IMG_1349.jpg",
          "IMG_1350.jpg",
          "IMG_1352.jpg",
          "IMG_1353.jpg",
          "IMG_1354.jpg",
          "IMG_1355.jpg",
          "IMG_1356.jpg",
          "IMG_1357.jpg",
          "IMG_1358.jpg",
          "IMG_1360.jpg",
          "IMG_1361.jpg",
          "IMG_1362.jpg",
          "IMG_1363.jpg",
          "IMG_1367.jpg",
          "IMG_1369.jpg",
          "IMG_1370.jpg",
          "IMG_1371.jpg",
          "IMG_1372.jpg",
          "IMG_1373.jpg",
          "IMG_1374.jpg",
          "IMG_1375.jpg",
          "IMG_1377.jpg",
          "IMG_1378.jpg",
          "IMG_1379.jpg",
          "IMG_1380.jpg",
          "IMG_1381.jpg",
          "IMG_1382.jpg",
          "IMG_1383.jpg",
          "IMG_1389.jpg",
          "IMG_1390.jpg",
          "IMG_1391.jpg",
          "IMG_1392.jpg",
          "IMG_1393.jpg",
          "IMG_1394.jpg",
          "IMG_1395.jpg",
          "IMG_1396.jpg",
          "IMG_1397.jpg",
          "IMG_1398.jpg"
        ],
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
    }
  ]
});

import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import data from "./schema";
import Photo from "./components/Photo";

Vue.component("photo", Photo);

new Vue({
  router,
  data,
  render: h => h(App)
}).$mount("#app");

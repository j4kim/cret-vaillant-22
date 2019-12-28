import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Photo from "./components/Photo";

Vue.component("photo", Photo);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");

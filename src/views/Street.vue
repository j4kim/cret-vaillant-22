<template>
  <div>
    <photo src="images/street-lounge/IMG_1341.jpg" />
    <arrow-nav :ways="[{
      position: 0,
      path: 'street-lounge',
      preloader,
      label: 'Commencer la visite',
      ready
    }]" />
  </div>
</template>

<script>
import Preloader from "@/Preloader.js";
import ArrowNav from "@/components/ArrowNav.vue"

export default {
  components: { ArrowNav },
  data() {
    return {
      preloader: {},
      ready: false
    };
  },
  created() {
    this.preloader = new Preloader(this.$router, "street-lounge");
    this.preloader.preload().then(() => {
      this.ready = true;
    });
  }
};
</script>

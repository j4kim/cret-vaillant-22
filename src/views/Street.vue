<template>
  <div>
    <photo src="images/street-lounge/IMG_1341.jpg" />
    <arrow-nav :ways="[{
      position: 0,
      path: 'street-lounge',
      label: 'Commencer la visite',
      preloader
    }]" />
  </div>
</template>

<script>
import Preloader from "@/Preloader.js";
import ArrowNav from "@/components/ArrowNav.vue";

export default {
  components: { ArrowNav },
  data() {
    return {
      preloader: {}
    };
  },
  created() {
    this.preloader = new Preloader(this.$router, "street-lounge");
  }
};
</script>

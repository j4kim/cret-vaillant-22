<template>
  <div @click="$router.push('street-lounge')">
    <photo src="images/street-lounge/IMG_1341.jpg" />
    {{ preloader.progress }}%
  </div>
</template>

<script>
import Preloader from "@/Preloader.js";

export default {
  data() {
    return {
      preloader: {}
    };
  },
  created() {
    let route = this.$router.matcher.match("street-lounge")
    this.preloader = new Preloader(route);
  }
};
</script>

<template>
  <div @click="$router.push('street-lounge')">
    <photo src="images/street-lounge/IMG_1341.jpg" />
    <span v-if="ready">Ready</span>
    <span v-else>{{ preloader.progress }}%</span>
  </div>
</template>

<script>
import Preloader from "@/Preloader.js";

export default {
  data() {
    return {
      preloader: {},
      ready: false
    };
  },
  created() {
    let route = this.$router.matcher.match("street-lounge")
    this.preloader = new Preloader(route);
    this.preloader.preload().then(() => {
      this.ready = true
    })
  }
};
</script>

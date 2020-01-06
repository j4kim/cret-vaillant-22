<template>
  <div
    :style="{
      backgroundImage: 'url(' + $route.meta.image.src + ')',
      height: '500px',
      backgroundSize: 'auto 100%',
      backgroundPosition: 'calc(50% - ' + x + 'px) center'
    }"
    @click="x += 100"
  />
</template>

<script>
import { preloadPanorama } from "@/Preloader.js";

export default {
  data() {
    return { x: 0 };
  },
  beforeRouteEnter(to, from, next) {
    if (to.meta.image) {
      next();
    } else {
      preloadPanorama(to).then(() => next());
    }
  }
};
</script>

<template>
  <div>
    <div
      :style="{
        backgroundImage: 'url(' + $route.meta.image.src + ')',
        height: '100%',
        backgroundSize: 'auto 100%',
        backgroundPosition: 'calc(50% - ' + x + 'px) center',
        userSelect: 'none'
      }"
      @click="x += 100"
    />
    <arrow-nav :ways="$route.meta.ways" :offset="-x" :scale="scale" />
  </div>
</template>

<script>
import Preloader, { preloadPanorama } from "@/Preloader.js";
import ArrowNav from "@/components/ArrowNav.vue";

export default {
  components: { ArrowNav },
  data() {
    return { x: 0, scale: 1 };
  },
  beforeRouteEnter(to, from, next) {
    if (to.meta.image) {
      next();
    } else {
      preloadPanorama(to).then(() => next());
    }
    to.meta.ways.forEach(way => {
      var path = to.name + "-" + way.destination;
      var preloader = new Preloader(path);
      Object.assign(way, {path, preloader });
    });
  },
  beforeRouteLeave (to, from, next) {
    this.x = 0;
    next();
  },
  mounted() {
    this.computeScale();
    window.onresize = this.computeScale;
  },
  methods: {
    computeScale() {
      this.scale = this.$el.clientHeight / this.$route.meta.image.naturalHeight;
    }
  }
};
</script>

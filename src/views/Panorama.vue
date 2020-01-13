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
      @click="slice += 1"
    />
    <arrow-nav :ways="ways" :offset="-x" :scale="scale" />
  </div>
</template>

<script>
import Preloader, { preloadPanorama } from "@/Preloader.js";
import ArrowNav from "@/components/ArrowNav.vue";

export default {
  components: { ArrowNav },
  data() {
    return { ways: [], scale: 1, slice: 0, slices: 12 };
  },
  beforeRouteEnter(to, from, next) {
    if (to.meta.image) {
      next();
    } else {
      preloadPanorama(to).then(() => next());
    }
  },
  created() {
    // init ways on current route
    this.initWays(this.$route);
  },
  beforeRouteLeave(to, from, next) {
    this.slice = 0;
    // init ways on next route
    // in case of same component navigation
    // we can't use beforeRouteEnter bc it has no access to this
    this.initWays(to);
    next();
  },
  mounted() {
    this.computeScale();
    window.onresize = this.computeScale;
  },
  computed: {
    sliceWidth() {
      return this.$route.meta.image.naturalWidth * this.scale / this.slices
    },
    x() {
      return (this.slice % this.slices) * this.sliceWidth;
    }
  },
  methods: {
    computeScale() {
      this.scale = this.$el.clientHeight / this.$route.meta.image.naturalHeight;
    },
    initWays(route) {
      this.ways = [];
      if (route.meta.ways) {
        route.meta.ways.forEach(way => {
          var path = route.name + "-" + way.destination;
          var preloader = new Preloader(this.$router, path);
          Object.assign(way, { path, preloader });
          this.ways.push(way);
        });
      }
    }
  }
};
</script>

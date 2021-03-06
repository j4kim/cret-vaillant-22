<template>
  <div>
    <div
      :style="{
        backgroundImage: 'url(' + $route.meta.image.src + ')',
        height: '100%',
        backgroundSize: 'auto 100%',
        backgroundPosition: 'calc(50% - ' + x + 'px) center'
      }"
    />
    <arrow-nav :ways="ways" :offset="-x" :scale="scale" />
    <side-arrow :left="true" :scale="scale" @click="slice -= 1" />
    <side-arrow :left="false" :scale="scale" @click="slice += 1" />
  </div>
</template>

<script>
import Preloader, { preloadPanorama } from "@/Preloader.js";
import ArrowNav from "@/components/ArrowNav.vue";
import SideArrow from "@/components/SideArrow.vue";

function mod(a, b) {
  return ((a % b) + b) % b;
}

export default {
  components: { ArrowNav, SideArrow },
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
    onkeydown = e => {
      if (e.keyCode === 38 && this.way) {
        this.$router.push(this.way.path);
      } else {
        this.slice += { 37: -1, 39: 1 }[e.keyCode] || 0;
      }
      return false;
    };
  },
  computed: {
    way() {
      this.ways.forEach(way => {
        way.diff = Math.abs(way.position * this.scale - this.x);
      });
      return this.ways.find(way => way.diff < 200);
    },
    sliceWidth() {
      return (this.$route.meta.image.naturalWidth * this.scale) / this.slices;
    },
    realSlice() {
      return mod(this.slice, this.slices);
    },
    x() {
      return this.realSlice * this.sliceWidth;
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

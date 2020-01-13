<template>
  <div>
    <photo ref="photo" src="images/paths/street-lounge/IMG_1341.jpg" />
    <arrow-nav :ways="[{
      position: 0,
      path: 'street-lounge',
      label: 'Commencer la visite',
      preloader
    }]" :scale="scale" />
  </div>
</template>

<script>
import Preloader from "@/Preloader.js";
import ArrowNav from "@/components/ArrowNav.vue";

export default {
  components: { ArrowNav },
  data() {
    return {
      preloader: {},
      scale: 1
    };
  },
  created() {
    this.preloader = new Preloader(this.$router, "street-lounge");
  },
  mounted() {
    this.computeScale();
    window.onresize = this.computeScale;
  },
  methods: {
    computeScale() {
      this.scale = this.$el.clientHeight / this.$refs.photo.$el.naturalHeight;
    }
  }
};
</script>

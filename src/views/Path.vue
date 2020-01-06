<template>
  <div @click="skip = true">
    <photo :src="src" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      src: "",
      frame: 0,
      skip: false
    };
  },
  created() {
    this.src = this.getImageSource(this.$route.meta.start);
  },
  mounted() {
    this.nextFrame();
  },
  methods: {
    getImageSource(i) {
      let filename = "IMG_" + i + ".jpg";
      return "images/" + this.$route.name + "/" + filename;
    },
    nextFrame() {
      let img = this.$route.meta.images[this.frame];
      if (!this.skip && img) {
        this.src = img.src;
        this.frame++;
        setTimeout(this.nextFrame, 100);
      } else {
        this.$router.replace(this.$route.meta.destination);
      }
    }
  },
  beforeRouteEnter(to, from, next) {
    if (to.meta.images) {
      next();
    } else {
      next(from)
    }
  }
};
</script>

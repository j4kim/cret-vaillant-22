<template>
  <photo :src="src" />
</template>

<script>
export default {
  data() {
    return {
      src: "",
      frame: 0
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
      let src = this.$route.meta.imageUrls[this.frame];
      if (src) {
        this.src = src;
        this.frame++;
        setTimeout(this.nextFrame, 100);
      } else {
        this.$router.replace(this.$route.meta.destination);
      }
    }
  }
};
</script>

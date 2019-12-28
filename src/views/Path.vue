<template>
  <photo :src="src" />
</template>

<script>
export default {
  data() {
    return {
      folder: "",
      src: "",
      images: [],
      frame: 0,
      destination: ""
    };
  },
  created() {
    this.folder = this.$route.name;
    this.destination = this.$route.meta.destination;
    this.images = this.$route.meta.images;
    this.src = "images/" + this.folder + "/" + this.images[0];
  },
  mounted() {
    this.nextFrame();
  },
  methods: {
    nextFrame() {
      var image = this.images[this.frame];
      if (image) {
        this.src = "images/" + this.folder + "/" + image;
        this.frame++;
        setTimeout(this.nextFrame, 100);
      } else {
        this.$router.replace(this.destination);
      }
    }
  }
};
</script>

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
      frame: 0
    };
  },
  created() {
    this.folder = this.$route.name;
    this.images = this.$root.paths[this.folder].images;
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
        console.log("fin");
      }
    }
  }
};
</script>

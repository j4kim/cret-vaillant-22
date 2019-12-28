<template>
  <photo :src="src" />
</template>

<script>
export default {
  data() {
    return {
      folder: "",
      src: "",
      imageSources: [],
      frame: 0,
      destination: ""
    };
  },
  created() {
    this.folder = this.$route.name;
    this.destination = this.$route.meta.destination;
  },
  mounted() {
    this.preloadImages().then(this.nextFrame);
  },
  methods: {
    preloadImages() {
      return new Promise(resolve => {
        let start = this.$route.meta.start;
        let counter = start;
        let stop = this.$route.meta.stop;
        for (let i = start; i <= stop; i++) {
          let img = new Image();
          let filename = "IMG_" + i + ".jpg";
          img.src = "images/" + this.folder + "/" + filename;
          img
            .decode()
            .then(() => {
              this.imageSources.push(img.src);
            })
            .catch(() => {
              // the file doesn't exist, do nothing
            })
            .finally(() => {
              counter++;
              if (counter === stop) {
                this.imageSources.sort();
                resolve();
              }
            });
        }
      });
    },
    nextFrame() {
      let src = this.imageSources[this.frame];
      if (src) {
        this.src = src;
        this.frame++;
        setTimeout(this.nextFrame, 100);
      } else {
        this.$router.replace(this.destination);
      }
    }
  }
};
</script>

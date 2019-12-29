<template>
  <photo :src="src" />
</template>

<script>
export default {
  data() {
    return {
      src: "",
      imageSources: [],
      frame: 0
    };
  },
  created() {
    this.src = this.getImageSource(this.$route.meta.start);
  },
  mounted() {
    this.preloadImages().then(this.nextFrame);
  },
  methods: {
    getImageSource(i) {
      let filename = "IMG_" + i + ".jpg";
      return "images/" + this.$route.name + "/" + filename;
    },
    preloadImages() {
      return new Promise(resolve => {
        let start = this.$route.meta.start;
        let counter = start;
        let stop = this.$route.meta.stop;
        for (let i = start; i <= stop; i++) {
          let img = new Image();
          img.src = this.getImageSource(i);
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
        this.$router.replace(this.$route.meta.destination);
      }
    }
  }
};
</script>

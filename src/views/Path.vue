<template>
  <photo :src="src" />
</template>

<script>
export default {
  data() {
    return {
      src: "",
      images: []
    };
  },
  created() {
    var folder = this.$route.name;
    this.images = this.$root.paths[folder].images;
    this.src = "images/" + folder + "/" + this.images[0];
  }
};
</script>

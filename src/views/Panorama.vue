<template>
  <vuejs-panorama
    :source="'images/panoramas/' + $route.name + '.jpg'"
    @viewchange="move"
    :animationTime="0"
  />
</template>

<script>
import VuejsPanorama from "vuejs-panorama";

export default {
  components: { VuejsPanorama },
  methods: {
    move(view) {
      // todo: move marks
    }
  }
};
</script>

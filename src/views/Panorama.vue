<template>
  <div
    :style="{
      backgroundImage: 'url(images/panoramas/' + $route.name + '.jpg)',
      height: '500px',
      backgroundSize: 'auto 500px',
      backgroundPosition: -this.x + 'px'
    }"
    @click="move"
  />
</template>

<script>
export default {
  data() {
    return { x: 0 };
  },
  methods: {
    move() {
      this.x += 100;
    }
  }
};
</script>

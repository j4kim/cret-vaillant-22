<template>
  <div
    :style="{
      backgroundImage: 'url(' + $route.meta.image.src + ')',
      height: '500px',
      backgroundSize: 'auto 500px',
      backgroundPosition: -x + 'px'
    }"
    @click="x += 100"
  />
</template>

<script>
export default {
  data() {
    return { x: 0 };
  }
};
</script>

<template>
  <img :src="src" />
</template>

<script>
export default {
  props: ["src"]
};
</script>

<style scoped>
img {
  max-width: 100%;
  max-height: 100%;
}
</style>

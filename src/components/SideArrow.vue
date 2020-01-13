<template>
  <div
    :style="{
      position: 'absolute',
      height: '100%',
      width: '25%',
      top: 0,
      left: left ? 0 : '',
      right: left ? '' : 0,
      cursor: 'pointer',
      userSelect: 'none'
    }"
    @click="$emit('click')"
  >
    <svg
      width="50"
      height="50"
      :style="{
        position: 'absolute',
        left: left ? 0 : '',
        right: left ? '' : 0,
        top: 'calc(50% - ' + 25 * scale + 'px)',
        transform:
          'scale(' + minscale + ') rotate(' + (left ? -90 : 90) + 'deg)',
        transformOrigin: 'center'
      }"
    >
      <polygon points="0,50 25,15 50,50" fill="rgba(255,255,255,0.8)" />
    </svg>
  </div>
</template>

<script>
export default {
  props: {
    left: {
      type: Boolean
    },
    scale: {
      type: Number,
      default: 1
    }
  },
  computed: {
    minscale() {
      return Math.max(this.scale, 0.4);
    }
  }
};
</script>

<template>
  <div>
    <div
      v-for="way in ways"
      :key="way.path + way.position"
      @click="way.preloader.ready ? $router.push(way.path) : undefined"
      :style="{
        position: 'absolute',
        height: '100px',
        bottom: 0,
        left: 'calc(50% + ' + (offset + scale * way.position - 100) + 'px)',
        color: 'white',
        cursor: way.preloader.ready ? 'pointer' : 'auto',
        width: '200px'
      }"
    >
      <svg
        width="50"
        height="50"
        :style="{
          transform: 'scale(' + minscale + ')',
          transformOrigin: 'bottom'
        }"
      >
        <linearGradient :id="'grad' + way.path">
          <stop
            :offset="way.preloader.progress + '%'"
            stop-color="rgba(255,255,255,0.8)"
          />
          <stop
            :offset="way.preloader.progress + '%'"
            stop-color="rgba(255,255,255,0.3)"
          />
        </linearGradient>
        <polygon
          points="0,50 25,15 50,50"
          :fill="'url(#grad' + way.path + ')'"
        />
      </svg>
      <div
        :style="{
          textShadow: '1px 1px 2px rgba(0,0,0,0.5)'
        }"
      >
        <span v-if="way.preloader.ready">
          {{ way.label }}
        </span>
        <span v-else> {{ way.preloader.progress }}% </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    ways: Array,
    offset: {
      type: Number,
      default: 0
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

<template>
  <div style="position:relative">
    <div
      v-for="way in ways"
      :key="way.path"
      @click="way.preloader.ready ? $router.push(way.path) : undefined"
      :style="{
        position: 'absolute',
        bottom: '10px',
        left: 'calc(50% + ' + (offset + (scale * way.position) - 100) + 'px)',
        color: 'white',
        cursor: way.preloader.ready ? 'pointer': 'auto',
        width: '200px'
      }">
      <svg width="50" height="50">
        <linearGradient id="grad">
          <stop :offset="way.preloader.progress + '%'" stop-color="#fffd"/>
          <stop :offset="way.preloader.progress + '%'" stop-color="#fff6"/>
        </linearGradient>
        <polygon x="100px" points="0,50 25,15 50,50" fill="url(#grad)"/>
      </svg>
      <div v-if="way.preloader.ready">
        {{ way.label }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['ways', 'offset', 'scale']
}
</script>
<template>
  <div>
    <div
      v-for="way in ways"
      :key="way.path"
      @click="way.preloader.ready ? $router.push(way.path) : undefined"
      :style="{
        position: 'relative',
        bottom: '100px',
        margin: 'auto',
        left: way.position + 'px',
        color: 'white',
        cursor: way.preloader.ready ? 'pointer': 'auto',
        width: '150px'
      }">
      <svg width="50" height="50">
        <linearGradient id="grad">
          <stop :offset="way.preloader.progress + '%'" stop-color="#fffc"/>
          <stop :offset="way.preloader.progress + '%'" stop-color="#fff4"/>
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
  props: ['ways']
}
</script>
<template>
  <div id="app">
    <router-view class="interactive-view" />
  </div>
</template>

<style lang="scss">
body,
html {
  margin: 0;
  padding: 0;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  .interactive-view{
    height: 66.66vw;
    max-height: 600px;
    text-align: center;
    background-color:#292d31;
  }
}
</style>

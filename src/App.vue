<template>
  <div id="app">
    <div class="content">
      <h1 class="title">{{ welcome.title }}</h1>
      <div v-html="welcome.content" />
    </div>
    <nav class="title">
      <div
        v-for="view in views"
        :key="view.name"
        :class="$route.name === view.name ? 'active' : ''"
      >
        <router-link :to="view.name">
          {{ view.label }}
        </router-link>
      </div>
    </nav>
    <router-view class="interactive-view" />
    <div class="dark">
      <div class="content">
        <h2 class="title">{{ view.title }}</h2>
        <div v-html="view.content" />
      </div>
    </div>
    <div class="content contact">
      <h2 class="title">Contact</h2>
      <div v-html="contact.content" />
    </div>
  </div>
</template>

<script>
import { get } from "axios";

export default {
  data() {
    return {
      views: [],
      welcome: {},
      contact: {}
    };
  },
  methods: {
    fetch(uri) {
      return get(process.env.VUE_APP_API + uri).then(result => {
        return result.data;
      });
    },
    fetchSingleton(singleton) {
      return this.fetch("singletons/get/" + singleton).then(data => {
        this[singleton] = data;
      });
    }
  },
  created() {
    this.fetchSingleton("welcome");
    this.fetchSingleton("contact");
    this.fetch("collections/get/views").then(data => {
      this.views = data.entries;
    });
  },
  computed: {
    view() {
      return this.views.find(v => v.name === this.$route.name) || {};
    }
  }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Enriqueta:400,700|Nunito+Sans:300,300i,400,400i,600,600i&display=swap");
body,
html {
  margin: 0;
  padding: 0;
}
#app {
  font-family: "Avenir", "Nunito Sans", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  .title {
    font-family: "Enriqueta", serif;
  }
  .content {
    h1,
    h2 {
      margin: 0 auto;
    }
    h1 {
      font-size: 2.5rem;
      line-height: 3rem;
      break-inside: avoid;
      @media screen and (min-width: 500px) {
        font-size: 5rem;
        line-height: 5.5rem;
      }
    }
    h2 {
      font-size: 2rem;
    }
    max-width: 1400px;
    margin: auto;
    padding: 40px;
    columns: 400px;
  }
  .dark {
    background-color: #515354;
    color: white;
  }
  nav {
    display: flex;
    justify-content: center;
    justify-content: space-evenly;
    flex-wrap: wrap;
    font-size: 1.2rem;
    div {
      padding: 10px;
      text-align: center;
      a {
        text-decoration: none;
        color: #2c3e50;
      }
      &.active {
        text-decoration: underline;
        font-weight: bold;
      }
    }
  }
  .interactive-view {
    height: 66.66vw;
    max-height: 600px;
    text-align: center;
    background-color: #292d31;
    position: relative;
    max-width: 100%;
    overflow: hidden;
  }
}
</style>

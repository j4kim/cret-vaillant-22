<template>
  <div id="app">
    <div class="content">
      <h1 class="title">Bienvenue au Crêt-Vaillant&nbsp;22</h1>
      <p>Nous nous réjouissons de vous accueillir et de vous héberger au Locle, la mère commune des Montagnes neuchâteloises, à 1'000m d'altitude, dans la région qui a donné naissance à l’horlogerie.

        Le K-linou est un appartement meublé de 55 m2 tout confort se trouvant au rez-de-chaussée d’un immeuble du 18ème siècle situé au Crêt-Vaillant 22.

        L'appartement se compose de deux pièces, d’une cuisine, d’une salle de bains et d’un WC séparé. Nos hôtes bénéficient également de l’accès au WIFI, d’une place de parc privée et d’un grand jardin, situé derrière l’immeuble.

        Il se trouve à 5 min du centre du Locle, à 10 min de la gare, des commerces locaux et des arrêts de bus. 
        <hr>
        Ce site vous propose une visite interactive du K-linou. Utilisez les flèches pour vous déplacer et trouvez plus d'informations sous l'image.</p>
    </div>
    <nav class="title">
      <div
        v-for="page in menu"
        :key="page.name"
        :class="$route.name === page.name ? 'active' : ''"
      >
        <router-link :to="page.name">
          {{ page.label }}
        </router-link>
      </div>
    </nav>
    <router-view class="interactive-view" />
    <div class="content dark">
      <h2 class="title">Rue</h2>
      <p>Le Crêt-Vaillant est l’une des plus anciennes rues historiques du Locle, reconnue dans le patrimoinse de l’UNESCO.

        Ainsi, dans l’une des maisons du quartier a vécu le conteur et poète danois Hans Christian Andersen, célèbre pour ses nouvelles et ses contes de fées. D’un autre est issue la révolution neuchâteloise de 1848. 

        Cette rue est aussi connue pour sa convivialité et ses animations, parmi lesquelles la fête du Crêt-Vaillant, la salle de spectacles Le Cellier, son Groupement des habitants de quartier.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    menu() {
      return this.$router.options.routes.filter(r => r.label);
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
    h1, h2 {
      margin: 0 auto;
    }
    h1 {
      font-size: 3rem;
      line-height: 3.5rem;
      break-inside: avoid;
      @media screen and (min-width: 320px) {
        font-size: 4rem;
        line-height: 4.5rem;
      }
      @media screen and (min-width: 500px) {
        font-size: 5rem;
        line-height: 5.5rem;
      }
    }
    h2{
      font-size: 2rem;
    }
    max-width: 1400px;
    margin: auto;
    padding: 40px;
    columns: 400px;
    white-space: pre-line;
  }
  .dark {
    background-color: #515354;
    color: white;
  }
  nav {
    display: flex;
    justify-content: space-evenly;
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
  }
}
</style>

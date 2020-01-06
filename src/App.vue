<template>
  <div id="app">
    <div class="welcome-content">
      <h1>Bienvenue au Crêt-Vaillant&nbsp;22</h1>
      <p>
        Nous nous réjouissons de vous accueillir et de vous héberger au Locle, la mère commune des Montagnes neuchâteloises, à 1'000m d'altitude, dans la région qui a donné naissance à l’horlogerie.

        Le K-linou est un appartement meublé de 55 m2 tout confort se trouvant au rez-de-chaussée d’un immeuble du 18ème siècle situé au Crêt-Vaillant 22. Le Crêt-Vaillant est l’une des plus anciennes rues historiques du Locle, reconnue dans le patrimoinse de l’UNESCO.

        Ainsi, dans l’une des maisons du quartier a vécu le conteur et poète danois Hans Christian Andersen, célèbre pour ses nouvelles et ses contes de fées. D’un autre est issue la révolution neuchâteloise de 1848. 

        Cette rue est aussi connue pour sa convivialité et ses animations, parmi lesquelles la fête du Crêt-Vaillant, la salle de spectacles Le Cellier, son Groupement des habitants de quartier.

        Le K-linou se compose de deux pièces, d’une cuisine, d’une salle-de-bains et d’un WC séparé. Nos hôtes bénéficient également de l’accès au WIFI, d’une place de parc privée et d’un grand jardin, situé derrière l’immeuble.

        Il se trouve à 5 min du centre du Locle, à 10 min de la gare, des commerces locaux et des arrêts de bus. 
      </p>
    </div>
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
  .welcome-content{
    h1{
      font-size: 4rem;
      margin: 0 auto;
    }
    max-width: 1400px;
    margin: auto;
    padding: 40px;
    columns:2;
    white-space: pre-line;
  }
  .interactive-view{
    height: 66.66vw;
    max-height: 600px;
    text-align: center;
    background-color:#292d31;
  }
}
</style>

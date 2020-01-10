<template>
  <div id="app">

    <!-- Produccion -->
    <div class="section">

      <p class="title">Producción</p>

      <p class="title is-5">Tractores</p>
      <div class="box">
        <div class="row">
          <div class="column">
            <figure class="image is-64x64">
              <img src="./assets/tractor.png" style="height: 100%;">
            </figure>
            <p class="title">20</p>
            <p class="subtitle is-6">aparcados</p>
          </div>
          <div class="column">
            <figure class="image is-64x64">
              <img src="./assets/tractor2.png">
            </figure>
            <p class="title">120</p>
            <p class="subtitle is-6">en campo</p>
          </div>
        </div>
      </div>

      <p class="title is-5">Campo</p>
      <div class="box">
        <div class="row">
          <div class="column">
            <figure class="image is-64x64">
              <img src="./assets/siembra.png">
            </figure>
            <p class="title">12</p>
            <p class="title is-6">hectáreas</p>
            <p class="subtitle is-6">siembra</p>
          </div>
          <div class="column">
            <figure class="image is-64x64">
              <img src="./assets/cosecha.png">
            </figure>
            <p class="title">15.5</p>
            <p class="title is-6">toneladas</p>
            <p class="subtitle is-6">cosecha</p>
          </div>
        </div>
      </div>

    </div>

    <!-- Crianza -->
    <div class="section">

      <p class="title">Crianza</p>

      <p class="title is-5">Cerdos</p>
      <div class="box">

        <div class="row">
          <div class="column">
            <figure class="image is-64x64">
              <img src="./assets/cerdo.png">
            </figure>
            <p class="title is-5">1200</p>
            <p class="subtitle is-7">granja</p>
          </div>
          <div class="column">
            <figure class="image is-64x64">
              <img src="./assets/cerdo2.png">
            </figure>
            <p class="title is-5">750</p>
            <p class="subtitle is-7">procesados</p>
          </div>
          <div class="column">
            <figure class="image is-64x64">
              <img src="./assets/cerdo3.png">
            </figure>
            <p class="title is-5">12500</p>
            <p class="subtitle is-7">empacados</p>
          </div>
        </div>

      </div>
    </div>

    <!-- Ventas -->
    <div class="section">
      <p class="title">Ventas</p>
      <div class="box"></div>
    </div>

  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue';

// export default {
//   name: 'app',
//   components: {
//     HelloWorld,
//   },
// };
</script>

<style lang="stylus">
  #app
    max-width 700px
    margin auto
  .row
    display flex
    .column
      text-align center
      .image
        margin auto

// #app
//   font-family 'Avenir', Helvetica, Arial, sans-serif
//   -webkit-font-smoothing antialiased
//   -moz-osx-font-smoothing grayscale
//   text-align center
//   color #2c3e50
//   margin-top 60px
</style>

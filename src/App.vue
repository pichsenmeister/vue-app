<template>
  <div id="app">
    <nav-bar></nav-bar>
    <b-container
      fluid
      class="p-4">
      <router-view></router-view>
    </b-container>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar'

export default {
  components: {
    NavBar
  }
}
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>

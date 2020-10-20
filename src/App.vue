<template>
  <div id="app">
    <vue-formulate />
    <vue-form-generator />
  </div>
</template>

<script>
import VueFormulate from './components/VueFormulate';

export default {
  name: 'App',
  components: {
    VueFormulate
      
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 10vh 20vw;
}
</style>

<template>
  <div id="app">
    <vue-formulate />
    <vue-form-generator />
  </div>
</template>

<script>
import VueFormulate from './components/VueFormulate';
import VueFormGenerator from './components/VueFormGenerator';

export default {
  name: 'App',
  components: {
    VueFormulate,
    VueFormGenerator    
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

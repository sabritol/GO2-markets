<template>
  <div id="app">
    <vue-formulate />
    <!-- <vue-phone-number-input v-model="phone" :disabled-fetching-country="true" :no-use-browser-locale="true"></vue-phone-number-input>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/vue-phone-number-input@1.1.9/dist/vue-phone-number-input.css"> -->
<VuePhoneNumberInput v-model="yourValue" />

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

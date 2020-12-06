<template>
  <div id="app">
    <vue-formulate />
    <!-- <vue-phone-number-input v-model="phone" :disabled-fetching-country="true" :no-use-browser-locale="true"></vue-phone-number-input>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/vue-phone-number-input@1.1.9/dist/vue-phone-number-input.css"> -->
<!-- <VuePhoneNumberInput v-model="yourValue" /> -->

</div>

</template>

<script>
import VueFormulate from './components/VueFormulate';
// import VuePhoneNumberInput from 'vue-phone-number-input';
export default {
  name: 'App',
  components: {
    VueFormulate,
    // VuePhoneNumberInput
      
  }
}
</script>

 


<style>
#app {
 margin: 10vh 35vw;
}
</style>

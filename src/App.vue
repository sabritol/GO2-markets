<template>
  <div id="app">
    <vue-formulate>
     <vue-phone-number-input>
      </vue-phone-number-input>
         
      </vue-formulate>
    </div>

</template>

<script>
import VueFormulate from './components/VueFormulate';
import VuePhoneNumberInput from 'vue-phone-number-input';
export default {
  name: 'App',
  components: {
    VueFormulate, VuePhoneNumberInput
      
  }
}
</script>

 


<style>
#app {
 margin: 10vh 35vw;
}
</style>

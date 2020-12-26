import Vue from 'vue'
import App from './App.vue'

import './assets/formulate.css'
import VueFormulate from '@braid/vue-formulate'
import VuePhoneNumberInput from 'vue-phone-number-input';
import 'vue-phone-number-input/dist/vue-phone-number-input.css';

// Vue.use(VueFormulate, VuePhoneNumberInput)
Vue.use(VueFormulate)

Vue.component ('vue-phone-number-input', VuePhoneNumberInput);


// Globally register VuePhoneNumberInput component beacuse I'm going to use it just once, 
// in largest applications is worth it use local registration
// Vue.component('vue-phone-number-input', VuePhoneNumberInput);
 
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

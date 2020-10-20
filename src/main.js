import Vue from 'vue'
import App from './App.vue'

import './assets/formulate.css'
import VueFormulate from '@braid/vue-formulate'
import VuePhoneNumberInput from 'vue-phone-number-input';
import 'vue-phone-number-input/dist/vue-phone-number-input.css';
// import VueTelInput from 'vue-tel-input'

// import VueFormGenerator from "vue-form-generator";
// import "vue-form-generator/dist/vfg-core.css";

// Vue.use(VueFormGenerator);

Vue.use(VueFormulate)

Vue.component('vue-phone-number-input', VuePhoneNumberInput);
 
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

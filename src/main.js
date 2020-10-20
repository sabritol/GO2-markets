import Vue from 'vue'
import App from './App.vue'

import './assets/formulate.css'
import VueFormulate from '@braid/vue-formulate'

import VueFormGenerator from "vue-form-generator";
import "vue-form-generator/dist/vfg-core.css";

Vue.use(VueFormGenerator);

Vue.use(VueFormulate)


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

import Vue from 'vue';
import * as VuetifyComponents from 'vuetify/lib';
import App from './App.vue';
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false;

// register all Vuetify components
for (let [name, value] of Object.entries(VuetifyComponents))
  if (name.startsWith('V'))
    Vue.component(name, value);

new Vue({
  vuetify,
  render: h => h(App),
}).$mount('#app');

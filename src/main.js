import Vue from 'vue';
import VueHighlightJS from 'vue-highlightjs';
Vue.use(VueHighlightJS);

import App from './App.vue';
import Cryptoicon from './components';
import icon from './icons';
Cryptoicon.add(icon);
Vue.use(Cryptoicon, { size: '42', color: 'white' });

Vue.config.productionTip = false;
new Vue({
  render: h => h(App)
}).$mount('#app');

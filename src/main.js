import Vue from 'vue';
import Vue2Filters from 'vue2-filters';
import 'prismjs';
import 'prismjs/themes/prism.css';

Vue.use(Vue2Filters);

import App from './App.vue';
import Cryptoicon from './components';
import icon from './icons';
Cryptoicon.add(icon);
Vue.use(Cryptoicon);

Vue.config.productionTip = false;
new Vue({
  render: h => h(App)
}).$mount('#app');

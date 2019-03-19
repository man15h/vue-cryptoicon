import Vue from 'vue';
import App from './App.vue';
import Cryptoicon from './components';
import icon from './icons';
Vue.config.productionTip = false;

Cryptoicon.add(icon);
Vue.use(Cryptoicon, { size: '50', color: 'white' });

new Vue({
  render: h => h(App)
}).$mount('#app');

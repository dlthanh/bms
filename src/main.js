import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Header from './components/layouts/Header'
import Banner from './components/pages/home/Banner'
import $ from 'jquery';

Vue.config.productionTip = false
// Vue.use(Swiper);

Vue.component('bms-header', Header);
Vue.component('bms-home-banner', Banner);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')        

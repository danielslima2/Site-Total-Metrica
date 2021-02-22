import Vue from 'vue'
import App from './App.vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'
import 'swiper/swiper.min.css'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
AOS.init();

import router from './router';
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueAwesomeSwiper, )
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

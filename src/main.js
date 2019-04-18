import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import jQuery from 'jquery';
import {fb}   from './firebase';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css'; // Ensure you are using css-loader
import VueFilter from 'vue-filter';

Vue.use(VueFilter);
Vue.use(Vuetify);

window.$ = window.jQuery = jQuery;

import 'popper.js';
import 'bootstrap';


import './assets/css/bootstrap.min.css';
import './assets/css/flaticon.css';
import './assets/css/slicknav.min.css';
import './assets/css/jquery-ui.min.css';
import './assets/css/owl.carousel.min.css';
import './assets/css/animate.css';
import './assets/css/style.css';
import './assets/js/jquery-3.2.1.min.js';
// import './assets/js/bootstrap.min.js';
import './assets/js/jquery.slicknav.min.js';
import './assets/js/owl.carousel.min.js';
import './assets/js/jquery.nicescroll.min.js';
import './assets/js/jquery.zoom.min.js';
import './assets/js/jquery-ui.min.js';
import './assets/js/main.js';

Vue.component('Navbar', require('./components/Navbar.vue').default);

Vue.config.productionTip = false;



let app = '';

fb.auth().onAuthStateChanged(function(user) {

  if(!app){
    new Vue({
      router,
      render: h => h(App)
    }).$mount("#app");
    
  }


});




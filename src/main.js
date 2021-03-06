// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'vuetify/dist/vuetify.min.css';
import 'babel-polyfill';
import Vue from 'vue';
import Vuex from 'vuex';
import App from './App';
import router from './router';
import Vuetify from 'vuetify';
import moment from 'moment';
import store from './store/store';

// Require Froala Editor js file.
require('froala-editor/js/froala_editor.pkgd.min')

// Require Froala Editor css files.
require('froala-editor/css/froala_editor.pkgd.min.css')
require('font-awesome/css/font-awesome.css')
require('froala-editor/css/froala_style.min.css')

// Import and use Vue Froala lib.
import VueFroala from 'vue-froala-wysiwyg'
Vue.use(VueFroala)
Vue.use(Vuetify, Vuex, {
  theme: {
    primary: "#1565C0",
    secondary: "#FFFFFF",
    accent: "#80D8FF",
    error: "#FFAB91",
    warning: "#BF360C",
    info: "#2196f3",
    success: "#4caf50"
  }
});

Vue.config.productionTip = false;
Vue.filter('formatDate', function(value){
  if(value)
  return moment(String(value)).format('YYYY-MM-DD');
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  template: '<App/>'  
});

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'vuetify/dist/vuetify.min.css'
import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'


Vue.use(Vuetify, { theme: {
  primary: "#1565C0",
  secondary: "#FFFFFF",
  accent: "#80D8FF",
  error: "#FFAB91",
  warning: "#BF360C",
  info: "#2196f3",
  success: "#4caf50"
}})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

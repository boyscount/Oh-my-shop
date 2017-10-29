
import Vue from 'vue'
import Vuetify from 'Vuetify'
import { store } from './store'
import App from './App'
import * as firebase from 'firebase'
import router from './router'

Vue.use(Vuetify)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
  created () {
    firebase.initializeApp({
      apiKey: 'AIzaSyA7eJFrQMvEA7EfQrkz_NKhCtmImQaA4s4',
      authDomain: 'hollyhappy-70567.firebaseapp.com',
      databaseURL: 'https://hollyhappy-70567.firebaseio.com',
      projectId: 'hollyhappy-70567',
      storageBucket: 'hollyhappy-70567.appspot.com'
    })
  }
})

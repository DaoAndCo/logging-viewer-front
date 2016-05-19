import Vue from 'vue'
import AppComponent from './components/App.vue'
import store from 'src/store/store.js'
import jQuery from 'jQuery'

window.jQuery = window.$ = jQuery
require('bootstrap')
require('bootstrap/dist/css/bootstrap.min.css')

/* eslint-disable no-new */
new Vue({
  el: 'body',

  store,

  components: {
    app: AppComponent
  }
})

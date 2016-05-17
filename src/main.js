import Vue from 'vue'
import AppComponent from './components/App.vue'
import store from 'src/store/store.js'

require('bootstrap/dist/css/bootstrap.min.css')

/* eslint-disable no-new */
new Vue({
  el: 'body',

  store,

  components: {
    app: AppComponent
  }
})

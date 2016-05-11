import Vue from 'vue'
import LogsComponent from './components/Logs.vue'
import store from 'src/store/store.js'

/* eslint-disable no-new */
new Vue({
  el: 'body',

  store,

  components: {
    logs: LogsComponent
  }
})

import Vue from 'vue'
import Vuex from 'vuex'
import logs from './modules/logs'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: { logs }
})

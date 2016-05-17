import Vue from 'vue'
import Vuex from 'vuex'
import logs from './logs/store'
import logFilters from './logFilters/store'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: { logs, logFilters }
})

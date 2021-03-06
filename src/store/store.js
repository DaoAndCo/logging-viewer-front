import Vue from 'vue'
import Vuex from 'vuex'
import logs from './logs/store'
import logFilters from './logFilters/store'
import modal from './modal/store'
import pagination from './pagination/store'
import user from './user/store'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: { logs, logFilters, modal, pagination, user }
})

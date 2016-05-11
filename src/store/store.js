import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const state = {
  logs: []
}

export const mutations = {
  ADD_LOGS (state, logs) {
    state.logs.push(...logs)
  },

  ADD_LOG (state, log) {
    state.logs.push(log)
  }
}

export default new Vuex.Store({
  state,
  mutations
})

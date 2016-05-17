import _ from 'lodash'

export const state = {
  logs: [],
  scopes: [],
  levels: []
}

export const mutations = {
  ADD_LOGS (state, logs) {
    state.logs.push(...logs)
  },

  ADD_LOG (state, log) {
    state.logs.push(log)
  },

  EXTRACT_SCOPES (state) {
    state.scopes = state.logs.map(function (a) { return a.scope })
    state.scopes = _.uniq(state.scopes)
  },

  EXTRACT_LEVELS (state) {
    state.levels = state.logs.map(function (a) { return a.level })
    state.levels = _.uniq(state.levels)
  }
}

export default {
  state,
  mutations
}

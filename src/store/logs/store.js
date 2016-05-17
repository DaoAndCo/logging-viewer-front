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

export default {
  state,
  mutations
}

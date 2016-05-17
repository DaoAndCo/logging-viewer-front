export const state = {
  logFilters: {
    scopes: [],
    levels: [],
    start: null,
    end: null,
    user: '',
    message: ''
  }
}

export const mutations = {
  ADD_SCOPE (state, scope) {
    state.logFilters.scopes.push(scope)
  },

  ADD_SCOPES (state, scopes) {
    state.logFilters.scopes.push(...scopes)
  },

  REMOVE_SCOPE (state, scope) {
    let index = state.logFilters.scopes.indexOf(scope)

    if (index !== -1) {
      state.logFilters.scopes.splice(index, 1)
    }
  },

  TOGGLE_SCOPE (state, scope) {
    let index = state.logFilters.scopes.indexOf(scope)

    if (index === -1) {
      mutations.ADD_SCOPE(state, scope)
    } else {
      mutations.REMOVE_SCOPE(state, scope)
    }
  }
}

export default {
  state,
  mutations
}

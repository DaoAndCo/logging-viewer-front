import moment from 'moment'

export const state = {
  logFilters: {
    scopes: [],
    levels: [],
    start: '',
    end: '',
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
  },

  ADD_LEVEL (state, level) {
    state.logFilters.levels.push(level)
  },

  ADD_LEVELS (state, levels) {
    state.logFilters.levels.push(...levels)
  },

  REMOVE_LEVEL (state, level) {
    let index = state.logFilters.levels.indexOf(level)

    if (index !== -1) {
      state.logFilters.levels.splice(index, 1)
    }
  },

  TOGGLE_LEVEL (state, level) {
    let index = state.logFilters.levels.indexOf(level)

    if (index === -1) {
      mutations.ADD_LEVEL(state, level)
    } else {
      mutations.REMOVE_LEVEL(state, level)
    }
  },

  SET_MESSAGE (state, message) {
    state.logFilters.message = message
  },

  SET_USER (state, user) {
    state.logFilters.user = user
  },

  SET_START (state, date) {
    state.logFilters.start = null

    if (Date.parse(date)) {
      state.logFilters.start = moment(date)
    }
  },

  SET_END (state, date) {
    state.logFilters.end = null

    if (Date.parse(date)) {
      state.logFilters.end = moment(date)
    }
  }
}

export default {
  state,
  mutations
}

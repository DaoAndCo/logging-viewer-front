export const state = {
  loadFunction: null,
  current: 1,
  total: null,
  perPage: 20,
  items: []
}

export const mutations = {
  SET_FUNCTION (state, fn) {
    state.loadFunction = fn
  },

  CHANGE_PAGE (state, page) {
    state.current = page
  }
}

export default {
  state,
  mutations
}

export const state = {
  loadFunction: null,
  api: {
    count: null,
    current: null,
    direction: null,
    directionDefault: null,
    limit: null,
    nextPage: null,
    page: 1,
    pageCount: null,
    perPage: 20,
    prevPage: null,
    sort: null,
    sortDefault: null
  }
}

export const mutations = {
  SET_FUNCTION (state, fn) {
    state.loadFunction = fn
  },

  CHANGE_PAGE (state, page) {
    state.api.page = page
  },

  SET_API (state, api) {
    state.api = api
    console.log(state.api.page)
  }
}

export default {
  state,
  mutations
}

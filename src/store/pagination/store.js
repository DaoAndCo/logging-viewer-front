export const state = {
  loadFunction: null,
  page: null,
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

  SET_PAGE (state, page) {
    state.page = parseInt(page, 10)
  },

  SET_API (state, api) {
    state.api = api
  }
}

export default {
  state,
  mutations
}

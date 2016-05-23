import _ from 'lodash'

export const state = {
  current: 1,
  currentIndex: 0,
  total: null,
  perPage: 20,
  items: []
}

export const mutations = {
  PAGINATE (state, items) {
    state.items = _.chunk(items, state.perPage)
    state.total = state.items.length
    state.current = 1
    state.currentIndex = 0
  },

  CHANGE_PAGE (state, page) {
    state.current = page
    state.currentIndex = page - 1
  }
}

export default {
  state,
  mutations
}

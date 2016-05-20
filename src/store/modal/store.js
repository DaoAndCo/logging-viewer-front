export const state = {
  title: '',
  content: ''
}

export const mutations = {
  SET_MODAL (state, key, val) {
    state[key] = val
  }
}

export default {
  state,
  mutations
}

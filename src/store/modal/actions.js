export const setTitle = function (store, value) {
  return store.dispatch('SET_MODAL', 'title', value)
}

export const setContent = function (store, value) {
  return store.dispatch('SET_MODAL', 'content', value)
}

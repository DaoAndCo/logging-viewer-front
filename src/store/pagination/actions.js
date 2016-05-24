export const setPaginationFunction = function (store, fn) {
  return store.dispatch('SET_FUNCTION', fn)
}

export const changePage = function (store, page) {
  return store.dispatch('CHANGE_PAGE', page)
}

export const loadPage = function (store) {
  return store.state.pagination.loadFunction(store.state.pagination.api.page)
    .then((response) => {
      store.dispatch('SET_API', response.pagination)
    })
}

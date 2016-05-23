export const paginate = function (store, items) {
  return store.dispatch('PAGINATE', items)
}

export const changePage = function (store, page) {
  return store.dispatch('CHANGE_PAGE', page)
}

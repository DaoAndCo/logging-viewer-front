export const toggleScope = function (store, scope) {
  return store.dispatch('TOGGLE_SCOPE', scope)
}

export const addScopes = function (store, scopes) {
  return store.dispatch('ADD_SCOPES', scopes)
}

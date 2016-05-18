export const toggleScope = function (store, scope) {
  return store.dispatch('TOGGLE_SCOPE', scope)
}

export const addScopes = function (store, scopes) {
  return store.dispatch('ADD_SCOPES', scopes)
}

export const toggleLevel = function (store, level) {
  return store.dispatch('TOGGLE_LEVEL', level)
}

export const addLevels = function (store, levels) {
  return store.dispatch('ADD_LEVELS', levels)
}

export const setMessage = function (store, message) {
  return store.dispatch('SET_MESSAGE', message)
}

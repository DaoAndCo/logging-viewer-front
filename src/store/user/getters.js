export const user = (state) => state.user

export const isLogged = function (state) {
  return state.user.username && state.user.password && state.user.configs
}

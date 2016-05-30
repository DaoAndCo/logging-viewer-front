export const state = {
  username: null,
  password: null,
  config: null,
  configs: []
}

export const mutations = {
  SET_LOGIN (state, username, password, configs) {
    state.username = username
    state.password = password
    state.configs = configs
    state.config = (configs.length) ? configs[0] : null

    window.sessionStorage.setItem('api-username', username)
    window.sessionStorage.setItem('api-password', password)
    window.sessionStorage.setItem('api-configs', JSON.stringify(configs))
  }
}

export default {
  state,
  mutations
}

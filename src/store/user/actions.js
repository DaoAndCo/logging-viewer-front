import axios from 'axios'
import { Config } from 'src/config/app.js'

var api = axios.create({
  baseURL: Config.api.baseURL
})

export const login = function (store, username, password) {
  api.defaults.auth = {
    username: username,
    password: password
  }

  return api
    .post('configs')
    .then((response) => {
      if (response.data.configs.length) {
        store.dispatch('SET_LOGIN', username, password, response.data.configs)
      }

      return response
    })
    .catch((response) => {
      return response
    })
}

export const checkLogin = function (store) {
  let username = window.sessionStorage.getItem('api-username')
  let password = window.sessionStorage.getItem('api-password')
  let configs = window.sessionStorage.getItem('api-configs')

  if (username && password && configs) {
    store.dispatch('SET_LOGIN', username, password, JSON.parse(configs))
  }
}

export const setConfig = function (store, config) {
  store.dispatch('SET_CONFIG', config)
}

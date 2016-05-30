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
  console.log(api)
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

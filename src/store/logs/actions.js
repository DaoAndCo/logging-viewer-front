import axios from 'axios'
import { Config } from 'src/config/app.js'

var api = axios.create({
  baseURL: Config.api.baseURL
  // auth: {
  //   username: Config.api.username,
  //   password: Config.api.password
  // }
})

export const loadLogs = function (store, page) {
  store.dispatch('CLEAR_LOGS')

  api.defaults.auth = {
    username: store._vm.user.username,
    password: store._vm.user.password
  }

  let datas = store._vm.logFilters.logFilters
  datas.config = store._vm.user.config

  return api
    .post('find?page=' + page, datas)
    .then((response) => {
      store.dispatch('ADD_LOGS', response.data.logs)
      response.pagination = response.data.pagination.Logs
      return response
    })
    .catch((response) => {
      console.log(response)
    })
}

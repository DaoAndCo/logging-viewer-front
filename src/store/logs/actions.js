import axios from 'axios'

var api = axios.create({
  baseURL: 'http://mooc.local/logging-viewer-api/',
  auth: {
    username: 'admin',
    password: 'ad40db557bf3dd377243348a24ed215702b1c596'
  }
})

export const loadLogs = function (store, page) {
  store.dispatch('CLEAR_LOGS')
  return api
    .post('find?page=' + page, {config: 'logs'})
    .then((response) => {
      store.dispatch('ADD_LOGS', response.data.logs)
      response.pagination = response.data.pagination.Logs
      return response
    })
    .catch((response) => {
      console.log(response)
    })
}

// export const getLogs = function (store) {
//   return api
//     .post('find', {config: 'logs', limit: 500, order: {created: 'DESC'}})
//     .then((response) => {
//       store.dispatch('ADD_LOGS', response.data.logs)
//       store.dispatch('EXTRACT_SCOPES')
//       store.dispatch('EXTRACT_LEVELS')
//     })
//     .catch((response) => {
//       console.log(response)
//     })
// }

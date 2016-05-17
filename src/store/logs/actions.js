import axios from 'axios'

var api = axios.create({
  baseURL: 'http://mooc.local/logging-viewer-api/',
  auth: {
    username: 'admin',
    password: 'ad40db557bf3dd377243348a24ed215702b1c596'
  }
})

export const getLogs = function (store) {
  return api
    .post('find', {config: 'logs'})
    .then((response) => {
      store.dispatch('ADD_LOGS', response.data.logs)
      store.dispatch('EXTRACT_SCOPES')
      store.dispatch('EXTRACT_LEVELS')
    })
    .catch((response) => {
      console.log(response)
    })
}

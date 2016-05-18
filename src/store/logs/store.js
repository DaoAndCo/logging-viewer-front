import _ from 'lodash'
import moment from 'moment'
moment.locale('fr')

export const state = {
  logs: [],
  scopes: [],
  levels: []
}

export const mutations = {
  ADD_LOGS (state, logs) {
    logs.map(function (log) {
      log.date = null

      if (log.created) {
        log.date = moment(log.created)
        log.created = log.date.format('dddd D MMMM YYYY - H[h]mm')
      }

      return log
    })

    state.logs.push(...logs)
  },

  ADD_LOG (state, log) {
    let logs = []
    logs.push(log)

    return mutations.ADD_LOGS(state, logs)
  },

  EXTRACT_SCOPES (state) {
    state.scopes = state.logs.map(function (a) { return a.scope })
    state.scopes = _.uniq(state.scopes)
  },

  EXTRACT_LEVELS (state) {
    state.levels = state.logs.map(function (a) { return a.level })
    state.levels = _.uniq(state.levels)
  }
}

export default {
  state,
  mutations
}

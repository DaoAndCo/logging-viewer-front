import { mutations } from 'src/store/logs/store.js'

describe('Logs_mutations', () => {
  it('ADD_LOG', () => {
    const state = {logs: [1, 2]}
    mutations.ADD_LOG(state, {'created': '2016-02-01 03:00:01', message: 'Hey log ;)'})

    expect(state.logs.length).to.equal(3)
    expect(state.logs[2].created).to.equal('lundi 1 février 2016 - 3h00')
    expect(state.logs[2].date).to.be.an('object')
  })

  it('ADD_LOGS', () => {
    const state = {logs: [1, 2]}
    mutations.ADD_LOGS(state, [
      {'created': '2016-02-01 03:00:01', message: 'msg 1'},
      {'created': '2016-02-21 12:05:01', message: 'msg 2'},
      {'created': '2016-03-01 17:53:21', message: 'msg 3'}
    ])

    expect(state.logs.length).to.equal(5)
    expect(state.logs[2].created).to.equal('lundi 1 février 2016 - 3h00')
    expect(state.logs[3].created).to.equal('dimanche 21 février 2016 - 12h05')
  })

  it('EXTRACT_SCOPES', () => {
    const state = {
      logs: [
        {scope: 's1', level: 'l1'},
        {scope: 's1', level: 'l2'},
        {scope: 's2', level: 'l2'}
      ],
      scopes: []
    }
    mutations.EXTRACT_SCOPES(state)

    expect(state.scopes.length).to.equal(2)
    expect(state.scopes).to.contain('s1')
    expect(state.scopes).to.contain('s2')
  })

  it('EXTRACT_LEVELS', () => {
    const state = {
      logs: [
        {scope: 's1', level: 'l1'},
        {scope: 's1', level: 'l2'},
        {scope: 's2', level: 'l2'}
      ],
      levels: []
    }
    mutations.EXTRACT_LEVELS(state)

    expect(state.levels.length).to.equal(2)
    expect(state.levels).to.contain('l1')
    expect(state.levels).to.contain('l2')
  })
})

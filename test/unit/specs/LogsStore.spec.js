import { mutations } from 'src/store/logs/store.js'

describe('Logs_mutations', () => {
  it('ADD_LOG', () => {
    const state = {logs: [1, 2]}
    mutations.ADD_LOG(state, {message: 'Hey log ;)'})

    expect(state.logs.length).to.equal(3)
  })

  it('ADD_LOGS', () => {
    const state = {logs: [1, 2]}
    mutations.ADD_LOGS(state, [3, 4, 5])

    expect(state.logs.length).to.equal(5)
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

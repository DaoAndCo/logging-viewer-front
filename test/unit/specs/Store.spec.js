import { mutations } from 'src/store/store.js'

describe('mutations', () => {
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
})

import { mutations } from 'src/store/logFilters/store.js'

describe('LogFilters_mutations', () => {
  it('ADD_SCOPE', () => {
    const state = {logFilters: {scopes: ['scope1', 'scope2']}}
    mutations.ADD_SCOPE(state, 'scope3')

    expect(state.logFilters.scopes.length).to.equal(3)
    expect(state.logFilters.scopes).to.contain('scope3')
  })

  it('ADD_SCOPES', () => {
    const state = {logFilters: {scopes: ['scope1', 'scope2']}}
    mutations.ADD_SCOPES(state, ['scope3', 'scope4', 'scope5'])

    expect(state.logFilters.scopes.length).to.equal(5)
  })

  it('REMOVE_SCOPE', () => {
    const state = {logFilters: {scopes: ['scope1', 'scope2']}}
    mutations.REMOVE_SCOPE(state, 'scope2')

    expect(state.logFilters.scopes.length).to.equal(1)
    expect(state.logFilters.scopes).to.contain('scope1')
    expect(state.logFilters.scopes).not.to.contain('scope2')
  })

  it('REMOVE_SCOPE_NOT_EXIST', () => {
    const state = {logFilters: {scopes: ['scope1', 'scope2']}}
    mutations.REMOVE_SCOPE(state, 'notExist')

    expect(state.logFilters.scopes.length).to.equal(2)
  })

  it('TOGGLE_SCOPE_ADD', () => {
    const state = {logFilters: {scopes: ['scope1', 'scope2']}}
    mutations.TOGGLE_SCOPE(state, 'scope3')

    expect(state.logFilters.scopes.length).to.equal(3)
    expect(state.logFilters.scopes).to.contain('scope3')
  })

  it('TOGGLE_SCOPE_REMOVE', () => {
    const state = {logFilters: {scopes: ['scope1', 'scope2']}}
    mutations.TOGGLE_SCOPE(state, 'scope1')

    expect(state.logFilters.scopes.length).to.equal(1)
    expect(state.logFilters.scopes).to.contain('scope2')
    expect(state.logFilters.scopes).not.to.contain('scope1')
  })
})

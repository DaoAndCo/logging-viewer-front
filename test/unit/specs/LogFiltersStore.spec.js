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

  it('ADD_LEVEL', () => {
    const state = {logFilters: {levels: ['l1', 'l2']}}
    mutations.ADD_LEVEL(state, 'l3')

    expect(state.logFilters.levels.length).to.equal(3)
    expect(state.logFilters.levels).to.contain('l3')
  })

  it('ADD_LEVELS', () => {
    const state = {logFilters: {levels: ['l1', 'l2']}}
    mutations.ADD_LEVELS(state, ['l3', 'l4', 'l5'])

    expect(state.logFilters.levels.length).to.equal(5)
  })

  it('REMOVE_LEVEL', () => {
    const state = {logFilters: {levels: ['l1', 'l2']}}
    mutations.REMOVE_LEVEL(state, 'l2')

    expect(state.logFilters.levels.length).to.equal(1)
    expect(state.logFilters.levels).to.contain('l1')
    expect(state.logFilters.levels).not.to.contain('l2')
  })

  it('REMOVE_LEVEL_NOT_EXIST', () => {
    const state = {logFilters: {levels: ['l1', 'l2']}}
    mutations.REMOVE_LEVEL(state, 'notExist')

    expect(state.logFilters.levels.length).to.equal(2)
  })

  it('TOGGLE_LEVEL_ADD', () => {
    const state = {logFilters: {levels: ['l1', 'l2']}}
    mutations.TOGGLE_LEVEL(state, 'l3')

    expect(state.logFilters.levels.length).to.equal(3)
    expect(state.logFilters.levels).to.contain('l3')
  })

  it('TOGGLE_LEVEL_REMOVE', () => {
    const state = {logFilters: {levels: ['l1', 'l2']}}
    mutations.TOGGLE_LEVEL(state, 'l1')

    expect(state.logFilters.levels.length).to.equal(1)
    expect(state.logFilters.levels).to.contain('l2')
    expect(state.logFilters.levels).not.to.contain('l1')
  })

  it('SET_MESSAGE', () => {
    const state = {logFilters: {message: ''}}
    mutations.SET_MESSAGE(state, 'my message')

    expect(state.logFilters.message).to.equal('my message')
  })

  it('SET_USER', () => {
    const state = {logFilters: {user: ''}}
    mutations.SET_USER(state, 'alex')

    expect(state.logFilters.user).to.equal('alex')
  })
})

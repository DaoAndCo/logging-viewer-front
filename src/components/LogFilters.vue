<style lang="scss">
  @import 'src/assets/scss/logFilters';
</style>

<template>

  <nav class="navbar logFilters-nav navbar-default navbar-fixed-top">
    <div class="container-fluid">
      <div class="navbar-header">
        <button type="button" class="logFilters-toggle collapsed" data-toggle="collapse" data-target="#logFilters-navbar" aria-expanded="false">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand" href="#">Filtres</a>
      </div>

      <div class="collapse" id="logFilters-navbar">
        <form class="logFilters-form" @submit.prevent>
          <div class="logFilters-section form-group">
            <label class="logFilters-label" for="logFilters-form-start">Date de début</label>
            <input id="logFilters-form-start" class="form-control" type="text" v-model="start" debounce="500">
          </div>

          <div class="logFilters-section form-group">
            <label class="logFilters-label" for="logFilters-form-end">Date de fin</label>
            <input id="logFilters-form-end" class="form-control" type="text" v-model="end" debounce="500">
          </div>

          <div class="logFilters-section form-group">
            <label class="logFilters-label" for="logFilters-form-message">Message</label>
            <input id="logFilters-form-message" class="form-control" type="text" v-model="message" debounce="500">
          </div>

          <div class="logFilters-section form-group">
            <label class="logFilters-label" for="logFilters-form-user">Utilisateur</label>
            <input id="logFilters-form-user" class="form-control" type="text" v-model="user" debounce="500">
          </div>

          <div class="logFilters-section">
            <span class="logFilters-label">Scopes</span>

            <label class="checkbox-inline" v-for="scope in scopes">
              <input type="checkbox" :value="scope" :checked="this.filters.scopes.indexOf(scope) !== -1" @change="changeScope">
              {{ scope }}
            </label>
          </div>

          <div class="logFilters-section">
            <span class="logFilters-label">Niveaux</span>

            <label class="checkbox-inline" v-for="level in levels">
              <input type="checkbox" :value="level" :checked="this.filters.levels.indexOf(level) !== -1" @change="changeLevel">
              {{ level }}
            </label>
          </div>
        </form>
      </div>
    </div>
  </nav>

</template>

<script type="text/babel">
  import { scopes, levels } from 'src/store/logs/getters.js'
  import { logFilters as filters } from 'src/store/logFilters/getters.js'
  import { toggleScope, toggleLevel, setMessage, setUser, setStart, setEnd } from 'src/store/logFilters/actions.js'

  export default {
    vuex: {
      getters: { filters, scopes, levels },
      actions: { toggleScope, toggleLevel, setMessage, setUser, setStart, setEnd }
    },

    data () {
      return {
        message: '',
        user: '',
        start: '',
        end: ''
      }
    },

    watch: {
      message (value, oldValue) {
        this.setMessage(value)
      },
      user (value, oldValue) {
        this.setUser(value)
      },
      start (value, oldValue) {
        this.setStart(value)
      },
      end (value, oldValue) {
        this.setEnd(value)
      }
    },

    methods: {
      changeScope (event) {
        this.toggleScope(event.target.value)
      },

      changeLevel (event) {
        this.toggleLevel(event.target.value)
      },

      changeMessage (event) {
        console.log('change')
      }
    }
  }

</script>
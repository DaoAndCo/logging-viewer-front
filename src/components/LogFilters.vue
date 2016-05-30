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
          <div class="form-group">
            <label class="logFilters-label" for="log-config">Application</label>
            <select id="log-config" class="form-control" v-model="selectedConfig">
              <option v-for="config in user.configs" :value="config">{{ config }}</option>
            </select>
          </div>

          <div class="logFilters-section form-group">
            <label class="logFilters-label" for="logFilters-form-start">Date de début</label>
            <input id="logFilters-form-start" class="form-control" type="text" @blur="changeFilter" @keyup.enter="changeFilter" data-action="setStart" data-get="start">
          </div>

          <div class="logFilters-section form-group">
            <label class="logFilters-label" for="logFilters-form-end">Date de fin</label>
            <input id="logFilters-form-end" class="form-control" type="text" @blur="changeFilter" @keyup.enter="changeFilter" data-action="setEnd" data-get="end">
          </div>

          <div class="logFilters-section form-group">
            <label class="logFilters-label" for="logFilters-form-message">Message</label>
            <input id="logFilters-form-message" class="form-control" type="text" @blur="changeFilter" @keyup.enter="changeFilter" data-action="setMessage" data-get="message">
          </div>

          <div class="logFilters-section form-group">
            <label class="logFilters-label" for="logFilters-form-user">Utilisateur</label>
            <input id="logFilters-form-user" class="form-control" type="text" @blur="changeFilter" @keyup.enter="changeFilter" data-action="setUser" data-get="user">
          </div>

          <div class="logFilters-section">
            <span class="logFilters-label">Scopes</span>

            <label class="checkbox-inline" v-for="scope in scopes">
              <input type="checkbox" :value="scope" :checked="this.filters.scopes.indexOf(scope) !== -1" @change="changeFilter" data-action="toggleScope" data-get="scopes">
              {{ scope }}
            </label>
          </div>

          <div class="logFilters-section">
            <span class="logFilters-label">Niveaux</span>

            <label class="checkbox-inline" v-for="level in levels">
              <input type="checkbox" :value="level" :checked="this.filters.levels.indexOf(level) !== -1" @change="changeFilter" data-action="toggleLevel" data-get="levels">
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
  import { setPage } from 'src/store/pagination/actions.js'
  import { user } from 'src/store/user/getters.js'
  import { setConfig } from 'src/store/user/actions.js'

  export default {
    vuex: {
      getters: { filters, scopes, levels, user },
      actions: { toggleScope, toggleLevel, setMessage, setUser, setStart, setEnd, setPage, setConfig }
    },

    data () {
      return {
        selectedConfig: this.user.config
      }
    },

    watch: {
      selectedConfig (value, oldValue) {
        this.setConfig(value)
        this.setPage(null)
      }
    },

    methods: {
      changeFilter (event) {
        let fn = this[event.target.dataset.action]
        let oldValue = this.filters[event.target.dataset.get]

        fn(event.target.value)

        let newValue = this.filters[event.target.dataset.get]

        if (!Object.is(oldValue, newValue)) {
          this.setPage(null)
        }
      }
    }
  }

</script>
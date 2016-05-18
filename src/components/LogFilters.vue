<template>
  <form class="logFilters form-inline" @submit.prevent>
    <div class="form-group">
      <label for="logFilters-form-message">Message</label>
      <input id="logFilters-form-message" class="form-control" type="text" v-model="message" debounce="500">
    </div>

    <div class="form-group">
      <label for="logFilters-form-user">Utilisateur</label>
      <input id="logFilters-form-user" class="form-control" type="text" v-model="user" debounce="500">
    </div>

    <div style="display: inline-block">
      <span>Scopes</span>

      <label class="checkbox-inline" v-for="scope in scopes">
        <input type="checkbox" :value="scope" :checked="this.filters.scopes.indexOf(scope) !== -1" @change="changeScope">
        {{ scope }}
      </label>
    </div>

    <div style="display: inline-block">
      <span>Niveaux</span>

      <label class="checkbox-inline" v-for="level in levels">
        <input type="checkbox" :value="level" :checked="this.filters.levels.indexOf(level) !== -1" @change="changeLevel">
        {{ level }}
      </label>
    </div>
  </form>
</template>

<script type="text/babel">
  import { scopes, levels } from 'src/store/logs/getters.js'
  import { logFilters as filters } from 'src/store/logFilters/getters.js'
  import { toggleScope, toggleLevel, setMessage, setUser } from 'src/store/logFilters/actions.js'

  export default {
    vuex: {
      getters: { filters, scopes, levels },
      actions: { toggleScope, toggleLevel, setMessage, setUser }
    },

    data () {
      return {
        message: '',
        user: ''
      }
    },

    watch: {
      message (value, oldValue) {
        this.setMessage(value)
      },
      user (value, oldValue) {
        this.setUser(value)
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
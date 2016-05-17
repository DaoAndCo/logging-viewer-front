<template>
  <div class="logFilters">
    <section>
      <h1>Scopes</h1>

      <label v-for="scope in scopes">
        <input type="checkbox" :value="scope" :checked="this.filters.scopes.indexOf(scope) !== -1" @change="changeScope">
        {{ scope }}
      </label>
    </section>

    <section>
      <h1>Niveaux</h1>

      <label v-for="level in levels">
        <input type="checkbox" :value="level" :checked="this.filters.levels.indexOf(level) !== -1" @change="changeLevel">
        {{ level }}
      </label>
    </section>
  </div>
</template>

<script type="text/babel">
  import { scopes, levels } from 'src/store/logs/getters.js'
  import { logFilters as filters } from 'src/store/logFilters/getters.js'
  import { toggleScope, toggleLevel } from 'src/store/logFilters/actions.js'

  export default {
    vuex: {
      getters: { filters, scopes, levels },
      actions: { toggleScope, toggleLevel }
    },

    methods: {
      changeScope (event) {
        this.toggleScope(event.target.value)
      },

      changeLevel (event) {
        this.toggleLevel(event.target.value)
      }
    }
  }

</script>
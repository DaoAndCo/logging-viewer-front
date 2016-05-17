<template>
  <div class="logFilters">
    <label v-for="scope in scopes">
      <input type="checkbox" :value="scope" :checked="this.logFilters.scopes.indexOf(scope) !== -1" @change="changeScope">
      {{ scope }}
    </label>
  </div>
</template>

<script type="text/babel">
  import { logFilters } from 'src/store/logFilters/getters.js'
  import { toggleScope } from 'src/store/logFilters/actions.js'

  export default {
    props: {
      scopes: Array
    },

    vuex: {
      getters: { logFilters },
      actions: { toggleScope }
    },

    methods: {
      changeScope (event) {
        this.toggleScope(event.target.value)
      }
    }
  }

</script>
<template>
  <tr v-if="isVisible">
    <td>{{ log.created }}</td>
    <td>{{ log.level }}</td>
    <td>{{ log.scope }}</td>
    <td>{{ log.user_id }}</td>
    <td>{{ log.message }}</td>
    <td>{{ log.context | json }}</td>
  </tr>
</template>

<script type="text/babel">
  import { logFilters as filters } from 'src/store/logFilters/getters.js'

  export default {
    props: {
      log: Object
    },

    vuex: {
      getters: { filters }
    },

    computed: {
      isVisible () {
        return (
            this.filters.scopes.indexOf(this.log.scope) !== -1 &&
            this.filters.levels.indexOf(this.log.level) !== -1 &&
            (!this.filters.message || this.log.message.search(new RegExp(this.filters.message, 'i')) !== -1)
            // (!this.filters.user || this.log.user.search(new RegExp(this.filters.user, 'i')) !== -1)
        )
      }
    }
  }

</script>
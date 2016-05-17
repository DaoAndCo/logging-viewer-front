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
  import { logFilters } from 'src/store/logFilters/getters.js'

  export default {
    props: {
      log: Object
    },

    vuex: {
      getters: { logFilters }
    },

    computed: {
      isVisible () {
        return (this.logFilters.scopes.indexOf(this.log.scope) !== -1)
      }
    }
  }

</script>
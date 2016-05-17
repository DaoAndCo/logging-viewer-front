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
  export default {
    props: {
      log: Object,
      filters: Object
    },

    computed: {
      isVisible () {
        return (this.filters.scopes.indexOf(this.log.scope) !== -1)
      }
    }
  }

</script>
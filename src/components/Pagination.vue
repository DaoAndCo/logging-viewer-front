<template>
  <tr>
    <td>
      <input type="text" :value="pagination.current" @change="eventChangePage">
    </td>
  </tr>
</template>

<script type="text/babel">
  import { pagination } from 'src/store/pagination/getters.js'
  import { changePage } from 'src/store/pagination/actions.js'

  export default {
    vuex: {
      getters: { pagination },
      actions: { changePage }
    },

    methods: {
      eventChangePage (event) {
        this.changePage(event.target.value)
      }
    }
  }

</script>
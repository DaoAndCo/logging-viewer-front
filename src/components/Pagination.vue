<template>
  <tr>
    <td>
      <input type="text" :value="pagination.api.page" @change="eventChangePage">
    </td>
  </tr>
</template>

<script type="text/babel">
  import { pagination } from 'src/store/pagination/getters.js'
  import { changePage, loadPage } from 'src/store/pagination/actions.js'

  export default {
    vuex: {
      getters: { pagination },
      actions: { changePage, loadPage }
    },

    props: {
      loading: Boolean
    },

    methods: {
      eventChangePage (event) {
        this.changePage(event.target.value)
        this.loadPage()
      }
    }
  }

</script>
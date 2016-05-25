<template>
  <tr>
    <td>{{ log.created }}</td>
    <td>{{ log.level }}</td>
    <td>{{ log.scope }}</td>
    <td>{{ user }}</td>
    <td>{{ log.message }}</td>
    <td>
        <button class="btn" data-toggle="modal" data-target="#myModal" @click="showContext">Afficher le contexte</button>
    </td>
  </tr>
</template>

<script type="text/babel">
  import { logFilters as filters } from 'src/store/logFilters/getters.js'
  import { setTitle, setContent } from 'src/store/modal/actions.js'

  export default {
    props: {
      log: Object
    },

    vuex: {
      getters: { filters },
      actions: { setTitle, setContent }
    },

    computed: {
      user () {
        if (!this.log.user_id) {
          return ''
        }

        let user = '[' + this.log.user_id + ']'

        if (this.log.user.firstname) {
          user += ' ' + this.log.user.firstname
        }

        if (this.log.user.lastname) {
          user += ' ' + this.log.user.lastname
        }

        return user
      }
    },

    methods: {
      showContext (event) {
        this.setTitle('Contexte')
        let context = document.createElement('pre')
        context.innerHTML = this.$options.filters.json.read(this.log.context, 4)
        this.setContent(context.outerHTML)
      }
    }
  }

</script>
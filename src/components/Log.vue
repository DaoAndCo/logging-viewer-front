<template>
  <tr>
    <td>{{ log.created }}</td>
    <td>{{ log.level }}</td>
    <td>{{ log.scope }}</td>
    <td>{{ log.user_id }}</td>
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
      isVisible () {
        return (
            this.filters.scopes.indexOf(this.log.scope) !== -1 &&
            this.filters.levels.indexOf(this.log.level) !== -1 &&
            (!this.filters.message || this.log.message.search(new RegExp(this.filters.message, 'i')) !== -1) &&
            // (!this.filters.user || this.log.user.search(new RegExp(this.filters.user, 'i')) !== -1) &&
            (!this.filters.start || this.log.date.isSameOrAfter(this.filters.start)) &&
            (!this.filters.end || this.log.date.isSameOrBefore(this.filters.end))
        )
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
<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-12">

        <div v-if="loading">
          Chargement en cours...
        </div>

        <table v-if="!loading">
          <thead>
            <tr>
              <th>Date</th>
              <th>Niveau</th>
              <th>Scope</th>
              <th>Utilisateur</th>
              <th>Message</th>
              <th>Contexte</th>
            </tr>
          </thead>

          <tbody>
            <tr is="log" :log="log" v-for="log in logs"></tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script type="text/babel">
  import LogComponent from './Log.vue'
  import { logs } from 'src/store/getters.js'
  import { getLogs } from 'src/store/actions.js'

  export default {
    props: {
      model: String
    },

    vuex: {
      getters: { logs },
      actions: { getLogs }
    },

    components: {
      log: LogComponent
    },

    data () {
      return {
        loading: true
      }
    },

    ready () {
      this
        .getLogs()
        .then(() => {
          this.loading = false
        })
    }
  }

</script>
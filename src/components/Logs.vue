<style>
  .glyphicon-refresh-animate {
    -animation: spin .7s infinite linear;
    -webkit-animation: spin2 .7s infinite linear;
  }
  @-webkit-keyframes spin2 {
    from { -webkit-transform: rotate(0deg);}
    to { -webkit-transform: rotate(360deg);}
  }
  @keyframes spin {
    from { transform: scale(1) rotate(0deg);}
    to { transform: scale(1) rotate(360deg);}
  }
</style>

<template>
  <log-filters :filters="filters" :scopes="scopes"></log-filters>

  {{ filters | json }}

  <div class="row">
    <div class="col-md-12">

      <div v-if="loading">
        <span class="glyphicon glyphicon-refresh glyphicon-refresh-animate"></span>
        Chargement en cours...
      </div>

      <table class="table table-striped" v-if="!loading">
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
          <tr is="log" :log="log" :filters="filters" v-for="log in logs"></tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script type="text/babel">
  import _ from 'lodash'
  import LogComponent from './Log.vue'
  import LogFiltersComponent from './LogFilters.vue'
  import { logs } from 'src/store/getters.js'
  import { getLogs } from 'src/store/actions.js'

  export default {
    vuex: {
      getters: { logs },
      actions: { getLogs }
    },

    components: {
      log: LogComponent,
      logFilters: LogFiltersComponent
    },

    data () {
      return {
        loading: true,
        scopes: [],
        filters: {
          scopes: [],
          levels: [],
          start: null,
          end: null,
          user: '',
          message: ''
        }
      }
    },

    ready () {
      this
        .getLogs()
        .then(() => {
          this.loading = false

          this.scopes = this.logs.map(function (a) { return a.scope })
          this.scopes = _.uniq(this.scopes)
          this.filters.scopes = this.scopes
          // this.filters.scopes = ['ip', 'request']
        })
    }
  }

</script>
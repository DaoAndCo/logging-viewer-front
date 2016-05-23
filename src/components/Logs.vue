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
  <log-filters></log-filters>

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
          <tr is="log" :log="log" v-for="log in logs"></tr>
        </tbody>

        <tfoot>
          <tr is="pagination" :loading.sync="loading"></tr>
        </tfoot>
      </table>
    </div>
  </div>
</template>

<script type="text/babel">
  import LogComponent from './Log.vue'
  import LogFiltersComponent from './LogFilters.vue'
  import PaginationComponent from './Pagination.vue'
  import { logs, scopes, levels } from 'src/store/logs/getters.js'
  import { loadLogs } from 'src/store/logs/actions.js'
  import { logFilters } from 'src/store/logFilters/getters.js'
  import { addScopes, addLevels } from 'src/store/logFilters/actions.js'
  import { pagination } from 'src/store/pagination/getters.js'
  import { setPaginationFunction, loadPage } from 'src/store/pagination/actions.js'

  export default {
    vuex: {
      getters: { logs, logFilters, scopes, levels, pagination },
      actions: { loadLogs, addScopes, addLevels, setPaginationFunction, loadPage }
    },

    components: {
      log: LogComponent,
      logFilters: LogFiltersComponent,
      pagination: PaginationComponent
    },

    data () {
      return {
        loading: true
      }
    },

    // computed: {
    //   logPage () {
    //     return this.pagination.items[this.pagination.currentIndex]
    //   }
    // },

    ready () {
      this.setPaginationFunction(this.loadLogs)
      this.loadPage()
        .then(() => {
          this.loading = false
        })
      // this
      //   .getLogs()
      //   .then(() => {
      //     this.loading = false

      //     this.addScopes(this.scopes)
      //     this.addLevels(this.levels)
      //     this.paginate(this.logs)
      //   })
    }
  }

</script>
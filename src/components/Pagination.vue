<style lang="scss">
  @import 'src/assets/scss/pagination';
</style>

<template>
  <tr>
    <td colspan="6">
      <nav class="pagination-nav">
        <ul class="pagination">
          <li :class="[pagination.api.prevPage ? '' : classDisabled]">
            <a href="#" aria-label="Previous" data-can="{{ [pagination.api.prevPage ? 1 : 0] }}" data-page="{{ pagination.api.page - 1 }}" @click.prevent="eventChangePageByLink">
              <span aria-hidden="true">&laquo;</span>
            </a>
          </li>

          <li v-for="page in pages" track-by="$index" :class="[page == pagination.api.page ? classDisabled : '']">
            <a href="#" data-page="{{ page }}" data-can="{{ page === '...' ? 0 : 1 }}" @click.prevent="eventChangePageByLink">{{ page }}</a>
          </li>

          <li :class="[pagination.api.nextPage ? '' : classDisabled]">
            <a href="#" aria-label="Next" data-page="{{ pagination.api.page + 1 }}" data-can="{{ [pagination.api.nextPage ? 1 : 0] }}" @click.prevent="eventChangePageByLink">
              <span aria-hidden="true">&raquo;</span>
            </a>
          </li>
        </ul>
      </nav>

      <input class="pagination-input form-control" type="text" :value="pagination.api.page" @change="eventChangePage">
    </td>
  </tr>
</template>

<script type="text/babel">
  import _ from 'lodash'
  import { pagination } from 'src/store/pagination/getters.js'
  import { changePage, loadPage } from 'src/store/pagination/actions.js'

  export default {
    vuex: {
      getters: { pagination },
      actions: { changePage, loadPage }
    },

    props: {
      loading: Boolean,
      offset: {type: Number, default: 2}
    },

    data () {
      return {
        classDisabled: 'disabled',
        pages: [1]
      }
    },

    methods: {
      eventChangePage (event) {
        this.executeChangePage(event.target.value)
      },

      eventChangePageByLink (event) {
        if (event.currentTarget.dataset.can === '0') {
          return false
        }

        this.executeChangePage(event.currentTarget.dataset.page)
      },

      executeChangePage (value) {
        this.changePage(value)
        this.loadPage()
          .then((response) => {
            this.pages = [1]

            let lastPages = []
            let nextPages = []

            if (this.pagination.api.prevPage) {
              let prev = this.pagination.api.page - 1

              for (let i = prev; i > prev - this.offset; i--) {
                if (i > 1) {
                  lastPages.unshift(i)
                }
              }

              if (lastPages[0] > 2) {
                this.pages.push('...')
              }

              this.pages = this.pages.concat(lastPages)
              this.pages.push(this.pagination.api.page)
            }

            if (this.pagination.api.nextPage) {
              let next = this.pagination.api.page + 1

              for (let i = next; i < next + this.offset; i++) {
                if (i < this.pagination.api.pageCount) {
                  nextPages.push(i)
                }
              }

              if (_.last(nextPages) < (this.pagination.api.pageCount - 1)) {
                nextPages.push('...')
              }

              nextPages.push(this.pagination.api.pageCount)
              this.pages = this.pages.concat(nextPages)
            }
          })
      }
    }
  }

</script>
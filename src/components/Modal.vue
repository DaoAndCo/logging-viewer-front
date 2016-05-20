<template>
  <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
          <h4 class="modal-title" id="myModalLabel">{{ modal.title }}</h4>
        </div>
        <div class="modal-body">
          {{{ modal.content }}}
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-default" data-dismiss="modal">Fermer</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/babel">
  import { modal } from 'src/store/modal/getters.js'

  export default {
    vuex: {
      getters: { modal }
    }
  }

</script>
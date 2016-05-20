<style lang="scss">
  @import 'src/assets/scss/generic';
</style>

<template>
  <div class="container-fluid">
    <logs></logs>
  </div>

  <modal></modal>
</template>

<script type="text/babel">
  import LogsComponent from './Logs.vue'
  import ModalComponent from './Modal.vue'

  export default {
    components: {
      logs: LogsComponent,
      modal: ModalComponent
    }
  }

</script>
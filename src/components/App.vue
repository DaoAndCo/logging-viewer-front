<style lang="scss">
  @import 'src/assets/scss/generic';
</style>

<template>
  <div class="container-fluid">
    <logs></logs>
  </div>
</template>

<script type="text/babel">
  import LogsComponent from './Logs.vue'

  export default {
    components: {
      logs: LogsComponent
    }
  }

</script>
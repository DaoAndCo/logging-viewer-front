<style lang="scss">
  @import 'src/assets/scss/generic';
</style>

<template>
  <div class="container-fluid">
    <login v-if="!isLogged"></login>
    <logs v-if="isLogged"></logs>
  </div>

  <modal></modal>
</template>

<script type="text/babel">
  import LogsComponent from './Logs.vue'
  import LoginComponent from './Login.vue'
  import ModalComponent from './Modal.vue'
  import { isLogged } from 'src/store/user/getters.js'
  import { checkLogin } from 'src/store/user/actions.js'

  export default {
    vuex: {
      getters: { isLogged },
      actions: { checkLogin }
    },

    components: {
      logs: LogsComponent,
      login: LoginComponent,
      modal: ModalComponent
    },

    ready () {
      this.checkLogin()
    }
  }

</script>
<style lang="scss">
  @import 'src/assets/scss/login';
</style>

<template>
  <div class="row">
    <div class="col-md-4 col-md-offset-4">

      <form class="login-form" @submit.prevent="login">
        <legend>Connexion</legend>

        <div class="form-group">
          <label for="form-login">Identifiant</label>
          <input type="text" class="form-control" id="form-login" v-model="username">
        </div>

        <div class="form-group">
          <label for="form-password">Mot de passe</label>
          <input type="password" class="form-control" id="form-password" v-model="password">
        </div>

        <button type="submit" class="btn btn-primary center-block">Se connecter</button>
      </form>

    </div>
  </div>
</template>

<script type="text/babel">
  import { login as loginAction } from 'src/store/user/actions.js'

  export default {
    vuex: {
      getters: { },
      actions: { loginAction }
    },

    data () {
      return {
        username: null,
        password: null
      }
    },

    methods: {
      login (event) {
        this.loginAction(this.username, this.password)
      }
    }
  }

</script>
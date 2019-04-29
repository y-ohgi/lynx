<template>
  <h1>Signin...</h1>
</template>

<script>
export default {
  mounted() {
    const token = require('~/utils/auth').getToken('slack_access_token')

    // TODO: set token to localstorage
    this.$store.commit('SET_TOKEN', token)
    this.$router.push('/')
  }
}
</script>

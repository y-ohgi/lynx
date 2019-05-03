<template>
  <b-container class="signin-wrapper">
    <b-button
      href="https://slack.com/oauth/authorize?client_id=4791444239.564820461296&scope=channels:history+channels:read&redirect_uri=http://localhost:3000/api/auth"
      >slack login</b-button
    >
  </b-container>
</template>

<script>
export default {
  created() {
    if (this.$store.getters.isAuthenticated === true) {
      this.$router.push('/timeline')
    }
  }
}
</script>

<style>
.signin-wrapper {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>

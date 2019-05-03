<template>
  <p>Signin...</p>
</template>

<script>
import { getTokenFromDocumentCookie, setToken } from '~/utils/auth'

export default {
  mounted() {
    const token = getTokenFromDocumentCookie()

    setToken(token)

    // TODO: set token to localstorage
    this.$store.commit('SET_TOKEN', token)
    this.$router.push('/timeline')
  }
}
</script>

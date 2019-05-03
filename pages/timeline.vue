<template>
  <div class="mt-1">
    <b-card>
      <b-card-text>hoge</b-card-text>
    </b-card>
  </div>
</template>

<script>
export default {
  created() {
    if (this.$store.getters.isAuthenticated === false) {
      this.$router.push('/')
    }

    //XXX: const token = getToken()

    fetch(`https://slack.com/api/conversations.info?token=${token}`)
      .then(res => res.json())
      .then(json => {
        console.log(json)

        const socket = new WebSocket(json.url)

        socket.addEventListener('message', function(event) {
          console.log(event.data)
        })
      })
  }
}
</script>

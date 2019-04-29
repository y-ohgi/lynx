<template>
  <section class="container">
    <b-button>hoge</b-button>
    <a
      href="https://slack.com/oauth/authorize?client_id=4791444239.564820461296&scope=channels:history+channels:read&redirect_uri=http://localhost:3000/api/auth"
    >
      hoge</a
    >
  </section>
</template>

<script>
export default {
  components: {}
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>

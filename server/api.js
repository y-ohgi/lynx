const axios = require('axios')
const express = require('express')
const router = express.Router()

const config = require('../nuxt.config.js')

router.get('/health', (req, res, next) => {
  res.send('ok')
})

router.get('/auth', (req, res, next) => {
  const reqBody = {
    code: req.param('code'),
    client_id: config.env.SLACK_CLIENT_ID,
    client_secret: config.env.SLACK_CLIENT_SECRET,
    redirect_uri: 'http://localhost:3000/api/auth'
  }

  console.log(req)

  const reqParams = new URLSearchParams()
  reqParams.append('client_id', config.env.SLACK_CLIENT_ID)
  reqParams.append('client_secret', config.env.SLACK_CLIENT_SECRET)
  reqParams.append('code', req.param('code'))
  reqParams.append('redirect_uri', 'http://localhost:3000/api/auth')

  axios
    .post('https://slack.com/api/oauth.access', reqParams)
    .then(response => {
      console.log(response)

      if (!response.data.access_token) throw response.data.error

      res.cookie('slack_access_token', response.data.access_token)
      res.redirect(`/signed-in`)
    })
    .catch(err => {
      next(err)
    })
})

module.exports = router

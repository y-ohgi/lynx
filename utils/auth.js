import Cookie from 'js-cookie'

export const setToken = token => {
  if (process.server) return
  window.localStorage.setItem('slack_access_token', token)
  Cookie.set('slack_access_token', token)
}

export const getToken = (req = {}) => {
  const cookie = process.server
    ? getTokenFromCookie(req)
    : getTokenFromDocumentCookie()
}

export const getTokenFromDocumentCookie = () => {
  return document.cookie
    .split(';')
    .find(c => c.trim().startsWith('slack_access_token' + '='))
    .split('=')[1]
}

export const getTokenFromCookie = req => {
  if (!req.headers.cookie) return
  return req.headers.cookie
    .split(';')
    .find(c => c.trim().startsWith('slack_access_token' + '='))
    .split('=')[1]
}

export const getTokenFromLocalStorage = () => {
  return window.localStorage.slack_access_token
}

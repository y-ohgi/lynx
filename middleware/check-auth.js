import { getTokenFromCookie, getTokenFromLocalStorage } from '~/utils/auth'

export default function({ store, req }) {
  const token = process.server
    ? getTokenFromCookie(req)
    : getTokenFromLocalStorage()
  store.commit('SET_TOKEN', token)
}

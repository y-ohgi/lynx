import { getTokenFromCookie } from '~/utils/auth'

export const state = () => {
  return {
    token: ''
  }
}

export const mutations = {
  SET_TOKEN(state, token) {
    state.token = token
  }
}

export const getters = {
  isAuthenticated(state) {
    return !!state.token
  }
}

export const actions = {
  nuxtServerInit({ commit }, { req }) {
    const token = getTokenFromCookie(req)
    commit('SET_TOKEN', token)
  }
}

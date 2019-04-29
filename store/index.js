export const state = () => {
  return {
    token: ''
  }
}

export const mutations = {
  SET_TOKEN(state, token) {
    state.token = token || null
  }
}

export const getters = {
  isAuthenticated(state) {
    return !!state.token
  }
}

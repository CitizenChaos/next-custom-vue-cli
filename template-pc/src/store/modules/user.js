const state = {
  userInfo: {}
}

const mutations = {
  SET_USER_INFO: (state, val) => {
    state.userInfo = val
  }
}

const actions = {
  async getUserInfo({ commit }) {
    setTimeout(() => {
      let data = {
        pkUser: '123'
      }
      commit('SET_USER_INFO', data)
    }, 200)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

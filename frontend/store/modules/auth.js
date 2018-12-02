import * as R from 'ramda'
import * as api from '@/api'
import * as types from '../mutationTypes'
const log = R.tap(console.log);

const state = {
  token: null
}

const getters = {
  token: state => state.token,
  isAuthenticated: state => state.token != null
}

const mutations = {
  [types.CLEAR_TOKEN]: state => state.token = null,
  [types.SET_TOKEN]: (state, payload) => {
    state.token = payload;
  }
}

const actions = {

  initAuth: ({ commit, dispatch }, req) => {
   
    if (process.client) {
      const token = localStorage.getItem('token')
      if (token) commit(types.SET_TOKEN, token);
    }
  },
  signUp: async ({ commit, dispatch }, payload) => {
    console.log('sign up')
    try {
      const resp = await api.signUp(payload)
      dispatch('signIn', payload);
    } catch (err) {
      console.error(err);
    }
  },
  signIn: async ({ commit, dispatch }, payload) => {
    console.log('sign in')

    try {
      const resp = await api.signIn(payload)
      const data = resp.data
      commit(types.SET_TOKEN, data.token);

      if (process.client) {
        localStorage.setItem('token', data.token);
      }
      $nuxt.$router.push('/')
    } catch (err) {
      console.error(err);
    }
  },
  logout: ({ commit, dispatch }) => {
    commit(types.CLEAR_TOKEN);
    if (process.client) {
      localStorage.removeItem('token')
    }
    $nuxt.$router.replace('/user/auth')
  }

}

export default {
  state,
  getters,
  mutations,
  actions
}

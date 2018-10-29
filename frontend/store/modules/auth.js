import * as R from 'ramda'
import * as api from '@/api'
import * as types from '../mutationTypes'
import Cookie from 'js-cookie'
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
    if (req) {
      if (!req.headers.cookie) {
        return;
      }
      const jwtCookie = req.headers.cookie.split(';').find(c => c.trim().startsWith('jwt='));
      if (!jwtCookie) {
        return;
      }
      const token = jwtCookie.split('=')[1];
      const expirationDate = req.headers.cookie.split(';').find(c => c.trim().startsWith('tokenExpiration=')).split('=')[1];

      if (new Date().getTime() > +expirationDate || !expirationDate || !token) {
        dispatch('logout');
        return;
      }
      commit(types.SET_TOKEN, token);
    }
    else if (process.client) {
      const token = localStorage.getItem('token')
      const expirationDate = localStorage.getItem('tokenExpiration');

      if (new Date().getTime() > +expirationDate || !expirationDate || !token) {
        dispatch('logout');
        return;
      }

      commit(types.SET_TOKEN, token);
    }
  },
  signUp: async ({ commit }, payload) => {
    try {
      const resp = await api.signUp(payload)
      const data = resp.data;

      // commit(types.SET_TOKEN, data.idToken);
    } catch (err) {
      console.error(err);
    }
  },
  signIn: async ({ commit, dispatch }, payload) => {
    try {
      const resp = await api.signIn(payload)
      const data = resp.data
      commit(types.SET_TOKEN, data.idToken);

      const expirationDate = new Date().getTime() + Number.parseInt(data.expiresIn) * 1000

      if (process.client) {
        localStorage.setItem('token', data.idToken);
        localStorage.setItem('tokenExpiration', expirationDate);
      }

      Cookie.set('jwt', data.idToken)
      Cookie.set('tokenExpiration', expirationDate);

      // return api.postApi({data: 'Authenticated message'})
    } catch (err) {
      console.error(err);
    }
  },
  logout: ({ commit, dispatch }) => {
    commit(types.CLEAR_TOKEN);
    if (process.client) {
      localStorage.removeItem('token')
      localStorage.removeItem('tokenExpiration')
    }
    Cookie.remove('jwt')
    Cookie.remove('tokenExpiration');
  }

}

export default {
  state,
  getters,
  mutations,
  actions
}

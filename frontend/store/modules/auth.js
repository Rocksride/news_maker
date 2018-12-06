import * as R from 'ramda'
import * as api from '@/api'
import * as types from '../mutationTypes'
import axios from 'axios'
const log = R.tap(console.log);

const state = {
  token: null,
  user: {
    userId: null,
    login: null,
    email: null
  },
  users: null
}

const getters = {
  users: state => state.users.filter(el => el.login),
  token: state => state.token,
  isAuthenticated: state => state.token != null,
  user: state => state.user,
  getLoginName: state => id => {
    const temp = state.users.find(el => Number(el.id) === id)
    if (!temp) return ''
    return  temp.login || ''
  }
}

const mutations = {

  [types.SET_ALL_USERS]: (state, payload) => state.users = payload,
  [types.CLEAR_TOKEN]: state => state.token = null,
  [types.CLEAR_USER]: state => state.user = {userId: null, login: null, email: null },
  [types.SET_TOKEN]: (state, payload) => {
    state.token = payload;
  },
  [types.SET_USER]: (state, payload) => {
    state.user = {
      login: payload.login,
      email: null,
      userId: payload.id
    }
  }
}

const actions = {
  nuxtServerInit: async (vuexContent, nuxtContent) => {
    try {
      // if (!process.client) {
        const {data: users} = await  api.getUsers()
        vuexContent.commit(types.SET_ALL_USERS, users)
      // }
    } catch(err) {
      console.log(err);
    }
  },
  initAuth: ({ commit, dispatch }, req) => {
   
    if (process.client) {
      const token = localStorage.getItem('token')
      if (token) commit(types.SET_TOKEN, token);
    }
  },
  signUp: async ({ commit, dispatch }, payload) => {
    try {
      const resp = await api.signUp(payload)
      dispatch('signIn', payload);
    } catch (err) {
      console.error(err);
    }
  },
  signIn: async ({ commit, dispatch, getters }, payload) => {
    try {
      commit(types.SET_LOADER_VISIBILITY, true);
      const {data: answer} = await api.signIn(payload)
      commit(types.SET_TOKEN, answer.token);
      axios.defaults.headers.common['Authorization'] = `Bearer ${answer.token}`;
      
      if (process.client) {
        localStorage.setItem('token', answer.token);
      }
      const {data: usersList} = await api.getUsers();
      commit(types.SET_ALL_USERS, usersList);
      // const usersList = getters.users
      const currentUser = usersList.find(el => el.login === payload.login)
      commit(types.SET_USER, currentUser)
      commit(types.SET_LOADER_VISIBILITY, false);

      $nuxt.$router.push('/')
      console.group('toast');
    // console.log(this.$toasted);
    // console.log($toasted);
    // console.groupEnd('toast');
      // this.$toast.success('Successfully authenticated')
    } catch (err) {
      console.error(err);
    }
  },
  logout: ({ commit, dispatch }) => {
    commit(types.CLEAR_TOKEN);
    commit(types.CLEAR_USER);
    if (process.client) {
      localStorage.removeItem('token')
    }
    axios.defaults.headers.common['Authorization'] = null;

    $nuxt.$router.replace('/user/auth')
  }

}

export default {
  state,
  getters,
  mutations,
  actions
}

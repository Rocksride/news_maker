import * as types from '../mutationTypes'
import * as api from '@/api'
const state = {
  articles: [],
  numbers: Array.from({length:20}, (_, i) => i+1)

}

const getters = {
  articles: state => state.articles,
  numbers: state => state.numbers
}

const mutations = {
  [types.SET_ARTICLES]: (state, payload) => state.articles = payload,
  [types.ADD_ARTICLES]: (state, payload) => state.articles.push(payload),
  [types.REMOVE_ARTICLES]: (state, payload) => state.articles = state.articles.filter(el => el.id !== payload.id),
  [types.UPDATE_ARTICLES]: (state, payload) => state.articles = state.articles.map(el => el.id === payload.id ? payload : el)
}

const actions = {
  // nuxtServerInit: (vuexContext, nuxtContext) => {
  //   if (!process.client) { }
  //   return api.getPosts()
  //     // .then(helpers.getValuesFrom)
  //     .then(data => vuexContext.commit(types.SET_ARTICLES, data))
  //     .catch(nuxtContext.error)
  // },
  // savePost: async ({ commit, dispatch, getters }, payload) => {
  //   try {
  //     const obj = {
  //       ...payload,
  //       updatedDate: new Date()
  //     }
  //     const response = await api.savePost(obj, getters.token);
  //     console.log(response.status);
  //     commit('addPost', {
  //       ...obj,
  //       id: response.data.name
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // },
  // updatePost: async ({ commit, getters, dispatch }, payload) => {
  //   try {
  //     const resp = await api.updatePost(payload, getters.token);
  //     commit('updatePost', payload)
  //     console.log(resp.status);
  //   } catch (err) {
  //     console.error(err)
  //   }
  // },
  addArticle: ({commit}, payload) => {
    commit(types.ADD_ARTICLES, payload);
  }
}

export default {
    state,
    getters,
    mutations,
    actions
}

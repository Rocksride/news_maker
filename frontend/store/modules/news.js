import * as types from '../mutationTypes'
const state = {
  news: []
}

const getters = {
  news: state => state.news
}

const mutations = {
  [types.SET_NEWS]: (state, payload) => state.news = payload,
  [types.ADD_NEWS]: (state, payload) => state.news.push(payload),
  [types.REMOVE_NEWS]: (state, payload) => state.news = state.news.filter(el => el.id !== payload.id),
  [types.UPDATE_NEWS]: (state, payload) => state.news = state.news.map(el => el.id === payload.id ? payload : el)
}

const actions = {
  nuxtServerInit: (vuexContext, nuxtContext) => {
    if (!process.client) { }
    return api.getNews()
      // .then(helpers.getValuesFrom)
      .then(data => vuexContext.commit(types.SET_NEWS, data))
      .catch(nuxtContext.error)
  },
  savePost: async ({ commit, dispatch, getters }, payload) => {
    try {
      const obj = {
        ...payload,
        updatedDate: new Date()
      }
      const response = await api.savePost(obj, getters.token);
      console.log(response.status);
      commit('addPost', {
        ...obj,
        id: response.data.name
      });
    } catch (error) {
      console.log(error);
    }
  },
  updatePost: async ({ commit, getters, dispatch }, payload) => {
    try {
      const resp = await api.updatePost(payload, getters.token);
      commit('updatePost', payload)
      console.log(resp.status);
    } catch (err) {
      console.error(err)
    }
  },
}

export default {
    state,
    getters,
    mutations,
    actions
}

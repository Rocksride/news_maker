import * as types from '../mutationTypes'
import * as api from '@/api'
const state = {
  articles: []
}

const getters = {
  latestArticle: state => state.articles[0],
  articles: state => state.articles,
  getArticle: state => id => state.articles.find(el => el.id === id),
}

const mutations = {
  [types.SET_ARTICLES]: (state, payload) => state.articles = payload,
  [types.ADD_ARTICLE]: (state, payload) => state.articles.push(payload),
  [types.REMOVE_ARTICLE]: (state, payload) => state.articles = state.articles.filter(el => el.id !== payload.id),
  [types.UPDATE_ARTICLE]: (state, payload) => state.articles = state.articles.map(el => el.id === payload.id ? payload : el)
}

const actions = {
  nuxtServerInit: async (vuexContent, nuxtContent) => {
    try {
      // if (!process.client) {
        const {data: articles} = await  api.getArticles()
        console.log(articles)
        vuexContent.commit(types.SET_ARTICLES, articles)
      // }
    } catch(err) {
      console.log(error);
    }
  },
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
  addArticle: async ({commit}, payload) => {
    try {
      const res = await api.postArticle(payload);
      console.log(res)
      // commit(types.ADD_ARTICLE, payload);
      dispatch('initArticles')
    } catch(err) {
      console.error(err);
    }
  },
  initArticles: async ({commit}) => {
    try {
      await api.getArticles()
      
      // console.log({articles})
    } catch (err) {
      console.error(err)
    }
  }
}

export default {
    state,
    getters,
    mutations,
    actions
}

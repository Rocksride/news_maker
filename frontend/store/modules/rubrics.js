import * as types from '../mutationTypes'
import * as api from '@/api'
const state = {
  rubrics: []
}

const getters = {
  rubrics: state => state.rubrics.filter(el => el.title),
  getRubric: state => id => state.rubrics.find(el => el.id === id),
}

const mutations = {
  [types.SET_RUBRICS]: (state, payload) => state.rubrics = payload,
  // [types.ADD_TAG]: (state, payload) => state.articles.push(payload),
  // [types.REMOVE_TAG]: (state, payload) => state.articles = state.articles.filter(el => el.id !== payload.id),
  // [types.UPDATE_TAG]: (state, payload) => state.articles = state.articles.map(el => el.id === payload.id ? payload : el)
}

const actions = {
  nuxtServerInit: async (vuexContent, nuxtContent) => {
    try {
      // if (!process.client) {
        const {data: rubrics} = await  api.getRubrics()
        console.log(rubrics)
        vuexContent.commit(types.SET_RUBRICS, rubrics)
      // }
    } catch(err) {
      console.log(err);
    }
  },
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
  addRubric: ({commit}, payload) => {
    commit(types.ADD_TAG, payload);
  }
}

export default {
    state,
    getters,
    mutations,
    actions
}

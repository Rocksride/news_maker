import * as types from '../mutationTypes'
import * as api from '@/api'
const state = {
  tags: []
}

const getters = {
  tags: state => state.tags,
  getTag: state => id => state.tags.find(el => el.id === id),
}

const mutations = {
  [types.SET_TAGS]: (state, payload) => state.tags = payload,
  // [types.ADD_TAG]: (state, payload) => state.articles.push(payload),
  // [types.REMOVE_TAG]: (state, payload) => state.articles = state.articles.filter(el => el.id !== payload.id),
  // [types.UPDATE_TAG]: (state, payload) => state.articles = state.articles.map(el => el.id === payload.id ? payload : el)
}

const actions = {
  nuxtServerInit: async (vuexContent, nuxtContent) => {
    try {
      // if (!process.client) {
        const {data: tags} = await  api.getTags()
        // console.log(tags)
        vuexContent.commit(types.SET_TAGS, tags)
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

  addTag: ({commit}, payload) => {
    commit(types.ADD_TAG, payload);
  }
}

export default {
    state,
    getters,
    mutations,
    actions
}

import * as types from '../mutationTypes'
import * as api from '@/api'
const state = {
  rubrics: [
    {
        "description": "random rubric 1",
        "id": 1,
        "title": "rubric 1"
    },
    {
        "description": "random rubric 2",
        "id": 2,
        "title": "rubric 2"
    }
]
}

const getters = {
  rubrics: state => state.rubrics,
  getRubric: state => id => state.rubrics.find(el => el.id === id),
}

const mutations = {
  [types.SET_RUBRICS]: (state, payload) => state.articles = payload,
  // [types.ADD_TAG]: (state, payload) => state.articles.push(payload),
  // [types.REMOVE_TAG]: (state, payload) => state.articles = state.articles.filter(el => el.id !== payload.id),
  // [types.UPDATE_TAG]: (state, payload) => state.articles = state.articles.map(el => el.id === payload.id ? payload : el)
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

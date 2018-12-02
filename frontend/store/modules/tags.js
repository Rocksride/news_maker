import * as types from '../mutationTypes'
import * as api from '@/api'
const state = {
  tags: [
    {
        "id": 1,
        "title": "tag1"
    },
    {
        "id": 2,
        "title": "rubric 1"
    },
    {
        "id": 3,
        "title": "work"
    },
    {
        "id": 4,
        "title": "study"
    },
    {
        "id": 5,
        "title": "sport"
    },
    {
        "id": 6,
        "title": "food"
    },
    {
        "id": 7,
        "title": "enjoy"
    },
    {
        "id": 8,
        "title": "passion"
    }
]
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

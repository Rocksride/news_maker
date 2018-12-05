import * as types from '../mutationTypes'
const state = {
  circleLoaderVisibility: false,
  transitionLoaderVisibility: false,

  // chosenArticleId: 1
}

const getters = {
  // articleId: state => state.chosenArticleId,
  circleLoaderVisibility: state => state.circleLoaderVisibility,
  transitionLoaderVisibility: state => state.transitionLoaderVisibility
}

const mutations = {
  // [types.UPDATE_CURRENT_ARTICLE_ID]: (state, payload) => state.chosenArticleId = payload,
  [types.SET_CIRCLE_LOADER_VISIBILITY]: (state, payload) => state.circleLoaderVisibility = payload,
  [types.SET_TRANSITION_LOADER_VISIBILITY]: (state, payload) => state.transitionLoaderVisibility = payload
}

const actions = {
  // updateCurrentId({commit}, payload) {
  //   commit(types.UPDATE_CURRENT_ARTICLE_ID, payload)
  // }
}

export default {
    state,
    getters,
    mutations,
    actions
}

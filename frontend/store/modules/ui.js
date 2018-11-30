import * as types from '../mutationTypes'
const state = {
  circleLoaderVisibility: false,
  transitionLoaderVisibility: false
}

const getters = {
  circleLoaderVisibility: state => state.circleLoaderVisibility,
  transitionLoaderVisibility: state => state.transitionLoaderVisibility
}

const mutations = {
  [types.SET_CIRCLE_LOADER_VISIBILITY]: (state, payload) => state.circleLoaderVisibility = payload,
  [types.SET_TRANSITION_LOADER_VISIBILITY]: (state, payload) => state.transitionLoaderVisibility = payload
}

const actions = {

}

export default {
    state,
    getters,
    mutations,
    actions
}

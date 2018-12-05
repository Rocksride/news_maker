import * as types from '../mutationTypes'
const state = {
  circleLoaderVisibility: false,
  transitionLoaderVisibility: false,
  searchPanelVisibility: false,
}

const getters = {
  searchPanelVisibility: state => state.searchPanelVisibility,
  circleLoaderVisibility: state => state.circleLoaderVisibility,
  transitionLoaderVisibility: state => state.transitionLoaderVisibility
}

const mutations = {
  [types.SET_SEARCH_PANEL_VISIBILITY]: (state, payload) => state.searchPanelVisibility = payload,
  [types.SET_CIRCLE_LOADER_VISIBILITY]: (state, payload) => state.circleLoaderVisibility = payload,
  [types.SET_TRANSITION_LOADER_VISIBILITY]: (state, payload) => state.transitionLoaderVisibility = payload
}

const actions = {
  toggleSearchPanelVisibility: ({commit, state}) => {
    commit(types.SET_SEARCH_PANEL_VISIBILITY, !state.searchPanelVisibility)
  },
  setSearchPanelVisibility: ({commit}, payload) => {
    commit(types.SET_SEARCH_PANEL_VISIBILITY, payload)
  },
}

export default {
    state,
    getters,
    mutations,
    actions
}

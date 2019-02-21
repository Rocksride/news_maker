import * as types from '../mutationTypes.js'

const state = {
  notifications: [
    // {type: 'error', message: 'destroye me', id: -3},
    // {type: 'error', message: 'destroye me', id: -2},
    // {type: 'error', message: 'destroye me', id: -1}
  ],
  timeout: 5000
}

let notificationId = 1

const mutations = {
  [types.PUSH_NOTIFICATION]: (state, payload) => {
    state.notifications.push({
      ...payload,
      id: notificationId++
    })
  },
  [types.REMOVE_NOTIFICATION]: (state, payload) => {
    state.notifications = state.notifications.filter(n => n.id !== payload.id)
  }
}

const actions = {
  pushNotification: ({ commit, state }, payload) => {
    commit(types.PUSH_NOTIFICATION, payload)
   
  },
  removeNotification: ({ commit }, payload) => {
    commit(types.REMOVE_NOTIFICATION, payload)
  }
}

export default { state, mutations, actions }
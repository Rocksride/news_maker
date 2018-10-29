import * as types from '../mutationTypes.js'
const state = {
  color: null
}

const getters = {
  color: state => state.color
}

const mutations = {
  [types.SET_COLOR_THEME]: (state, newTheme) => state.color = newTheme
}

const actions = {
  initColorTheme: ({ dispatch }) => {
    const colorTheme = localStorage.getItem('colorTheme') || 'light'
    dispatch('setColorTheme')
  },
  setColorTheme: ({ commit }, newTheme) => {
    localStorage.setItem('colorTheme', newTheme);
    commit(types.SET_COLOR_THEME, newTheme)
    document.documentElement.setAttribute('data-theme', newTheme)
  },
  toggleColorTheme: ({ commit, dispatch }) => {
    const html = document.documentElement
    if (html.classList.contains('theme-in-transition')) return
    html.classList.add('theme-in-transition')
    const oldTheme = localStorage.getItem('colorTheme') || 'light'
    const newTheme = oldTheme === 'light'
      ? 'dark'
      : 'light'

    dispatch('setColorTheme', newTheme)
    setTimeout(() => {
      html.classList.remove('theme-in-transition')
    }, 750);
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}

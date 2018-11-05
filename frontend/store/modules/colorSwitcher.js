import * as types from '../mutationTypes.js'

const state = {
  colorTheme: null,
  themes: ['darkgreen', 'sera', 'harmony', 'olive'],
  defaultColorTheme: 'darkgreen'
}

const getters = {
  colorTheme: state => state.colorTheme
}

const mutations = {
  [types.SET_COLOR_THEME]: (state, newTheme) => state.colorTheme = newTheme
}

const actions = {
  initColorTheme: ({ dispatch, state}) => {
    console.log('initiating color theme');
    const colorTheme = localStorage.getItem('colorTheme') || state.defaultColorTheme
    console.log('color theme is ' + colorTheme);
    dispatch('setColorTheme', colorTheme)
  },
  setColorTheme: ({ commit }, newTheme) => {
    localStorage.setItem('colorTheme', newTheme);
    commit(types.SET_COLOR_THEME, newTheme)
    document.documentElement.setAttribute('data-theme', newTheme)
  },
  toggleColorTheme: ({ commit, dispatch }, newTheme) => {
    const oldTheme = localStorage.getItem('colorTheme') || 'light'
    if (oldTheme === newTheme) return;

    const html = document.documentElement
    if (html.classList.contains('theme-in-transition')) return
    html.classList.add('theme-in-transition')

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

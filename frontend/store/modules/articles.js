import * as types from '../mutationTypes'
import * as api from '@/api'
const state = {
  articles: [],
  filteredArticles: [],
  filters: {
    tagsIds: [],
    rubricsIds: [],
    authorsIds: [],
    title: '',
    content: ''
  }
}

const getters = {
  latestArticle: state => state.articles[0],
  filters: state => ({...state.filters}),
  articles: state => state.articles.filter(el => el.title),
  filteredArticles: state => {
    const filters = state.filters;
    console.log({filters});
    const articles = state.articles;
    const titleRegex = new RegExp(filters.title)
    const contentRegex = new RegExp(filters.content)

    return articles.reduce((acc, curr) => {
    const isRubricMatched = filters.rubricsIds.length
       ? filters.rubricsIds.includes(curr.rubricId)
       : true    
    const isTagsIdsMatched = filters.tagsIds.length
       ? filters.tagsIds.some(el => {
        return curr.tagsIds.includes(el)
       })
       : true    
    const isAuthrorsIdsMatched = filters.authorsIds.length
       ? filters.authorsIds.includes(curr.authorId)
       : true

      if (
        curr.title.toLowerCase().startsWith(filters.title.toLowerCase()) &&
        curr.content.toLowerCase().startsWith(filters.content.toLowerCase()) &&
        isRubricMatched && 
        isTagsIdsMatched && 
        isAuthrorsIdsMatched
      ) {
        acc.push(curr);
      }
      return acc;
    }, [])
  },
  getArticle: state => id => state.articles.find(el => el.id === id),
}

const mutations = {
  [types.SET_ARTICLES_FILTERS]: (state, payload) => {
    console.log({payload});
    state.filters = payload
  },
  [types.SET_ARTICLES]: (state, payload) => state.articles = payload,
  [types.ADD_ARTICLE]: (state, payload) => state.articles.push(payload),
  [types.REMOVE_ARTICLE]: (state, payload) => state.articles = state.articles.filter(el => el.id !== payload.id),
  [types.UPDATE_ARTICLE]: (state, payload) => state.articles = state.articles.map(el => el.id === payload.id ? payload : el)
}

const actions = {
  nuxtServerInit: async (vuexContent, nuxtContent) => {
    try {
      // if (!process.client) {
        const {data: articles} = await  api.getArticles()
        // console.log(articles)
        vuexContent.commit(types.SET_ARTICLES, articles)
      // }
    } catch(err) {
      console.log(err);
    }
  },
  resetFilters: ({commit}) => {
    commit(types.SET_ARTICLES_FILTERS, {
        tagsIds: [],
        rubricsIds: [],
        authorsIds: [],
        title: '',
        content: ''
    })
  },
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
  addArticle: async ({commit, dispatch}, payload) => {
    try {
      commit(types.SET_LOADER_VISIBILITY, true);

      const res = await api.postArticle(payload);
      console.log(res)
      // commit(types.ADD_ARTICLE, payload);
      dispatch('initArticles');
      // dispatch('showNotification', {
      //   duration: 4000,
      //   type: 'is-success',
      //   message: 'articles has been added'
      // })
      commit(types.SET_LOADER_VISIBILITY, false);

      const notification = {
        type: 'success',
        message: 'The article has been added'
      }
      dispatch('pushNotification', notification)

    } catch(err) {
        const notification = {
        type: 'error',
        message: err.message
      }
      dispatch('pushNotification', notification)
      console.error(err);
    }
  },
  initArticles: async ({commit}) => {
    try {
      const {data: articles} = await api.getArticles()
      commit(types.SET_ARTICLES, articles);
      console.log({articles})
    } catch (err) {
      console.error(err)
    }
  },
  searchByTag: async ({commit, getters}, {id}) => {
    const {data: articles} = await api.searchArticles({
      tagsIds: id
    })
    commit(types.SET_ARTICLES_FILTERS, {
      tagsIds: id
    })
    console.log(articles);
    commit(types.SET_ARTICLES, articles) 

    const latestArticleId = getters.latestArticle && getters.latestArticle.id || ''
    $nuxt.$router.push(`/articles/${latestArticleId}`)
  },
}

export default {
    state,
    getters,
    mutations,
    actions
}

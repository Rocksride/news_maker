import * as types from '../mutationTypes'
import * as api from '@/api'
const state = {
  articles: [
    {
      id: 1,
      title: 'test title',
      content: 'test content Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita obcaecati quam quisquam, dicta labore, earum tenetur, distinctio assumenda modi iste quod, deleniti mollitia rerum vero sequi. Saepe cupiditate voluptatibus impedit.</div><div>Nulla quae doloribus aperiam hic unde quas quia vero eaque, at perspiciatis repellat asperiores distinctio minima reiciendis natus aliquid obcaecati totam impedit fugit ad ea laborum. Asperiores, quae est eligendi!</div><div>Dolores, earum corrupti sunt, natus, dignissimos architecto incidunt reiciendis magni deserunt ducimus quia assumenda dolorum. Voluptatem eius repellendus, officiis deserunt odit. Architecto reiciendis, laborum esse itaque alias dolorum ducimus dolores.</div><div>Nulla veniam laboriosam repellat culpa ea hic cupiditate distinctio adipisci sint atque aut quidem autem, at, non obcaecati. Alias magnam placeat maxime accusamus nostrum et, molestiae reiciendis quae iste minima.</div><div>Totam, perspiciatis, fuga consequuntur, maxime nulla praesentium qui accusamus eos libero necessitatibus facilis nemo aut dignissimos fugiat laborum voluptas ab pariatur optio sit corporis sint modi, atque sapiente? Hic, numquam!</div><div>Illo reprehenderit ab quaerat, aliquam quas? Architecto nesciunt molestias, incidunt enim aperiam distinctio molestiae, cumque expedita modi voluptatum, similique blanditiis consectetur natus, libero. Nesciunt consectetur sed error quaerat? Ipsam, neque.'
    },  
    {
      id: 2,
      title: 'test2 title',
      content: 'test3 content'
    },
  ],
  numbers: Array.from({length:20}, (_, i) => i+1)

}

const getters = {
  articles: state => state.articles,
  getArticle: state => id => state.articles.find(el => el.id === id),
  numbers: state => state.numbers
}

const mutations = {
  [types.SET_ARTICLES]: (state, payload) => state.articles = payload,
  [types.ADD_ARTICLES]: (state, payload) => state.articles.push(payload),
  [types.REMOVE_ARTICLES]: (state, payload) => state.articles = state.articles.filter(el => el.id !== payload.id),
  [types.UPDATE_ARTICLES]: (state, payload) => state.articles = state.articles.map(el => el.id === payload.id ? payload : el)
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
  addArticle: ({commit}, payload) => {
    commit(types.ADD_ARTICLES, payload);
  }
}

export default {
    state,
    getters,
    mutations,
    actions
}

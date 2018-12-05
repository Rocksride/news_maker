import axios from 'axios'
import * as R from 'ramda'

// const _axios = axios.create({
//   baseURL: process.env.baseURL,
//   timeout: 1000,
//   // headers: {'X-Custom-Header': 'foobar'}
// });

axios.defaults.baseURL = process.env.baseURL
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
axios.defaults.headers.common['Content-Type'] = "application/json"
// axios.defaults.headers.common['Access-Control-Allow-Headers'] = 'authorization,access-control-allow-headers'
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
export const getArticles = () => axios.get('/api/articles')
export const getUsers = () => axios.get('/api/users')
export const getTags = () => axios.get('/api/tags')
export const getRubrics = () => axios.get('/api/rubrics')
export const searchArticles = (payload) => axios.get('/api/articles', {
  params: payload
})

export const postArticle = (payload) => axios({
  method: 'POST',
  url: '/api/articles', 
  data: payload,
  crossDomain: true,
  mode: 'no-cors',
  // withCredentials: true,
  // credentials: 'same-origin',

})

export const signIn = (payload) => axios({
  method: 'POST',
  url: '/auth/login',
  data: payload,
  mode: 'no-cors',
  // withCredentials: true,
  // credentials: 'same-origin',

})

export const signUp = (payload) => axios({
  method: 'POST',
  url: '/auth/register',
  data: payload,
  crossDomain: true,
  mode: 'no-cors',
  // withCredentials: true,
  // credentials: 'same-origin',

})

export const validateToken = (payload) => axios({
  method: 'POST',
  url: '/auth/validate_token',
  data: payload,
  crossDomain: true,
  mode: 'no-cors',
  // withCredentials: true,
  // credentials: 'same-origin',

})


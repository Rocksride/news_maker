import axios from 'axios'
import * as R from 'ramda'

// const _axios = axios.create({
//   baseURL: process.env.baseURL,
//   timeout: 1000,
//   // headers: {'X-Custom-Header': 'foobar'}
// });

axios.defaults.baseURL = process.env.baseURL
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
// axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

export const getArticles = () => axios.get('/api/articles')

export const postArticle = (payload, token) => axios({
  method: 'POST',
  url: '/api/articles', 
  data: payload,
  crossDomain: true,
  headers: {
    'Access-Control-Allow-Origin': '*',
    "content-type": "application/json"
  }
})

export const signIn = (payload) => axios({
  method: 'POST',
  url: '/auth/login',
  data: payload,
  crossDomain: true,
  headers: {
    'Access-Control-Allow-Origin': '*',
    "content-type": "application/json"
  }
})

export const signUp = (payload) => axios({
  method: 'POST',
  url: '/auth/register',
  data: payload,
  crossDomain: true,
  headers: {
    'Access-Control-Allow-Origin': '*',
    "Content-Type": "application/json"
  }
})

export const validateToken = (payload) => axios({
  method: 'POST',
  url: '/auth/validate_token',
  data: payload,
  crossDomain: true,
  headers: {
    'Access-Control-Allow-Origin': '*',
    "content-type": "application/json"
  }
})


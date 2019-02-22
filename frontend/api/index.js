import axios from 'axios'
import * as R from 'ramda'

const apiClient = axios.create({
  baseURL: process.env.baseURL,
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  },
  timeout: 10000,
})

export const getArticles = () => apiClient.get('/api/articles')

export const getUsers = () => apiClient.get('/api/users')

export const getTags = () => apiClient.get('/api/tags')

export const getRubrics = () => apiClient.get('/api/rubrics')

export const searchArticles = (payload) => apiClient.get('/api/articles', {
  params: payload
})

export const postArticle = payload => apiClient.post('/api/articles', payload)

// const corsURL = 'https://cors-anywhere.herokuapp.com/'
export const signIn = payload => apiClient.post('/auth/login', payload)
// export const signIn = payload => axios.post(corsURL + process.env.baseURL + '/auth/login', payload)

export const signUp = payload => apiClient.post('/auth/register', payload)
// export const signUp = payload => axios.post(corsURL + process.env.baseURL + '/auth/register', payload)
 
export const validateToken = (payload) => apiClient.post('/auth/validate_token', payload)


import axios from 'axios'
import * as R from 'ramda'

export const getPosts = () => axios.get(process.env.baseURL + '/posts.json');

export const savePost = (payload, token) => axios.post(process.env.baseURL + '/posts.json?auth=' + token, payload);

export const getSinglePost = (id) => axios.get(process.env.baseURL + `/posts/${id}.json`);

export const updatePost = (post, token) => axios.put(process.env.baseURL + `/posts/${post.id}.json?auth=` + token, post);

export const signUp = ({
  email,
  password
}) => axios.post('https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=' + process.env.fbAPIKey, {
  email,
  password,
  returnSecureToken: true
})

export const signIn = ({
  email,
  password
}) => axios.post('https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=' + process.env.fbAPIKey, {
  email,
  password,
  returnSecureToken: true
})

export const postApi = (payload) => axios.post('http://localhost:3000/api/track-data', payload)

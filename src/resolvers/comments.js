import axios from 'axios'
import { BASE_URL } from '../constants'

export const comments = async () => {
  try {
    return (await axios.get(`${BASE_URL}/comments`)).data
  } catch (err) {
    return []
  }
}

export const comment = async (_, { id }) => {
  try {
    return (await axios.get(`${BASE_URL}/comments/${id}`)).data
  } catch (err) {
    return {}
  }
}

export const post = async parent => {
  try {
    return (await axios.get(`${BASE_URL}/posts/${parent.postId}`)).data
  } catch (err) {
    return {}
  }
}

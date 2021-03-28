import axios from 'axios'
import { BASE_URL } from '../constants'

export const posts = async () => {
  try {
    return (await axios.get(`${BASE_URL}/posts`)).data
  } catch (err) {
    return []
  }
}

export const post = async (_, { id }) => {
  try {
    return (await axios.get(`${BASE_URL}/posts/${id}`)).data
  } catch (err) {
    return {}
  }
}

export const user = async parent => {
  try {
    return (await axios.get(`${BASE_URL}/users/${parent.userId}`)).data
  } catch (err) {
    return {}
  }
}

export const comments = async parent => {
  try {
    return (await axios.get(`${BASE_URL}/comments`)).data.filter(
      comment => parent.id === comment.postId,
    )
  } catch (err) {
    return {}
  }
}

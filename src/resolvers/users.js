import axios from 'axios'
import { BASE_URL } from '../constants'

export const users = async () => {
  try {
    return (await axios.get(`${BASE_URL}/users`)).data
  } catch (err) {
    return []
  }
}

export const user = async (_, { id }) => {
  try {
    return (await axios.get(`${BASE_URL}/users/${id}`)).data
  } catch (err) {
    return {}
  }
}

export const posts = async parent => {
  try {
    return (await axios.get(`${BASE_URL}/posts`)).data.filter(
      post => parent.id === post.userId,
    )
  } catch (err) {
    return []
  }
}

export const albums = async parent => {
  try {
    return (await axios.get(`${BASE_URL}/albums`)).data.filter(
      album => parent.id === album.userId,
    )
  } catch (err) {
    return []
  }
}

export const todos = async parent => {
  try {
    return (await axios.get(`${BASE_URL}/todos`)).data.filter(
      todo => parent.id === todo.userId,
    )
  } catch (err) {
    return []
  }
}

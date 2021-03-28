import axios from 'axios'
import { BASE_URL } from '../constants'

export const todos = async () => {
  try {
    return (await axios.get(`${BASE_URL}/todos`)).data
  } catch (err) {
    return []
  }
}

export const todo = async (_, { id }) => {
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

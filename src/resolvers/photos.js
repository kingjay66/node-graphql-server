import axios from 'axios'
import { BASE_URL } from '../constants'

export const photos = async () => {
  try {
    return (await axios.get(`${BASE_URL}/photos`)).data
  } catch (err) {
    return []
  }
}

export const photo = async (_, { id }) => {
  try {
    return (await axios.get(`${BASE_URL}/photos/${id}`)).data
  } catch (err) {
    return {}
  }
}

export const album = async parent => {
  try {
    return (await axios.get(`${BASE_URL}/albums/${parent.albumId}`)).data
  } catch (err) {
    return {}
  }
}

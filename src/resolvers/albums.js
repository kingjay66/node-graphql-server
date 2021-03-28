import axios from 'axios'
import { BASE_URL } from '../constants'

export const albums = async () => {
  try {
    return (await axios.get(`${BASE_URL}/albums`)).data
  } catch (err) {
    return []
  }
}

export const album = async (_, { id }) => {
  try {
    return (await axios.get(`${BASE_URL}/albums/${id}`)).data
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

export const photos = async parent => {
  try {
    return (await axios.get(`${BASE_URL}/photos`)).data.filter(
      photo => parent.id === photo.albumId,
    )
  } catch (err) {
    return {}
  }
}

import { RESTDataSource } from 'apollo-datasource-rest'

class PlaceholderAPI extends RESTDataSource {
  constructor() {
    super()
    this.baseURL = 'https://jsonplaceholder.typicode.com/'
  }

  async getAlbums() {
    return await this.get(`albums`)
  }

  async getAlbum(id) {
    return await this.get(`albums/${id}`)
  }

  async getComments() {
    return await this.get(`comments`)
  }

  async getComment(id) {
    return await this.get(`comments/${id}`)
  }

  async getPhotos() {
    return await this.get(`photos`)
  }

  async getPhoto(id) {
    return await this.get(`photos/${id}`)
  }

  async getPosts() {
    return await this.get(`posts`)
  }

  async getPost(id) {
    return await this.get(`posts/${id}`)
  }

  async getTodos() {
    return await this.get(`todos`)
  }

  async getTodo(id) {
    return await this.get(`todos/${id}`)
  }

  async getUsers() {
    return await this.get(`users`)
  }

  async getUser(id) {
    return await this.get(`users/${id}`)
  }
}

export default PlaceholderAPI

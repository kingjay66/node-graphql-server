export const users = async (_, __, { dataSources }) =>
  await dataSources.PlaceholderAPI.getUsers()

export const user = async (_, { id }, { dataSources }) =>
  await dataSources.PlaceholderAPI.getUser(id)

export const posts = async (parent, _, { dataSources }) => {
  const res = await dataSources.PlaceholderAPI.getPosts()
  return res.filter(post => parent.id === post.userId)
}

export const albums = async (parent, _, { dataSources }) => {
  const res = await dataSources.PlaceholderAPI.getAlbums()
  return res.filter(album => parent.id === album.userId)
}

export const todos = async (parent, _, { dataSources }) => {
  const res = await dataSources.PlaceholderAPI.getTodos()
  return res.filter(todo => parent.id === todo.userId)
}

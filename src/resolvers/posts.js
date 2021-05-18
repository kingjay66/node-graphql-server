export const posts = async (_, __, { dataSources }) =>
  await dataSources.PlaceholderAPI.getPosts()

export const post = async (_, { id }, { dataSources }) =>
  await dataSources.PlaceholderAPI.getPost(id)

export const user = async (parent, _, { dataSources }) =>
  await dataSources.PlaceholderAPI.getUser(parent.userId)

export const comments = async (parent, _, { dataSources }) => {
  const res = await dataSources.PlaceholderAPI.getComments()
  return res.filter(comment => parent.id === comment.postId)
}

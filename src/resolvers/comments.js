export const comments = async (_, __, { dataSources }) =>
  await dataSources.PlaceholderAPI.getComments()

export const comment = async (_, { id }, { dataSources }) =>
  await dataSources.PlaceholderAPI.getComment(id)

export const post = async (parent, _, { dataSources }) =>
  await dataSources.PlaceholderAPI.getPost(parent.postId)

export const todos = async (_, __, { dataSources }) =>
  await dataSources.PlaceholderAPI.getTodos()

export const todo = async (_, { id }, { dataSources }) =>
  await dataSources.PlaceholderAPI.getTodo(id)

export const user = async (parent, _, { dataSources }) =>
  await dataSources.PlaceholderAPI.getUser(parent.userId)

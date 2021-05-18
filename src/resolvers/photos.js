export const photos = async (_, __, { dataSources }) =>
  await dataSources.PlaceholderAPI.getPhotos()

export const photo = async (_, { id }, { dataSources }) =>
  await dataSources.PlaceholderAPI.getPhoto(id)

export const album = async (parent, _, { dataSources }) =>
  await dataSources.PlaceholderAPI.getAlbum(parent.albumId)

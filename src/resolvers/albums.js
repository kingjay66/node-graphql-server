export const albums = async (_, __, { dataSources }) =>
  await dataSources.PlaceholderAPI.getAlbums()

export const album = async (_, { id }, { dataSources }) =>
  await dataSources.PlaceholderAPI.getAlbum(id)

export const user = async (parent, _, { dataSources }) =>
  await dataSources.PlaceholderAPI.getUser(parent.userId)

export const photos = async (parent, _, { dataSources }) => {
  const res = await dataSources.PlaceholderAPI.getPhotos()
  return res.filter(photo => parent.id === photo.albumId)
}

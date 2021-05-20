import { ApolloServer } from 'apollo-server-express'
import dotenv from 'dotenv'
import express from 'express'
import PlaceholderAPI from './datasources/PlaceholderAPI.js'
import keep_alive from './keep-alive.js'
import resolvers from './resolvers/index.js'
import typeDefs from './typeDefs/index.js'

dotenv.config()
const app = express()
const port = process.env.PORT || 7714

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    PlaceholderAPI: new PlaceholderAPI(),
  }),
})
server.applyMiddleware({
  app,
  path: '/',
})

app.listen({ port }, () =>
  console.log(
    `server started on http://localhost${port == 80 ? '' : ':' + port}${
      server.graphqlPath
    }`,
  ),
)

keep_alive()

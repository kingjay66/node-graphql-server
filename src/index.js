import { ApolloServer } from 'apollo-server-express'
import express from 'express'
import resolvers from './resolvers'
import typeDefs from './typeDefs'

const app = express()
const port = process.env.PORT || 7714
const server = new ApolloServer({
  typeDefs,
  resolvers,
})
server.applyMiddleware({ app })
app.listen({ port }, () =>
  console.log(
    `server started on http://localhost${port === 80 ? '' : ':' + port}${
      server.graphqlPath
    }`,
  ),
)

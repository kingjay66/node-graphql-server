import { gql } from 'apollo-server-express'

export default gql`
  type Query {
    post(id: ID!): Post
    posts: [Post!]!
    user(id: ID!): User
    users: [User!]!
    comment(id: ID!): Comment
    comments: [Comment!]!
    album(id: ID!): Album
    albums: [Album!]!
    photo(id: ID!): Photo
    photos: [Photo!]!
    todo(id: ID!): Todo
    todos: [Todo!]!
  }

  type Post {
    id: ID!
    title: String!
    body: String!
    user: User!
    comments: [Comment!]!
  }

  type User {
    id: ID!
    name: String!
    username: String!
    email: String!
    address: Address!
    phone: String!
    website: String!
    company: Company!
    posts: [Post!]!
    albums: [Album!]!
    todos: [Todo!]!
  }

  type Address {
    street: String!
    suite: String!
    city: String!
    zipcode: String!
    geo: Geo!
  }

  type Geo {
    lat: String!
    lng: String!
  }

  type Company {
    name: String!
    catchPhrase: String!
    bs: String!
  }

  type Comment {
    id: ID!
    name: String!
    email: String!
    body: String!
    post: Post!
  }

  type Album {
    id: ID!
    title: String!
    user: User!
    photos: [Photo!]!
  }

  type Photo {
    id: ID!
    title: String!
    url: String!
    thumbnailUrl: String!
    album: Album!
  }

  type Todo {
    id: ID!
    title: String!
    completed: Boolean!
    user: User!
  }
`

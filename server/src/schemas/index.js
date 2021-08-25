// packages
const { gql } = require('apollo-server');

const typeDefs = gql`
  """
  One of the main node for the user to enter the graph.
  Conventionally used to get data from the server,
  just like GET request,
  but can also be used to change data in server/DB.
  If multiple queries are given they are ran in parallel.
  """
  type Query {
    hello: String!
    login(email: String!, password: String!): AuthPayload
  }

  """
  One of the main node for the user to enter the graph.
  Conventionally used to change data in the server/DB,
  just like POST, PUT, DELETE, etc. request,
  but can also be used to just fetch data from server.
  If multiple mutations are given they are ran in series.
  """
  type Mutation {
    createUser(data: CreateUserInput!): AuthPayload
  }

  enum Gender {
    MALE
    FEMALE
    OTHER
  }

  "The User of the ystem"
  type User {
    id: ID!
    email: String!
    firstName: String!
    middleName: String
    lastName: String!
    gender: Gender!

    "Full name of the user"
    name: String!
  }

  type AuthPayload {
    token: String!
    user: User!
  }

  input CreateUserInput {
    email: String!
    password: String!
    confirmPassword: String!
    firstName: String!
    middleName: String
    lastName: String!
    gender: Gender!
  }
`;

module.exports = typeDefs;

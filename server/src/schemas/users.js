// packages
const { gql } = require('apollo-server');

const users = gql`
  extend type Query {
    login(email: String!, password: String!): AuthPayload
  }

  extend type Mutation {
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
    projects: [Project!]!
    tasks: [Task!]!
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

module.exports = users;

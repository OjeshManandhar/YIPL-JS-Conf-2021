// packages
const { gql } = require('apollo-server');

const typeDefs = gql`
  type Query {
    hello: String!
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
`;

module.exports = typeDefs;

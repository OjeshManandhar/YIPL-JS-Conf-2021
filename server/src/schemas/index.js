// packages
const { gql } = require('apollo-server');

// schemas
const users = require('./users');
const project = require('./project');

const main = gql`
  """
  One of the main node for the user to enter the graph.
  Conventionally used to get data from the server,
  just like GET request,
  but can also be used to change data in server/DB.
  If multiple queries are given they are ran in parallel.
  """
  type Query {
    "A hello world query"
    hello: String!

    user: User
  }

  """
  One of the main node for the user to enter the graph.
  Conventionally used to change data in the server/DB,
  just like POST, PUT, DELETE, etc. request,
  but can also be used to just fetch data from server.
  If multiple mutations are given they are ran in series.
  """
  type Mutation {
    "Added to just not make empty type"
    _empty: String
  }
`;

module.exports = [main, users, project];

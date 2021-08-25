// dotenv
require('dotenv').config();

// packages
const { ApolloServer, gql } = require('apollo-server');

// env
const { PORT } = require('./env_config');

const typeDefs = gql`
  type Query {
    hello: String!
  }
`;

const resolvers = {
  Query: {
    hello: () => 'Hello World'
  }
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen(PORT).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});

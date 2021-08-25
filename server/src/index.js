// dotenv
require('dotenv').config();

// packages
const { ApolloServer } = require('apollo-server');

// schemas
const typeDefs = require('./schemas');

// env
const { PORT } = require('./env_config');

const resolvers = {
  Query: {
    hello: () => 'Hello World'
  }
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen(PORT).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});

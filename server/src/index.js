// dotenv
require('dotenv').config();

// packages
const { ApolloServer } = require('apollo-server');

// schemas
const typeDefs = require('./schemas');

// resolvers
const resolvers = require('./resolvers');

// env
const { PORT } = require('./env_config');

const server = new ApolloServer({ typeDefs, resolvers });

server.listen(PORT).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});

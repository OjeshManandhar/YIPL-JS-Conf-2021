// dotenv
require('dotenv').config();

// packages
const { ApolloServer } = require('apollo-server');

// schemas
const typeDefs = require('./schemas');

// resolvers
const resolvers = require('./resolvers');

// dataSources
const UserAPI = require('./dataSources/userAPI');

// utils
const prisma = require('./utils/prisma');

// env
const { PORT } = require('./env_config');

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    userAPI: new UserAPI(prisma)
  })
});

server.listen(PORT).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});

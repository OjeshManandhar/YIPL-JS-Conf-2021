// dotenv
require('dotenv').config();

// packages
const { ApolloServer } = require('apollo-server');

// schemas
const typeDefs = require('./schemas');

// resolvers
const resolvers = require('./resolvers');

// dataSources
const TaskAPI = require('./dataSources/taskAPI');
const UserAPI = require('./dataSources/userAPI');
const ProjectAPI = require('./dataSources/projectAPI');

// utils
const prisma = require('./utils/prisma');
const { decode } = require('./utils/token');

// env
const { PORT } = require('./env_config');

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: async ({ req }) => {
    const _token = req?.headers?.authorization;

    if (!_token) return {};
    if (typeof _token !== 'string') return {};

    const split = _token.split(' ');
    if (split.length !== 2) return {};
    if (split[0] !== 'Bearer') return {};

    const userId = decode(split[1]);

    const user = await prisma.user.findUnique({ where: { id: userId } });

    if (!user) return {};

    user.password = '';

    return { user };
  },
  dataSources: () => ({
    taskAPI: new TaskAPI(prisma),
    userAPI: new UserAPI(prisma),
    projectAPI: new ProjectAPI(prisma)
  })
});

server.listen(PORT).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});

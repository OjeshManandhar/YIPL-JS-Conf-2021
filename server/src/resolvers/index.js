// resolvers
const tasks = require('./tasks');
const users = require('./users');
const projects = require('./projects');

const resolvers = {
  Query: {
    hello: () => 'Hello World',
    ...users.query,
    ...projects.query
  },
  Mutation: {
    // This is needed as it is there in schema
    _empty: () => 'Added to just not make empty type',
    ...users.mutation,
    ...projects.mutation,
    ...tasks.mutation
  },
  ...users.type,
  ...projects.type,
  ...tasks.type
};

module.exports = resolvers;

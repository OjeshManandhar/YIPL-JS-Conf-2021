// resolvers
const tasks = require('./tasks');
const users = require('./users');
const projects = require('./projects');

const resolvers = {
  Query: {
    hello: () => 'Hello World',
    user: () => ({
      id: 1,
      email: 'test@test.com',
      password: 'password',
      firstName: 'firstName',
      middleName: 'middleName',
      lastName: 'lastName',
      gender: 'MALE',
      name: 'name'
    }),
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

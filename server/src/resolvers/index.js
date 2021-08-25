// resolvers
const users = require('./users');

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
    ...users.query
  },
  Mutation: {
    // This is needed as it is there in schema
    _empty: () => 'Added to just not make empty type',
    ...users.mutation
  },
  ...users.type
};

module.exports = resolvers;

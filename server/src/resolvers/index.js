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
    })
  }
};

module.exports = resolvers;

// packages
const { UserInputError } = require('apollo-server');

// utils
const { encode } = require('./../utils/token');

const query = {
  login: (parent, args) => {
    const { email, password } = args;

    console.log('login:', email, password);

    return null;
  }
};

const mutation = {
  createUser: async (_, args, { dataSources }) => {
    const { confirmPassword, ...data } = args.data;

    if (data.password !== confirmPassword) {
      throw new UserInputError("Password and Confirm Password don't match");
    }

    const user = await dataSources.userAPI.create(data);

    const token = encode(user);

    return { token, user };
  }
};

module.exports = { query, mutation };

// packages
const { UserInputError, AuthenticationError } = require('apollo-server');

// utils
const { encode } = require('./../utils/token');

const query = {
  login: async (_, { email, password }, { dataSources }) => {
    const foundUser = await dataSources.userAPI.findByEmail(email, true);

    if (!foundUser) {
      throw new AuthenticationError('Invalid email or password');
    }

    if (foundUser.password !== password) {
      throw new AuthenticationError('Invalid email or password');
    }

    foundUser.password = '';

    const token = encode(foundUser);

    return {
      token,
      user: foundUser
    };
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

const type = {
  User: {
    name: parent => {
      const { firstName, middleName, lastName } = parent;

      return `${firstName} ${middleName ? middleName + ' ' : ''}${lastName}`;
    }
  }
};

module.exports = { query, mutation, type };

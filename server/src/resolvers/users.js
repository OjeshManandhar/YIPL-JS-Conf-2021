// packages
const {
  ForbiddenError,
  UserInputError,
  AuthenticationError
} = require('apollo-server');

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
  },
  me: async (_, __, { user }) => {
    if (!user) {
      throw new ForbiddenError('Log in first');
    }

    return user;
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
    },
    projects: async ({ id }, _, { dataSources }) => {
      const projects = await dataSources.userAPI.listProjects(id);

      return projects;
    },
    tasks: async ({ id }, _, { dataSources }) => {
      const tasks = await dataSources.userAPI.listTasks(id);

      return tasks;
    }
  }
};

module.exports = { query, mutation, type };

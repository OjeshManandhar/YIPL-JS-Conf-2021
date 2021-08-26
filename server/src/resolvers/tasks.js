// packages
const { ApolloError, ForbiddenError } = require('apollo-server');

const mutation = {
  createTask: async (_, { data }, { user, dataSources }) => {
    if (!user) {
      throw new ForbiddenError('Log in first');
    }

    const _projectId = parseInt(data.projectId, 10);

    try {
      const task = await dataSources.taskAPI.create({
        ...data,
        projectId: _projectId
      });

      return task;
    } catch (err) {
      throw new ApolloError('Something went worng');
    }
  },
  closeTask: async (_, { id }, { user, dataSources }) => {
    if (!user) {
      throw new ForbiddenError('Log in first');
    }

    const _id = parseInt(id, 10);

    try {
      const closedTask = await dataSources.taskAPI.close(_id);

      return closedTask;
    } catch (err) {
      throw new ApolloError('Something went worng');
    }
  }
};

const type = {
  Task: {
    creator: () => null,
    project: async ({ id }, _, { dataSources }) => {
      const project = await dataSources.taskAPI.getProject(id);

      return project;
    }
  }
};

module.exports = { mutation, type };

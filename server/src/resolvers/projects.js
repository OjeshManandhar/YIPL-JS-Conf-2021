// packages
const { ApolloError, ForbiddenError } = require('apollo-server');

const query = {
  project: async (_, { id }, { user, dataSources }) => {
    if (!user) {
      throw new ForbiddenError('Log in first');
    }

    const _id = parseInt(id, 10);

    const project = await dataSources.projectAPI.findById(_id);

    return project;
  },
  listProjects: async (_, __, { user, dataSources }) => {
    if (!user) {
      throw new ForbiddenError('Log in first');
    }

    try {
      const project = await dataSources.projectAPI.list();

      return project;
    } catch (err) {
      throw new ApolloError('Something went worng');
    }
  }
};

const mutation = {
  createProject: async (_, { data }, { user, dataSources }) => {
    if (!user) {
      throw new ForbiddenError('Log in first');
    }

    try {
      const created = await dataSources.projectAPI.create(data);

      return created;
    } catch (err) {
      throw new ApolloError('Something went worng');
    }
  },
  addMember: async (_, { projectId, userId }, { user, dataSources }) => {
    if (!user) {
      throw new ForbiddenError('Log in first');
    }

    const _projectId = parseInt(projectId, 10);
    const _userId = parseInt(userId, 10);

    try {
      const updated = await dataSources.projectAPI.addMember(
        _projectId,
        _userId
      );

      return updated;
    } catch (err) {
      throw new ApolloError('Something went worng');
    }
  },
  removeMember: async (_, { projectId, userId }, { user, dataSources }) => {
    if (!user) {
      throw new ForbiddenError('Log in first');
    }

    const _projectId = parseInt(projectId, 10);
    const _userId = parseInt(userId, 10);

    try {
      const updated = await dataSources.projectAPI.removeMember(
        _projectId,
        _userId
      );

      return updated;
    } catch (err) {
      throw new ApolloError('Something went worng');
    }
  }
};

module.exports = { query, mutation };

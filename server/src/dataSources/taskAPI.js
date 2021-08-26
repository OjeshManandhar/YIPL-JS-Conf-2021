// packages
const { ForbiddenError } = require('apollo-server');
const { DataSource } = require('apollo-datasource');

class TaskAPI extends DataSource {
  constructor(store) {
    super();

    this.store = store;
    this.context = { user: undefined };
  }

  // Called by apollo
  initialize(config) {
    this.context = config.context;
  }

  async create(data) {
    if (!this.context.user) {
      throw new ForbiddenError('Log in first');
    }

    const createdTask = this.store.task.create({
      data: {
        ...data,
        creatorId: this.context.user.id
      }
    });

    return createdTask;
  }
}

module.exports = TaskAPI;

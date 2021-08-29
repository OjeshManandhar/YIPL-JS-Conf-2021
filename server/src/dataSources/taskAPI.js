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

  async complete(id) {
    if (!this.context.user) {
      throw new ForbiddenError('Log in first');
    }

    const foundTasks = await this.store.task.findMany({
      where: {
        AND: [{ id }, { creatorId: this.context.user.id }]
      }
    });

    if (foundTasks.length !== 1) {
      throw new ForbiddenError('Unauthorized');
    }

    const updatedTask = await this.store.task.update({
      where: { id },
      data: { completed: !foundTasks[0].completed }
    });

    return updatedTask;
  }

  async getCreator(id) {
    const task = await this.store.task.findUnique({
      where: { id },
      include: { creator: true }
    });

    if (!task) return null;

    return task.creator;
  }

  async getProject(id) {
    const task = await this.store.task.findUnique({
      where: { id },
      include: { project: true }
    });

    if (!task) return null;

    return task.project;
  }
}

module.exports = TaskAPI;

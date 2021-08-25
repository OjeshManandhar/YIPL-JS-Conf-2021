// packages
const { DataSource } = require('apollo-datasource');

class ProjectAPI extends DataSource {
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
    const created = await this.store.project.create({ data });

    return created;
  }

  async list() {
    const projects = await this.store.project.findMany();

    return projects;
  }

  async findById(id) {
    const project = await this.store.project.findUnique({
      where: { id }
    });

    return project;
  }

  async addMember(projectId, userId) {
    const updated = await this.store.project.update({
      where: { id: projectId },
      data: {
        members: {
          connect: {
            id: userId
          }
        }
      }
    });

    return updated;
  }
}

module.exports = ProjectAPI;
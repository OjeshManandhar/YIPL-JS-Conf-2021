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

  async listMembers(projectId) {
    const members = await this.store.projectMembers.findMany({
      where: {
        projectId
      },
      include: {
        user: true
      }
    });

    return members.map(mem => mem.user);
  }

  async addMember(projectId, userId) {
    const updated = await this.store.project.update({
      where: { id: projectId },
      data: {
        members: {
          create: {
            user: {
              connect: {
                id: userId
              }
            }
          }
        }
      }
    });

    return updated;
  }

  async removeMember(projectId, userId) {
    const updated = await this.store.project.update({
      where: { id: projectId },
      data: {
        members: {
          delete: {
            userId_projectId: {
              userId,
              projectId
            }
          }
        }
      }
    });

    return updated;
  }

  async listTasks(id) {
    const project = await this.store.project.findUnique({
      where: { id },
      include: { tasks: true }
    });

    if (!project) return null;

    return project.tasks;
  }
}

module.exports = ProjectAPI;

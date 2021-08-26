// packages
const { DataSource } = require('apollo-datasource');

class UserAPI extends DataSource {
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
    const created = await this.store.user.create({ data });

    // make password blank for security
    created.password = '';

    return created;
  }

  async findByEmail(email, includePassword = false) {
    const found = await this.store.user.findUnique({ where: { email } });

    if (found && !includePassword) {
      found.password = '';
    }

    return found;
  }

  async listProjects(id) {
    const projects = (
      await this.store.user.findUnique({
        where: { id },
        select: {
          projects: {
            select: {
              project: true
            }
          }
        }
      })
    ).projects;

    return projects.map(proj => proj.project);
  }

  async listTasks(id) {
    const user = await this.store.user.findUnique({
      where: { id },
      include: { tasks: true }
    });

    if (!user) return null;

    return user.tasks;
  }
}

module.exports = UserAPI;

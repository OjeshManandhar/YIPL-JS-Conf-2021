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

  async crate(data) {
    const created = await this.store.project.create({ data });

    return created;
  }
}

module.exports = ProjectAPI;

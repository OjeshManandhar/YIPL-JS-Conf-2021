const { gql } = require('apollo-server');

const tasks = gql`
  extend type Mutation {
    createTask(data: CreateTaskInput!): Task
    closeTask(id: ID!): Task
  }

  enum TaskStatus {
    OPEN
    CLOSED
  }

  type Task {
    id: ID!
    title: String!
    description: String
    status: TaskStatus!
    creator: User!
    project: Project!
  }

  input CreateTaskInput {
    title: String!
    description: String
    status: TaskStatus!
    projectId: ID!
  }
`;

module.exports = tasks;

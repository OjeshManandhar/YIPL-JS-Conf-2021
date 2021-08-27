const { gql } = require('apollo-server');

const tasks = gql`
  extend type Mutation {
    createTask(data: CreateTaskInput!): Task
    closeTask(id: ID!): Task
  }

  type Task {
    id: ID!
    title: String!
    description: String
    completed: Boolean!
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

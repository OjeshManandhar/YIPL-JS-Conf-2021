// packages
const { gql } = require('apollo-server');

const project = gql`
  extend type Query {
    project(id: ID!): Project
    listProjects: [Project!]
  }

  extend type Mutation {
    createProject(data: CreateProjectInput!): Project
  }

  enum ProjectStatus {
    RUNNING
    CLOSED
    CANCELLED
  }

  type Project {
    id: ID!
    title: String!
    description: String
    status: ProjectStatus!
    members: [User!]!
  }

  input CreateProjectInput {
    title: String!
    description: String
    status: ProjectStatus!
  }
`;

module.exports = project;

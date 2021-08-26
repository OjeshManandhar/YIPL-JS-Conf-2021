// packages
const { gql } = require('apollo-server');

const projects = gql`
  extend type Query {
    project(id: ID!): Project
    listProjects: [Project!]
  }

  extend type Mutation {
    createProject(data: CreateProjectInput!): Project
    addMember(projectId: ID!, userId: ID!): Project
    removeMember(projectId: ID!, userId: ID!): Project
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

module.exports = projects;

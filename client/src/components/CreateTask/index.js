import { useState, useEffect, useCallback } from 'react';

// packages
import { gql, useQuery, useMutation } from '@apollo/client';

// styles
import * as S from './styles';
import * as G from 'global/styles';

const LIST_PROJECTS = gql`
  query ListProjects {
    listProjects {
      id
      title
    }
  }
`;

const CREATE_TASK = gql`
  mutation CreateTask($createTaskData: CreateTaskInput!) {
    createTask(data: $createTaskData) {
      id
    }
  }
`;

function CreateTask({ refetch }) {
  const ListProjects = useQuery(LIST_PROJECTS);
  const [createTask, { loading, error, data }] = useMutation(CREATE_TASK);

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [projectId, setProjectId] = useState(null);

  const clearForm = useCallback(() => {
    setTitle('');
    setDescription('');
  }, []);

  const ProjectList = useCallback(() => {
    if (ListProjects.data) {
      const projects = ListProjects.data.listProjects;

      const options = [
        <option key={new Date()} value={null} disabled selected>
          Select a project
        </option>
      ];

      projects.forEach(p =>
        options.push(
          <option key={p.id} value={p.id}>
            {p.title}
          </option>
        )
      );

      return options;
    }

    return [];
  }, [ListProjects]);

  const handleSubmit = useCallback(
    e => {
      e.preventDefault();

      const createTaskData = {
        title,
        description: description.length > 0 ? description : null,
        projectId
      };

      createTask({ variables: { createTaskData } });
    },
    [title, description, projectId, createTask]
  );

  useEffect(() => {
    if (error) {
      console.dir(error, { depth: null });

      window.alert(error.message);
    }
  }, [error]);

  useEffect(() => {
    if (data) {
      refetch();
      clearForm();
    }
  }, [data, refetch, clearForm]);

  return (
    <S.Container>
      <G.Heading>Create Task</G.Heading>

      <G.Form onSubmit={handleSubmit} autoComplete='off'>
        <G.FormControl>
          <G.FormLabel htmlFor='title'>Title</G.FormLabel>
          <G.FormInput
            id='title'
            name='title'
            type='title'
            required
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
        </G.FormControl>

        <G.FormControl>
          <G.FormLabel htmlFor='description'>Description</G.FormLabel>
          <G.FormInput
            id='description'
            name='description'
            type='description'
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
        </G.FormControl>

        <G.FormControl>
          <G.FormLabel htmlFor='project'>Project</G.FormLabel>
          <G.FormSelect
            id='project'
            name='project'
            required
            value={projectId}
            onChange={e => setProjectId(e.target.value)}
          >
            {ProjectList()}
          </G.FormSelect>
        </G.FormControl>

        <G.FormSubmit type='submit' disabled={loading}>
          Create Task
        </G.FormSubmit>
      </G.Form>
    </S.Container>
  );
}

export default CreateTask;

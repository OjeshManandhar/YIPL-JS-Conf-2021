import { useState, useEffect, useCallback } from 'react';

// packages
import { gql, useMutation } from '@apollo/client';

// styles
import * as S from './styles';
import * as G from 'global/styles';

const CREATE_PROJECT = gql`
  mutation CreateProject($createProjectData: CreateProjectInput!) {
    createProject(data: $createProjectData) {
      id
    }
  }
`;

function CreateProject({ refetch }) {
  const [createProject, { loading, error, data }] = useMutation(CREATE_PROJECT);

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('RUNNING');

  const clearForm = useCallback(() => {
    setTitle('');
    setDescription('');
    setStatus('RUNNING');
  }, []);

  const handleSubmit = useCallback(
    e => {
      e.preventDefault();

      const createProjectData = {
        title,
        description: description.length > 0 ? description : null,
        status
      };

      createProject({ variables: { createProjectData } });
    },
    [title, description, status, createProject]
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
      <G.Heading>Create Project</G.Heading>

      <G.Form onSubmit={handleSubmit}>
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
          <G.FormLabel htmlFor='status'>Status</G.FormLabel>
          <G.FormSelect
            id='status'
            name='status'
            required
            value={status}
            onChange={e => setStatus(e.target.value)}
          >
            <option value='RUNNING' selected>
              RUNNING
            </option>
            <option value='CLOSED'>CLOSED</option>
            <option value='CANCELLED'>CANCELLED</option>
          </G.FormSelect>
        </G.FormControl>

        <G.FormSubmit type='submit' disabled={loading}>
          Create Project
        </G.FormSubmit>
      </G.Form>
    </S.Container>
  );
}

export default CreateProject;

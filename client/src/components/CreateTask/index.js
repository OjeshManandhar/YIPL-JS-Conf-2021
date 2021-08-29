import { useState, useCallback } from 'react';

// packages
import { gql, useQuery } from '@apollo/client';

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

function CreateTask() {
  const ListProjects = useQuery(LIST_PROJECTS);

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const ProjectList = useCallback(() => {
    if (ListProjects.data) {
      const projects = ListProjects.data.listProjects;

      return projects.map(p => (
        <option key={p.id} value={p.id}>
          {p.title}
        </option>
      ));
    }

    return [];
  }, [ListProjects]);

  console.log('project list:', ProjectList());

  return (
    <S.Container>
      <G.Heading>Create Task</G.Heading>

      <G.Form>
        <G.FormControl>
          <G.FormLabel htmlFor='title'>Title</G.FormLabel>
          <G.FormInput
            id='title'
            name='title'
            type='title'
            required
            autoFocus
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
          <G.FormSelect>{ProjectList()}</G.FormSelect>
        </G.FormControl>

        <G.FormSubmit type='submit'>Create Task</G.FormSubmit>
      </G.Form>
    </S.Container>
  );
}

export default CreateTask;

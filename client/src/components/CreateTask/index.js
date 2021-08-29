import { useState } from 'react';

// styles
import * as S from './styles';
import * as G from 'global/styles';

function CreateTask() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [project, setProject] = useState(1);

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
          <G.FormInput
            id='project'
            name='project'
            type='project'
            required
            value={project}
            onChange={e => setProject(e.target.value)}
          />
        </G.FormControl>

        <G.FormSubmit type='submit'>Create Task</G.FormSubmit>
      </G.Form>
    </S.Container>
  );
}

export default CreateTask;

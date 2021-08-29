import { useState, useEffect } from 'react';

// packages
import { gql, useMutation } from '@apollo/client';

// components
import ProjectTag from 'components/ProjectTag';

// styles
import * as S from './styles';

const COMPLETE_TASK = gql`
  mutation CompleteTask($completeTaskId: ID!) {
    completeTask(id: $completeTaskId) {
      id
      title
      description
      completed
      project {
        id
        title
      }
    }
  }
`;

function Task({ task, refetch }) {
  console.log('task:', task.id, task.title, task.completed, '\n');

  const [checked, setChecked] = useState(task.completed);

  const [completeTaskMutation, { loading, error, data }] =
    useMutation(COMPLETE_TASK);

  useEffect(() => {
    if (error) {
      window.alert(error.message);
    }
  }, [error]);

  useEffect(() => {
    if (data) {
      setChecked(data.completeTask.completed);

      refetch();
    }
  }, [data, refetch]);

  return (
    <S.Container>
      <S.Checkbox
        type='checkbox'
        checked={checked}
        onChange={e => {
          console.log(e.target.checked);
          completeTaskMutation({ variables: { completeTaskId: task.id } });
        }}
        disabled={loading}
      />

      <S.Info completed={task.completed}>
        <S.Title>{task.title}</S.Title>

        {task.description && <S.Description>{task.description}</S.Description>}
      </S.Info>

      <ProjectTag project={task.project} />
    </S.Container>
  );
}

export default Task;

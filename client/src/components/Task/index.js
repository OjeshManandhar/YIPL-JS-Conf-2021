import { useState, useCallback } from 'react';

// styles
import * as S from './styles';

function Task(props) {
  const task = props.task;

  const [checked, setChecked] = useState(task.completed);

  const toggleComplete = useCallback(() => {
    setChecked(prev => !prev);
  }, []);

  return (
    <S.Container>
      <S.Checkbox type='checkbox' value={checked} onChange={toggleComplete} />

      <S.Info completed={task.completed}>
        <S.Title>{task.title}</S.Title>

        {task.description && <S.Description>{task.description}</S.Description>}
      </S.Info>

      <div style={{ marginLeft: 'auto' }}>{task.projectId}</div>
    </S.Container>
  );
}

export default Task;

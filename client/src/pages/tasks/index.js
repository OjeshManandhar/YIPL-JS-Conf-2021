import { useState, useEffect, useCallback } from 'react';

// packages
import { gql, useQuery } from '@apollo/client';

// components
import Task from 'components/Task';

// styles
import * as S from './styles';

const GET_TASKS = gql`
  query Me {
    me {
      tasks {
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
  }
`;

function Tasks() {
  const { loading, error, data } = useQuery(GET_TASKS);

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    if (error) {
      window.alert(error.message);
    }
  }, [error]);

  useEffect(() => {
    const tasks = data && data.me && data.me.tasks;

    if (tasks) {
      setTasks([...tasks]);
    }
  }, [data]);

  const replaceTask = useCallback((id, newTask) => {
    if (id !== newTask.id) return;

    setTasks(prev => prev.map(t => (t.id === newTask.id ? newTask : t)));
  }, []);

  if (loading) return <div>Loading...</div>;

  if (!loading && !tasks) return <div>Something is not right</div>;

  return (
    <S.Container>
      <S.List>
        {tasks.map(t => (
          <S.ListItem key={t.id}>
            <Task
              task={t}
              completeTask={newTask => replaceTask(t.id, newTask)}
            />
          </S.ListItem>
        ))}
      </S.List>
    </S.Container>
  );
}

export default Tasks;

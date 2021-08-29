import { useMemo, useEffect } from 'react';

// packages
import { gql, useQuery } from '@apollo/client';

// components
import Task from 'components/Task';

// styles
import * as S from './styles';

const GET_TASKS = gql`
  query GetTasks {
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
  const { loading, error, data, refetch } = useQuery(GET_TASKS);

  const tasks = useMemo(() => data && data.me && data.me.tasks, [data]);

  useEffect(() => {
    if (error) {
      window.alert(error.message);
    }
  }, [error]);

  if (loading) return <div>Loading...</div>;

  if (!loading && !tasks) return <div>Something is not right</div>;

  return (
    <S.Container>
      <S.List>
        {tasks.map(t => (
          <S.ListItem key={t.id}>
            <Task task={t} refetch={() => refetch()} />
          </S.ListItem>
        ))}
      </S.List>
    </S.Container>
  );
}

export default Tasks;

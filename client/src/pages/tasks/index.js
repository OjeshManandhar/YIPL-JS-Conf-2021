import { useMemo, useEffect } from 'react';

// next
import Head from 'next/head';

// packages
import { gql, useQuery } from '@apollo/client';

// components
import Task from 'components/Task';
import Loading from 'components/Loading';
import CreateTask from 'components/CreateTask';

// styles
import * as S from './styles';

// env
import { APP_NAME } from 'env_config';

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

  if (loading) return <Loading />;

  return (
    <>
      <Head>
        <title>Tasks | {APP_NAME}</title>
      </Head>
      <S.Container>
        <S.List>
          {tasks.map(t => (
            <S.ListItem key={t.id}>
              <Task task={t} refetch={() => refetch()} />
            </S.ListItem>
          ))}
        </S.List>

        <CreateTask refetch={() => refetch()} />
      </S.Container>
    </>
  );
}

export default Tasks;

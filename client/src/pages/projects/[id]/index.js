import { useEffect } from 'react';

// next
import Head from 'next/head';
import { useRouter } from 'next/router';

// packages
import { gql, useQuery } from '@apollo/client';

// components
import Loading from 'components/Loading';

// styles
import * as S from './styles';

// env
import { APP_NAME } from 'env_config';

const PROJECT = gql`
  query Project($projectId: ID!) {
    project(id: $projectId) {
      id
      title
      description
      status
      members {
        name
      }
      tasks {
        completed
      }
    }
  }
`;

function Project() {
  const router = useRouter();
  const id = parseInt(router.query.id, 10);

  const { loading, error, data } = useQuery(PROJECT, {
    variables: {
      projectId: id
    }
  });

  useEffect(() => {
    if (error) {
      window.alert(error.message);
    }
  }, [error]);

  if (loading) return <Loading />;

  const project = data.project;
  const members = project.members.map(mem => mem.name).join(', ');
  const completedTasks = project.tasks.reduce(
    (acc, cur) => (cur.completed ? acc + 1 : acc),
    0
  );

  return (
    <>
      <Head>
        <title>
          {project.title} | {APP_NAME}
        </title>
      </Head>

      <S.Container>
        <S.Top>
          <S.Title>{project.title}</S.Title>
          <S.Status>{project.status}</S.Status>
        </S.Top>

        <S.Description>{project.description}</S.Description>

        {project.members.length > 0 && (
          <S.Text>
            <strong>Members: </strong>
            {members}
          </S.Text>
        )}

        {project.tasks.length > 0 && (
          <S.Text>
            <strong>Tasks: </strong>
            {`${completedTasks} out of ${project.tasks.length} completed.`}
          </S.Text>
        )}
      </S.Container>
    </>
  );
}

export default Project;

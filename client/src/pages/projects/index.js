import { useMemo, useEffect } from 'react';

// packages
import { gql, useQuery } from '@apollo/client';

// components
import Loading from 'components/Loading';
import Project from 'components/Project';

// styles
import * as S from './styles';

const GET_PROJECTS = gql`
  query ListProjects {
    listProjects {
      id
      title
      description
      status
    }
  }
`;

function Projects() {
  const { loading, error, data } = useQuery(GET_PROJECTS);

  const projects = useMemo(() => data && data.listProjects, [data]);

  useEffect(() => {
    ``;
    if (error) {
      window.alert(error.message);
    }
  }, [error]);

  if (loading) return <Loading />;

  return (
    <S.Container>
      <S.List>
        {projects.map(p => (
          <S.ListItem key={p.id}>
            <Project project={p} />
          </S.ListItem>
        ))}
      </S.List>
    </S.Container>
  );
}

export default Projects;

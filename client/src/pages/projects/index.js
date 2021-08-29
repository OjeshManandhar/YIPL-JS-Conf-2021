import { useMemo, useEffect } from 'react';

// packages
import { gql, useQuery } from '@apollo/client';

// components
import Loading from 'components/Loading';

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

  return <S.Container>{JSON.stringify(projects, null, 2)}</S.Container>;
}

export default Projects;

// next
import { useRouter } from 'next/router';

// styles
import * as S from './styles';

function ProjectTag({ project }) {
  const router = useRouter();
  const { id, title } = project;

  return (
    <S.Container onClick={() => router.push(`/projects/${id}`)}>
      {title}
    </S.Container>
  );
}

export default ProjectTag;

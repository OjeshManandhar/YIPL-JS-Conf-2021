// styles
import * as S from './styles';

function ProjectTag({ project }) {
  const { id, title } = project;

  return (
    <S.Container onClick={() => console.log(`Navigate to /project/${id}`)}>
      {title}
    </S.Container>
  );
}

export default ProjectTag;

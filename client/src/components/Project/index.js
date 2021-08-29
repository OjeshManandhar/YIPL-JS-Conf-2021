// styles
import * as S from './styles';

function Project({ project }) {
  return (
    <S.Container>
      <S.Info>
        <S.Title>{project.title}</S.Title>

        {project.description && (
          <S.Description>{project.description}</S.Description>
        )}
      </S.Info>

      <S.Status>{project.status}</S.Status>
    </S.Container>
  );
}

export default Project;

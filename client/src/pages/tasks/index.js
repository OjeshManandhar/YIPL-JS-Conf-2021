// styles
import * as S from './styles';

const DUMMY_TASKS = [
  { id: 1, title: 'Task 1', description: '', completed: false, projectId: 1 },
  {
    id: 2,
    title: 'Task 2',
    description: 'Completed',
    completed: true,
    projectId: 1
  },
  {
    id: 3,
    title: 'Task 3',
    description: 'Empty description',
    completed: false,
    projectId: 2
  }
];

function Tasks() {
  return (
    <S.Container>
      <S.List>
        {DUMMY_TASKS.map(t => (
          <S.ListItem key={t.id}>{t.title}</S.ListItem>
        ))}
      </S.List>
    </S.Container>
  );
}

export default Tasks;

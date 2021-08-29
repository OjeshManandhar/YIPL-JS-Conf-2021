// components
import Task from 'components/Task';

// styles
import * as S from './styles';

const DUMMY_TASKS = [
  {
    id: 1,
    title: 'Task 1',
    description: '',
    completed: false,
    project: { id: 1, title: 'Test' }
  },
  {
    id: 2,
    title: 'Task 2',
    description: 'Completed',
    completed: true,
    project: { id: 1, title: 'Test' }
  },
  {
    id: 3,
    title: 'Task 3',
    description: 'Empty description',
    completed: false,
    project: { id: 2, title: 'Test 2' }
  }
];

function Tasks() {
  return (
    <S.Container>
      <S.List>
        {DUMMY_TASKS.map(t => (
          <S.ListItem key={t.id}>
            <Task task={t} />
          </S.ListItem>
        ))}
      </S.List>
    </S.Container>
  );
}

export default Tasks;

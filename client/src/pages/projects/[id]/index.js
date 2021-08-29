// next
import { useRouter } from 'next/router';

function Project() {
  const router = useRouter();

  const id = parseInt(router.query.id, 10);

  return <div>Singe project with id: {id}</div>;
}

export default Project;

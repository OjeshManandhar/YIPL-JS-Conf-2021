import { useCallback } from 'react';

// next
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useReactiveVar } from '@apollo/client';

// reactive var
import User from 'reactiveVar/User';

// utils
import token from 'utils/token';
import client from 'utils/apollo-client';

// assets
import logo from 'public/favicon-32x32.png';

// styles
import * as S from './styles';

function ProtectedLayout(props) {
  const router = useRouter();
  const user = useReactiveVar(User);

  const logout = useCallback(() => {
    User({});
    token.save(null);
    client.resetStore();

    router.push('/');
  }, [router]);

  // checks whether we are on client / browser or server.
  if (typeof window === 'undefined') {
    return null;
  }

  if (Object.keys(user).length === 0) {
    token.save(null);
    client.resetStore();
    router.replace('/');

    return null;
  }

  return (
    <>
      <S.Header>
        <S.NavBar>
          <S.Image src={logo} alt='Task Manager' width={32} height={32} />

          <S.Links>
            <Link href='/tasks' passHref>
              <S.Link>Tasks</S.Link>
            </Link>
            <Link href='/projects' passHref>
              <S.Link>Projects</S.Link>
            </Link>

            <S.Logout onClick={logout}>Log Out</S.Logout>
          </S.Links>
        </S.NavBar>
      </S.Header>
      {props.children}
    </>
  );
}

export default ProtectedLayout;

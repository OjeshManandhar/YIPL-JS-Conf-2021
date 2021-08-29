import { useState, useEffect, useCallback } from 'react';

// next
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';

// packages
import { gql, useLazyQuery } from '@apollo/client';

// reactive var
import User from 'reactiveVar/User';

// utils
import _token from 'utils/token';
import client from 'utils/apollo-client';

// assets
import logo from 'public/favicon-32x32.png';

// styles
import * as S from './styles';

const ME = gql`
  query Me {
    me {
      id
      name
    }
  }
`;

const SplashScreen = dynamic(() => import('components/SplashScreen'));

function ProtectedLayout(props) {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(true);

  const [me, { error, data }] = useLazyQuery(ME);

  const logout = useCallback(() => {
    User({});
    _token.save(null);

    router.push('/');
  }, [router]);

  useEffect(() => {
    const user = User();

    if (Object.keys(user).length === 0) {
      const token = _token.retrieve();

      if (token) {
        me();
      } else {
        client.resetStore();
        router.replace('/');
      }
    } else {
      setIsLoading(false);
    }
  }, [me, router]);

  useEffect(() => {
    if (error) {
      router.replace('/');
      client.resetStore();
    }
  }, [error, router]);

  useEffect(() => {
    if (data && data.me) {
      const user = {
        id: data.me.id,
        name: data.me.name
      };

      User(user);

      setIsLoading(false);
    }
  }, [data]);

  // checks whether we are on client / browser or server.
  if (typeof window === 'undefined') {
    return null;
  }

  if (isLoading) return <SplashScreen />;

  return (
    <>
      <S.Header>
        <S.NavBar>
          <S.Image src={logo} alt='Task Manager' width={32} height={32} />

          <S.Links>
            <S.Link>
              <Link href='/tasks' passHref>
                <S.A>Tasks</S.A>
              </Link>
            </S.Link>
            <S.Link>
              <Link href='/projects' passHref>
                <S.A>Projects</S.A>
              </Link>
            </S.Link>

            <S.Link>
              <S.Logout onClick={logout}>Log Out</S.Logout>
            </S.Link>
          </S.Links>
        </S.NavBar>
      </S.Header>

      {props.children}
    </>
  );
}

export default ProtectedLayout;

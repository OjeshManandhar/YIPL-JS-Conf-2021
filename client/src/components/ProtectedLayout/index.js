import { useState, useEffect, useCallback } from 'react';

// next
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useReactiveVar } from '@apollo/client';

// packages
import { gql, useLazyQuery } from '@apollo/client';

// reactive var
import User from 'reactiveVar/User';

// components
import SplashScreen from 'components/SplashScreen';

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

function ProtectedLayout(props) {
  const router = useRouter();
  const user = useReactiveVar(User);

  const [isLoading, setIsLoading] = useState(true);

  const [me, { error, data }] = useLazyQuery(ME);

  console.log(' error, data:', isLoading, error, data);

  const logout = useCallback(() => {
    User({});
    _token.save(null);
    client.resetStore();

    router.push('/');
  }, [router]);

  useEffect(() => {
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
  }, [me, user, router]);

  useEffect(() => {
    if (error) {
      client.resetStore();
      router.replace('/');
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

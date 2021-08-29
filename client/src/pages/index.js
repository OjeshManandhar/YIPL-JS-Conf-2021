import { useEffect, useState } from 'react';

// next
import Head from 'next/head';
import { useRouter } from 'next/router';

// packages
import { gql, useLazyQuery } from '@apollo/client';

// reactive var
import User from 'reactiveVar/User';

// components
import LogIn from 'components/LogIn';
import SplashScreen from 'components/SplashScreen';
import CreateAccount from 'components/CreateAccount';

// utils
import _token from 'utils/token';
import client from 'utils/apollo-client';

// env
import { APP_NAME } from 'env_config';

const ME = gql`
  query Me {
    me {
      id
      name
    }
  }
`;

function Home() {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(true);
  const [isLogginIn, setIsLogginIn] = useState(true);

  const [me, { error, data }] = useLazyQuery(ME);

  const title = isLoading
    ? APP_NAME
    : isLogginIn
    ? `Log In | ${APP_NAME}`
    : `Create Account | ${APP_NAME}`;

  useEffect(() => {
    const token = _token.retrieve();

    if (token) {
      me();
    } else {
      client.resetStore();
      setIsLoading(false);
    }
  }, [me]);

  useEffect(() => {
    if (data) {
      const user = {
        id: data.me.id,
        name: data.me.name
      };

      User(user);

      router.push('/tasks');
    }
  }, [data, router]);

  useEffect(() => {
    if (error) {
      setIsLoading(false);
    }
  }, [error]);

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      {isLoading ? (
        <SplashScreen />
      ) : (
        <>
          {isLogginIn ? (
            <LogIn switch={() => setIsLogginIn(false)} />
          ) : (
            <CreateAccount switch={() => setIsLogginIn(true)} />
          )}
        </>
      )}
    </>
  );
}

export default Home;

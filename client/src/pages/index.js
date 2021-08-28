import { useEffect, useState } from 'react';

// Next
import Head from 'next/head';

// packages
import { gql, useLazyQuery } from '@apollo/client';

// components
import LogIn from 'components/LogIn';
import SplashScreen from 'components/SplashScreen';
import CreateAccount from 'components/CreateAccount';

// utils
import _token from 'utils/token';

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
      setIsLoading(false);
    }
  }, [me]);

  useEffect(() => {
    if (data) {
      console.log('data:', data);
      console.log('navigate to other page');
    }
  }, [data]);

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

import { useEffect, useState } from 'react';

// Next
import Head from 'next/head';

// components
import LogIn from 'components/LogIn';
import SplashScreen from 'components/SplashScreen';
import CreateAccount from 'components/CreateAccount';

// utils
import token from 'utils/token';

// env
import { APP_NAME } from 'env_config';

function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [isLogginIn, setIsLogginIn] = useState(true);

  const title = isLoading
    ? APP_NAME
    : isLogginIn
    ? `Log In | ${APP_NAME}`
    : `Create Account | ${APP_NAME}`;

  useEffect(() => {
    if (token.retrieve()) {
      console.log('navigate to other page');
    } else {
      setIsLoading(false);
    }
  }, [setIsLoading]);

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

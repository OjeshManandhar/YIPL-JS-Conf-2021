import React, { useEffect, useState } from 'react';

// components
import LogIn from 'components/LogIn';
import SplashScreen from 'components/SplashScreen';
import CreateAccount from 'components/CreateAccount';

function Home() {
  const [isLogginIn] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check token
    setTimeout(() => setIsLoading(false), 2.5 * 1000);
  });

  return isLoading ? (
    <SplashScreen />
  ) : isLogginIn ? (
    <LogIn />
  ) : (
    <CreateAccount />
  );
}

export default Home;

import React, { useEffect, useState } from 'react';

// components
import LogIn from 'components/LogIn';
import SplashScreen from 'components/SplashScreen';
import CreateAccount from 'components/CreateAccount';

function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [isLogginIn, setIsLogginIn] = useState(true);

  useEffect(() => {
    // Check token
    setTimeout(() => setIsLoading(false), 2.5 * 1000);
  });

  return isLoading ? (
    <SplashScreen />
  ) : isLogginIn ? (
    <LogIn switch={() => setIsLogginIn(false)} />
  ) : (
    <CreateAccount switch={() => setIsLogginIn(true)} />
  );
}

export default Home;

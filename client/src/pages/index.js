import React, { useState } from 'react';

// components
import LogIn from 'components/LogIn';
import CreateAccount from 'components/CreateAccount';

function Home() {
  const [isLogginIn] = useState(true);

  return isLogginIn ? <LogIn /> : <CreateAccount />;
}

export default Home;

import React, { useState } from 'react';

import Routes from './Routes';
import Menu from './components/Menu';
import { UserProvider } from 'store/user.context';
import { getUserInfo } from 'helpers/user';

const App = () => {
  const [state, setState] = useState(getUserInfo());

  return (
    <UserProvider value={[state, setState]}>
      <Menu />
      <Routes />
    </UserProvider>
  );
};

export default App;

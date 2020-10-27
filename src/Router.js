import React, { useContext } from 'react';

import Layout from './Layout';

import Game from './screens/Game';
import Home from './screens/Home';

import SessionContext from './contexts/SessionContext';

const Router = () => {
  const { isAuthenticated } = useContext(SessionContext);

  return (
    <Layout className="layout">
      {!isAuthenticated && <Home />}
      {isAuthenticated && <Game />}
    </Layout>
  );
};

export default Router;

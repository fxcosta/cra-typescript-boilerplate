import React from 'react';
import { Router } from 'react-router-dom';
import { PersistGate } from 'zustand-persist';

import GlobalStyles from './styles/global';
import history from './services/history';
import Routes from './routes';

const App: React.FC = () => {
  return (
    <PersistGate>
      <Router history={history}>
        <Routes />
        <GlobalStyles />
      </Router>
    </PersistGate>
  );
};

export default App;

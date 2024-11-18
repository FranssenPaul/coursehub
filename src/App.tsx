// import { useState } from 'react';
// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';

import React from 'react';
import Header from './components/Header';
import DashboardView from './views/DashBoardView';

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <DashboardView />
    </div>
  );
};

export default App;

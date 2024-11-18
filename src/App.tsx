// import { useState } from 'react';
// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';

import React, { useEffect } from 'react';
import { useThemeStore } from './store/themeStore';
import Header from './components/Header';
import DashboardView from './views/DashBoardView';

const App: React.FC = () => {
  const { theme } = useThemeStore();
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <div>
      <Header />
      <DashboardView />
    </div>
  );
};

export default App;

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { useClassStore } from './store/useClassStore.ts';

// Call initialize before rendering
(async () => {
  await useClassStore.getState().initialize();

  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
})();

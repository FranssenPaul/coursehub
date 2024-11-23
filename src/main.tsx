import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { initializeApp } from './services/appInitializationService';

void (async () => {
  try {
    await initializeApp(); // Await the initialization process

    createRoot(document.getElementById('root')!).render(
      <StrictMode>
        <App />
      </StrictMode>
    );
  } catch (error) {
    console.error('Failed to initialize the application:', error);
  }
})();

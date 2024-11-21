import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { storeMediator } from './mediator/storeMediator';

import './index.css';
import App from './App.tsx';

(async () => {
  await storeMediator.initialize(); // Use mediator to initialize the stores
  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
})();

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import AppWalletProvider from './components/AppWalletProvider';
// Import wallet adapter styles
import '@solana/wallet-adapter-react-ui/styles.css';
// Import your Tailwind CSS
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppWalletProvider>
      <App />
    </AppWalletProvider>
  </StrictMode>
);

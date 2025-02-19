import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client'; // Correto para React 18
import App from './App.tsx';
import { CssBaseline, ThemeProvider } from '@mui/material';
import theme from './theme'; // Certifique-se de ter o tema definido corretamente

// Corrigindo a renderização usando `ReactDOM.createRoot()`
ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </StrictMode>
);

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ThemeProvider } from './providers/ThemeProvider';
import { RouterProvider } from './providers/RouterProvider';
import './theme/global.css';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider>
        <App />
      </RouterProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
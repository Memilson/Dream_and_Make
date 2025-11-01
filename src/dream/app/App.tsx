import React from 'react';
import { RouterProvider } from './providers/RouterProvider';
import { ThemeProvider } from './providers/ThemeProvider';
import { MainLayout } from './layout/MainLayout';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <MainLayout>
        <RouterProvider />
      </MainLayout>
    </ThemeProvider>
  );
};

export default App;
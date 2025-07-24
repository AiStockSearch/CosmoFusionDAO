import React from 'react';
import LandingPage from './LandingPage';
import { HelmetProvider } from 'react-helmet-async';

function App() {
  return (
    <HelmetProvider>
      <LandingPage />
    </HelmetProvider>
  );
}

export default App;

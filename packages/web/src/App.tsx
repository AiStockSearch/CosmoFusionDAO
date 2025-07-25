import React from 'react';
import LandingPage from './LandingPage';
import { HelmetProvider } from 'react-helmet-async';

function App(): React.JSX.Element {
  return (
    <HelmetProvider>
      <LandingPage />
    </HelmetProvider>
  );
}

export default App;

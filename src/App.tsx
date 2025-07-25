import React from 'react';
import LandingPage from './LandingPage';
import { HelmetProvider } from 'react-helmet-async';
import { LocaleProvider } from './contexts/LocaleContext';

function App(): React.JSX.Element {
  return (
    <LocaleProvider>
      <HelmetProvider>
        <LandingPage />
      </HelmetProvider>
    </LocaleProvider>
  );
}

export default App;

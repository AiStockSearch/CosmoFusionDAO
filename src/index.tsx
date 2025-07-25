import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { SentryBoundary } from './components/SentryBoundary';
import './index.css';
import reportWebVitals from './reportWebVitals';
import './sentry';

// SEO: динамический title и description
const setMeta = (title: string, description: string) => {
  document.title = title;
  let desc = document.querySelector("meta[name='description']");
  if (!desc) {
    desc = document.createElement('meta');
    desc.setAttribute('name', 'description');
    document.head.appendChild(desc);
  }
  desc.setAttribute('content', description);
};

setMeta(
  'CosmoFusion DAO — платформа коллективного интеллекта',
  'Открытая платформа для коллективного принятия решений, AI, DAO и инноваций. Грант Cosmos x FIRE.',
);

// Register service worker for caching and offline support
if ( process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator )
{
  window.addEventListener( 'load', () =>
  {
    navigator.serviceWorker.register( '/service-worker.js' )
      .then( ( registration ) =>
      {
        console.log( 'SW registered: ', registration );
      } )
      .catch( ( registrationError ) =>
      {
        console.log( 'SW registration failed: ', registrationError );
      } );
  } );
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <SentryBoundary fallback={<p>Произошла непредвиденная ошибка. Попробуйте обновить страницу.</p>} showDialog>
      <App />
    </SentryBoundary>
  </React.StrictMode>,
);

reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

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

// if ('serviceWorker' in navigator) {
//   window.addEventListener('load', () => {
//     navigator.serviceWorker.register('/service-worker.js');
//   });
// }

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

reportWebVitals();

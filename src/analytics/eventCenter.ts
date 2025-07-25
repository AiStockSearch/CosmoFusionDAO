import * as Sentry from '@sentry/react';
import { EventPayload, EventPlatform, EventMeta } from './eventTypes';

// TODO: подключить реальные SDK Amplitude, Firebase при необходимости
// import amplitude from 'amplitude-js';
// import firebase from 'firebase/app';

function getSessionId(): string {
  const key = 'cosmo_session_id';
  let sessionId = '';
  if (typeof window !== 'undefined') {
    sessionId = localStorage.getItem(key) || '';
    if (!sessionId) {
      sessionId = Math.random().toString(36).slice(2) + Date.now();
      localStorage.setItem(key, sessionId);
    }
  }
  return sessionId;
}

export const eventCenter = {
  logEvent: (payload: EventPayload, platforms: EventPlatform[] = ['sentry', 'amplitude', 'firebase']) => {
    // Use requestIdleCallback for non-critical analytics
    const sendAnalytics = () =>
    {
      const meta: EventMeta = {
        sessionId: getSessionId(),
        timestamp: Date.now(),
        platform: platforms,
        ...payload.meta,
      };
      // Sentry
      if ( platforms.includes( 'sentry' ) )
      {
        Sentry.captureMessage( `[${ payload.category }] ${ payload.name } | ${ payload.label || '' } | ${ JSON.stringify( payload.value ) }`, { extra: meta } );
      }
      // Amplitude (пример)
      // if (platforms.includes('amplitude') && window.amplitude) {
      //   window.amplitude.getInstance().logEvent(payload.name, { ...payload, ...meta });
      // }
      // Firebase (пример)
      // if (platforms.includes('firebase') && window.firebase) {
      //   window.firebase.analytics().logEvent(payload.name, { ...payload, ...meta });
      // }
      if ( process.env.NODE_ENV === 'development' ) console.log( '[eventCenter]', payload, meta );
    };

    // Use requestIdleCallback if available, otherwise setTimeout
    if ( typeof window !== 'undefined' && 'requestIdleCallback' in window )
    {
      ( window as any ).requestIdleCallback( sendAnalytics );
    } else
    {
      setTimeout( sendAnalytics, 0 );
    }
  },
  captureError: (error: Error | string, context?: any, platforms: EventPlatform[] = ['sentry']) => {
    if (platforms.includes('sentry')) {
      Sentry.captureException(error, { extra: { ...context, sessionId: getSessionId() } });
    }
    if (process.env.NODE_ENV === 'development') console.error('[eventCenter][error]', error, context);
  },
  getSessionId,
}; 
import * as Sentry from '@sentry/react';
import amplitude from 'amplitude-js';
import { initializeApp } from 'firebase/app';
import { getAnalytics, logEvent as firebaseLogEvent } from 'firebase/analytics';
import { EventPayload, EventPlatform, EventMeta } from './eventTypes';
import { analyticsConfig, isAmplitudeAvailable, isFirebaseAvailable, isSentryAvailable } from './config';
import './types';

// Инициализация Firebase
let firebaseApp: any = null;
let firebaseAnalytics: any = null;

if ( typeof window !== 'undefined' && analyticsConfig.firebase.apiKey )
{
  try
  {
    firebaseApp = initializeApp( analyticsConfig.firebase );
    firebaseAnalytics = getAnalytics( firebaseApp );
    window.firebase = { analytics: () => firebaseAnalytics };
  } catch ( error )
  {
    console.warn( '[Analytics] Firebase initialization failed:', error );
  }
}

// Инициализация Amplitude
if ( typeof window !== 'undefined' && analyticsConfig.amplitude.apiKey )
{
  try
  {
    const amplitudeInstance = amplitude.getInstance();
    amplitudeInstance.init( analyticsConfig.amplitude.apiKey );
    window.amplitude = amplitudeInstance;
  } catch ( error )
  {
    console.warn( '[Analytics] Amplitude initialization failed:', error );
  }
}

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
      if ( platforms.includes( 'sentry' ) && isSentryAvailable() )
      {
        Sentry.captureMessage(
          `[${ payload.category }] ${ payload.name } | ${ payload.label || '' } | ${ JSON.stringify( payload.value ) }`,
          { extra: meta }
        );
      }

      // Amplitude
      if ( platforms.includes( 'amplitude' ) && isAmplitudeAvailable() )
      {
        try
        {
          const eventProperties = {
            category: payload.category,
            label: payload.label,
            value: payload.value,
            sessionId: meta.sessionId,
            timestamp: meta.timestamp,
            ...payload.meta,
          };
          window.amplitude.logEvent( payload.name, eventProperties );
        } catch ( error )
        {
          console.warn( '[Analytics] Amplitude event failed:', error );
        }
      }

      // Firebase Analytics
      if ( platforms.includes( 'firebase' ) && isFirebaseAvailable() )
      {
        try
        {
          const eventProperties = {
            category: payload.category,
            label: payload.label,
            value: payload.value,
            sessionId: meta.sessionId,
            timestamp: meta.timestamp,
            ...payload.meta,
          };
          firebaseLogEvent( firebaseAnalytics, payload.name, eventProperties );
        } catch ( error )
        {
          console.warn( '[Analytics] Firebase event failed:', error );
        }
      }

      if ( process.env.NODE_ENV === 'development' )
      {
        console.log( '[eventCenter]', payload, meta );
      }
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
    if ( platforms.includes( 'sentry' ) && isSentryAvailable() )
    {
      Sentry.captureException(error, { extra: { ...context, sessionId: getSessionId() } });
    }
    if ( process.env.NODE_ENV === 'development' )
    {
      console.error( '[eventCenter][error]', error, context );
    }
  },

  // Методы для установки пользователя
  setUserId: ( userId: string ) =>
  {
    if ( isAmplitudeAvailable() )
    {
      window.amplitude.setUserId( userId );
    }
    if ( isFirebaseAvailable() )
    {
      firebaseLogEvent( firebaseAnalytics, 'user_login', { user_id: userId } );
    }
  },

  setUserProperties: ( properties: Record<string, any> ) =>
  {
    if ( isAmplitudeAvailable() )
    {
      window.amplitude.setUserProperties( properties );
    }
    if ( isFirebaseAvailable() )
    {
      firebaseLogEvent( firebaseAnalytics, 'user_properties_set', properties );
    }
  },

  getSessionId,
}; 
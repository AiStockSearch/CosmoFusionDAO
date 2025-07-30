// Конфигурация аналитических платформ
export const analyticsConfig = {
  amplitude: {
    apiKey: process.env.REACT_APP_AMPLITUDE_API_KEY || '',
    userId: null as string | null,
    sessionId: null as string | null,
  },
  firebase: {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY || '',
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN || '',
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID || '',
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET || '',
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID || '',
    appId: process.env.REACT_APP_FIREBASE_APP_ID || '',
    measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID || '',
  },
  sentry: {
    dsn: process.env.REACT_APP_SENTRY_DSN || '',
  },
};

// Проверка доступности платформ
export const isAmplitudeAvailable = () => {
  return typeof window !== 'undefined' && 
         window.amplitude && 
         analyticsConfig.amplitude.apiKey;
};

export const isFirebaseAvailable = () => {
  return typeof window !== 'undefined' && 
         window.firebase && 
         analyticsConfig.firebase.apiKey;
};

export const isSentryAvailable = () => {
  return analyticsConfig.sentry.dsn;
}; 
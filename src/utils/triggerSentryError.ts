import * as Sentry from '@sentry/react';

export function triggerSentryError(message: string = 'Test Sentry error') {
  try {
    throw new Error(message);
  } catch (e) {
    Sentry.captureException(e);
  }
} 
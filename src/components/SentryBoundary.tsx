import * as Sentry from '@sentry/react';
import React from 'react';
import type { FallbackRender } from '@sentry/react';

interface SentryBoundaryProps {
  fallback?: React.ReactElement | FallbackRender;
  showDialog?: boolean;
  children: React.ReactNode;
}

const DefaultFallback = <p>Произошла ошибка. Попробуйте обновить страницу.</p>;

export const SentryBoundary: React.FC<SentryBoundaryProps> = ({
  fallback = DefaultFallback,
  showDialog = false,
  children,
}) => {
  return (
    <Sentry.ErrorBoundary fallback={fallback} showDialog={showDialog}>
      {children}
    </Sentry.ErrorBoundary>
  );
};

export default SentryBoundary; 
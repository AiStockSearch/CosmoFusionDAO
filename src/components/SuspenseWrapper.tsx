import React, { Suspense } from 'react';

interface SuspenseWrapperProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

const SuspenseWrapper: React.FC<SuspenseWrapperProps> = ({ 
  children, 
  fallback = <div className="flex items-center justify-center p-4">Loading...</div> 
}) => {
  return (
    <Suspense fallback={fallback}>
      {children}
    </Suspense>
  );
};

export default SuspenseWrapper; 
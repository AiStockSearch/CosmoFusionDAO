import React, { useRef, useEffect } from 'react';
import { eventCenter } from '../analytics/eventCenter';

interface SectionWithViewEventProps {
  eventName: string;
  children: React.ReactNode;
  once?: boolean;
  threshold?: number;
}

export const SectionWithViewEvent: React.FC<SectionWithViewEventProps> = ({ eventName, children, once = true, threshold = 0.3 }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const triggered = useRef(false);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && (!once || !triggered.current)) {
          eventCenter.logEvent({ category: 'view', name: eventName });
          triggered.current = true;
          if (once) observer.disconnect();
        }
      },
      { threshold }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [eventName, once, threshold]);

  return <div ref={ref}>{children}</div>;
}; 
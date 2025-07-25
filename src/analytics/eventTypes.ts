export type EventCategory = 'view' | 'start' | 'click' | 'scroll' | 'submit' | 'custom';
export type EventPlatform = 'sentry' | 'amplitude' | 'firebase';

export interface EventMeta {
  sessionId: string;
  timestamp: number;
  platform?: EventPlatform[];
  [key: string]: any;
}

export interface EventPayload {
  category: EventCategory;
  name: string;
  label?: string;
  value?: any;
  meta?: Record<string, any>;
} 
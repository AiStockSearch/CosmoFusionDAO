declare module 'amplitude-js' {
  const amplitude: {
    getInstance(): {
      init(apiKey: string): void;
      logEvent(eventName: string, eventProperties?: any): void;
      setUserId(userId: string): void;
      setUserProperties(properties: Record<string, any>): void;
    };
  };
  export default amplitude;
} 
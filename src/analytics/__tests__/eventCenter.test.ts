import { eventCenter } from '../eventCenter';

// Mock для window.amplitude
const mockAmplitude = {
  logEvent: jest.fn(),
  setUserId: jest.fn(),
  setUserProperties: jest.fn(),
};

// Mock для window.firebase
const mockFirebase = {
  analytics: jest.fn(() => ({
    logEvent: jest.fn(),
  })),
};

// Mock для Sentry
jest.mock('@sentry/react', () => ({
  captureMessage: jest.fn(),
  captureException: jest.fn(),
}));

describe('eventCenter', () => {
  beforeEach(() => {
    // Очищаем моки
    jest.clearAllMocks();
    
    // Mock localStorage
    Object.defineProperty(window, 'localStorage', {
      value: {
        getItem: jest.fn(() => null),
        setItem: jest.fn(),
      },
      writable: true,
    });

    // Mock requestIdleCallback
    Object.defineProperty(window, 'requestIdleCallback', {
      value: jest.fn((callback) => callback()),
      writable: true,
    });

    // Mock process.env.NODE_ENV
    Object.defineProperty(process.env, 'NODE_ENV', {
      value: 'development',
      writable: true,
    });
  });

  describe('logEvent', () => {
    it('should log event to console in development', () => {
      const consoleSpy = jest.spyOn(console, 'log').mockImplementation();
      
      eventCenter.logEvent({
        category: 'click',
        name: 'test_event',
        label: 'test_label',
      });

      expect(consoleSpy).toHaveBeenCalledWith(
        '[eventCenter]',
        expect.objectContaining({
          category: 'click',
          name: 'test_event',
          label: 'test_label',
        }),
        expect.objectContaining({
          sessionId: expect.any(String),
          timestamp: expect.any(Number),
        })
      );

      consoleSpy.mockRestore();
    });

    it('should include sessionId in event meta', () => {
      const consoleSpy = jest.spyOn(console, 'log').mockImplementation();
      
      eventCenter.logEvent({
        category: 'view',
        name: 'page_view',
      });

      const callArgs = consoleSpy.mock.calls[0];
      const meta = callArgs[2];
      
      expect(meta.sessionId).toBeDefined();
      expect(typeof meta.sessionId).toBe('string');
      expect(meta.sessionId.length).toBeGreaterThan(0);

      consoleSpy.mockRestore();
    });
  });

  describe('captureError', () => {
    it('should log error to console in development', () => {
      const consoleSpy = jest.spyOn(console, 'error').mockImplementation();
      
      const error = new Error('Test error');
      eventCenter.captureError(error, { context: 'test' });

      expect(consoleSpy).toHaveBeenCalledWith(
        '[eventCenter][error]',
        error,
        { context: 'test' }
      );

      consoleSpy.mockRestore();
    });
  });

  describe('getSessionId', () => {
    it('should return consistent sessionId', () => {
      const sessionId1 = eventCenter.getSessionId();
      const sessionId2 = eventCenter.getSessionId();
      
      expect(sessionId1).toBe(sessionId2);
    });

    it('should generate new sessionId if not exists', () => {
      // Mock localStorage to return null (no existing sessionId)
      Object.defineProperty(window, 'localStorage', {
        value: {
          getItem: jest.fn(() => null),
          setItem: jest.fn(),
        },
        writable: true,
      });

      const sessionId = eventCenter.getSessionId();
      
      expect(sessionId).toBeDefined();
      expect(typeof sessionId).toBe('string');
      expect(sessionId.length).toBeGreaterThan(0);
    });
  });

  describe('setUserId', () => {
    it('should set user ID if amplitude is available', () => {
      // Mock window.amplitude
      Object.defineProperty(window, 'amplitude', {
        value: mockAmplitude,
        writable: true,
      });

      // Mock isAmplitudeAvailable to return true
      jest.doMock('../config', () => ({
        isAmplitudeAvailable: () => true,
        isFirebaseAvailable: () => false,
        isSentryAvailable: () => false,
      }));

      eventCenter.setUserId('test_user_123');
      
      expect(mockAmplitude.setUserId).toHaveBeenCalledWith('test_user_123');
    });
  });

  describe('setUserProperties', () => {
    it('should set user properties if amplitude is available', () => {
      // Mock window.amplitude
      Object.defineProperty(window, 'amplitude', {
        value: mockAmplitude,
        writable: true,
      });

      // Mock isAmplitudeAvailable to return true
      jest.doMock('../config', () => ({
        isAmplitudeAvailable: () => true,
        isFirebaseAvailable: () => false,
        isSentryAvailable: () => false,
      }));

      const properties = { plan: 'premium', country: 'RU' };
      eventCenter.setUserProperties(properties);
      
      expect(mockAmplitude.setUserProperties).toHaveBeenCalledWith(properties);
    });
  });
}); 
import { act, renderHook } from '@testing-library/react';
import { useTelegramBot } from '../useTelegramBot';

// Мокаем eventCenter
jest.mock('../../analytics/eventCenter', () => ({
  eventCenter: {
    logEvent: jest.fn(),
    captureError: jest.fn(),
  },
}));

// Мокаем fetch
global.fetch = jest.fn();

describe('useTelegramBot', () => {
  const mockConfig = {
    token: 'test_token',
    chatId: 'test_chat_id',
  };

  const mockMessage = {
    text: 'Test message',
    parseMode: 'HTML' as const,
  };

  beforeEach(() => {
    jest.clearAllMocks();
    // Мокаем process.env
    process.env.REACT_APP_TELEGRAM_HTTP_API = mockConfig.token;
    process.env.REACT_APP_TELEGRAM_CHAT_ID = mockConfig.chatId;
  });

  afterEach(() => {
    delete process.env.REACT_APP_TELEGRAM_HTTP_API;
    delete process.env.REACT_APP_TELEGRAM_CHAT_ID;
  });

  it('должен быть настроен при наличии токена и chat_id', () => {
    const { result } = renderHook(() => useTelegramBot());
    expect(result.current.isConfigured).toBe(true);
  });

  it('не должен быть настроен при отсутствии токена', () => {
    delete process.env.REACT_APP_TELEGRAM_HTTP_API;
    const { result } = renderHook(() => useTelegramBot());
    expect(result.current.isConfigured).toBe(false);
  });

  it('успешно отправляет сообщение', async () => {
    (global.fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: async () => ({ ok: true }),
    });

    const { result } = renderHook(() => useTelegramBot());

    await act(async () => {
      const success = await result.current.sendMessage(mockMessage);
      expect(success).toBe(true);
    });

    expect(result.current.loading).toBe(false);
    expect(result.current.error).toBe(null);
  });

  it('обрабатывает ошибку API', async () => {
    (global.fetch as jest.Mock).mockResolvedValueOnce({
      ok: false,
      json: async () => ({ 
        ok: false, 
        description: 'Bad Request',
        error_code: 400 
      }),
    });

    const { result } = renderHook(() => useTelegramBot());

    await act(async () => {
      const success = await result.current.sendMessage(mockMessage);
      expect(success).toBe(false);
    });

    expect(result.current.loading).toBe(false);
    expect(result.current.error).toBeTruthy();
  });

  it('очищает ошибку при вызове clearError', () => {
    const { result } = renderHook(() => useTelegramBot());
    
    act(() => {
      result.current.clearError();
    });

    expect(result.current.error).toBe(null);
  });

  it('возвращает false при отсутствии конфигурации', async () => {
    delete process.env.REACT_APP_TELEGRAM_HTTP_API;
    delete process.env.REACT_APP_TELEGRAM_CHAT_ID;
    
    const { result } = renderHook(() => useTelegramBot());

    await act(async () => {
      const success = await result.current.sendMessage(mockMessage);
      expect(success).toBe(false);
    });

    expect(result.current.error).toBe('Telegram bot not configured');
  });
}); 
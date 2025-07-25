import { useState, useCallback } from 'react';
import { TelegramMessage, UseTelegramBotReturn } from './types';
import { getTelegramBotConfig, sendTelegramMessage } from './telegramBotUtils';
import { eventCenter } from '../analytics/eventCenter';

export const useTelegramBot = (): UseTelegramBotReturn => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const config = getTelegramBotConfig();
  const isConfigured = !!(config.token && config.chatId);

  const clearError = useCallback(() => {
    setError(null);
  }, []);

  const sendMessage = useCallback(async (message: TelegramMessage): Promise<boolean> => {
    if (!isConfigured) {
      setError('Telegram bot not configured');
      return false;
    }

    setLoading(true);
    setError(null);

    try {
      await sendTelegramMessage(config, message);
      
      // Логируем успешную отправку
      eventCenter.logEvent(
        {
          category: 'submit',
          name: 'telegram_message_sent',
          value: { messageLength: message.text.length }
        },
        ['amplitude', 'sentry']
      );

      return true;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Unknown error occurred';
      setError(errorMessage);
      
      // Логируем ошибку
      eventCenter.captureError(
        err instanceof Error ? err : new Error(errorMessage),
        { 
          context: 'useTelegramBot',
          message: message.text.substring(0, 100)
        },
        ['sentry']
      );

      return false;
    } finally {
      setLoading(false);
    }
  }, [config, isConfigured]);

  return {
    sendMessage,
    loading,
    error,
    clearError,
    isConfigured,
  };
}; 
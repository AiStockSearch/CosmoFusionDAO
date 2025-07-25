import { TelegramMessage, TelegramApiResponse, TelegramBotConfig, TelegramBotError } from './types';

export const getTelegramBotConfig = (): TelegramBotConfig => {
  const token = process.env.REACT_APP_TELEGRAM_HTTP_API || '';
  const chatId = process.env.REACT_APP_TELEGRAM_CHAT_ID || '';
  
  return { token, chatId };
};

export const validateTelegramConfig = (config: TelegramBotConfig): boolean => {
  return !!(config.token && config.chatId);
};

export const sendTelegramMessage = async (
  config: TelegramBotConfig,
  message: TelegramMessage
): Promise<TelegramApiResponse> => {
  if (!validateTelegramConfig(config)) {
    throw new Error('Telegram bot not configured. Check REACT_APP_TELEGRAM_HTTP_API and REACT_APP_TELEGRAM_CHAT_ID');
  }

  const url = `https://api.telegram.org/bot${config.token}/sendMessage`;
  
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      chat_id: config.chatId,
      text: message.text,
      parse_mode: message.parseMode,
      disable_web_page_preview: message.disableWebPagePreview,
      disable_notification: message.disableNotification,
    }),
  });

  const data: TelegramApiResponse = await response.json();
  
  if (!response.ok || !data.ok) {
    const error: TelegramBotError = {
      message: 'Failed to send Telegram message',
      code: data.error_code,
      description: data.description,
    };
    throw error;
  }

  return data;
};

export const formatSubscriptionMessage = (name: string, email: string): string => {
  const now = new Date();
  const dateStr = now.toLocaleString('ru-RU');
  const timeStr = now.toLocaleTimeString('ru-RU');
  
  return `🆕 Новая подписка с сайта CosmoFusion DAO
👤 Имя: ${name.trim()}
📧 Email: ${email}
🌐 Источник: Веб-сайт (форма подписки)
📅 Дата: ${dateStr}
⏰ Время: ${timeStr}`;
}; 
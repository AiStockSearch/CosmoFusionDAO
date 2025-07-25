export interface TelegramMessage {
  text: string;
  parseMode?: 'HTML' | 'Markdown';
  disableWebPagePreview?: boolean;
  disableNotification?: boolean;
}

export interface TelegramBotConfig {
  token: string;
  chatId: string;
}

export interface TelegramApiResponse {
  ok: boolean;
  result?: any;
  description?: string;
  error_code?: number;
}

export interface UseTelegramBotReturn {
  sendMessage: (message: TelegramMessage) => Promise<boolean>;
  loading: boolean;
  error: string | null;
  clearError: () => void;
  isConfigured: boolean;
}

export interface TelegramBotError {
  message: string;
  code?: number;
  description?: string;
} 
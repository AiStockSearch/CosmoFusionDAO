# Telegram Bot Module

Модуль для интеграции с Telegram Bot API, предоставляющий переиспользуемый хук для отправки сообщений.

## Структура

```
telegram-bot/
├── README.md              # Документация модуля
├── context.md             # Контекст модуля
├── index.ts               # Экспорты
├── types.ts               # TypeScript типы
├── useTelegramBot.ts      # Кастомный хук
├── telegramBotUtils.ts    # Утилиты
├── examples.tsx           # Примеры использования
└── __tests__/             # Тесты
    └── useTelegramBot.test.ts
```

## Установка

Модуль уже интегрирован в проект. Для использования необходимо настроить переменные окружения:

```env
REACT_APP_TELEGRAM_HTTP_API=your_bot_token
REACT_APP_TELEGRAM_CHAT_ID=your_chat_id
```

## Использование

### Базовое использование

```typescript
import { useTelegramBot } from '../telegram-bot';

const MyComponent = () => {
  const { sendMessage, loading, error, isConfigured } = useTelegramBot();

  const handleSend = async () => {
    const success = await sendMessage({
      text: 'Привет, мир!',
      parseMode: 'HTML',
    });
    
    if (success) {
      console.log('Сообщение отправлено!');
    }
  };

  return (
    <button onClick={handleSend} disabled={loading}>
      Отправить сообщение
    </button>
  );
};
```

### Форма подписки

```typescript
import { useTelegramBot, formatSubscriptionMessage } from '../telegram-bot';

const SubscribeForm = () => {
  const { sendMessage, loading } = useTelegramBot();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const messageText = formatSubscriptionMessage(name, email);
    const success = await sendMessage({
      text: messageText,
      parseMode: 'HTML',
    });
    
    if (success) {
      // Очистить форму
      setName('');
      setEmail('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Ваше имя"
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <button type="submit" disabled={loading}>
        Подписаться
      </button>
    </form>
  );
};
```

## API

### useTelegramBot()

Возвращает объект с методами и состоянием:

```typescript
interface UseTelegramBotReturn {
  sendMessage: (message: TelegramMessage) => Promise<boolean>;
  loading: boolean;
  error: string | null;
  clearError: () => void;
  isConfigured: boolean;
}
```

### TelegramMessage

```typescript
interface TelegramMessage {
  text: string;
  parseMode?: 'HTML' | 'Markdown';
  disableWebPagePreview?: boolean;
  disableNotification?: boolean;
}
```

## Утилиты

### formatSubscriptionMessage(name, email)

Форматирует сообщение для подписки с датой и временем.

### getTelegramBotConfig()

Получает конфигурацию из переменных окружения.

### validateTelegramConfig(config)

Проверяет корректность конфигурации.

## Тестирование

```bash
npm test -- --testPathPattern=useTelegramBot.test.ts
```

## Примеры

Смотрите `examples.tsx` для дополнительных примеров использования:

- ContactForm - форма обратной связи
- EventNotifier - уведомления о событиях
- ErrorReporter - мониторинг ошибок
- AnalyticsReporter - статистика и аналитика

## Интеграция с аналитикой

Модуль автоматически логирует события в:

- **Amplitude**: `telegram_message_sent`
- **Sentry**: ошибки отправки сообщений

## Безопасность

- Токены хранятся в переменных окружения
- Валидация конфигурации перед отправкой
- Обработка ошибок API
- Логирование для мониторинга 
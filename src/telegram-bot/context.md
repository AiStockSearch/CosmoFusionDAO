# Telegram Bot Module Context

## Purpose
Модуль для интеграции с Telegram Bot API, предоставляющий переиспользуемый хук для отправки сообщений.

## Structure
```
telegram-bot/
├── context.md          # Контекст модуля
├── types.ts            # TypeScript типы
├── useTelegramBot.ts   # Кастомный хук
├── telegramBotUtils.ts # Утилиты для работы с API
└── __tests__/          # Тесты
    └── useTelegramBot.test.ts
```

## Features
- Кастомный хук useTelegramBot для отправки сообщений
- Валидация токена и chat_id
- Обработка ошибок API
- Логирование событий в аналитику
- Переиспользуемость в других компонентах

## Environment Variables
- REACT_APP_TELEGRAM_HTTP_API: токен бота
- REACT_APP_TELEGRAM_CHAT_ID: ID чата для отправки

## Usage
```typescript
const { sendMessage, loading, error } = useTelegramBot();

await sendMessage({
  text: 'Сообщение',
  parseMode: 'HTML'
});
``` 
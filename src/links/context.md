# Links Module Context

## Purpose
Модуль для централизованного управления всеми внешними ссылками с поддержкой переменных окружения.

## Structure
```
links/
├── context.md          # Контекст модуля
├── types.ts            # TypeScript типы
├── useLinks.ts         # Кастомный хук
├── linksConfig.ts      # Конфигурация ссылок
└── __tests__/          # Тесты
    └── useLinks.test.ts
```

## Features
- Кастомный хук useLinks для получения ссылок
- Поддержка переменных окружения
- Fallback значения для всех ссылок
- Типизация всех ссылок
- Переиспользуемость в компонентах

## Environment Variables
- REACT_APP_TELEGRAM_LINK
- REACT_APP_X_LINK
- REACT_APP_DISCORD_LINK
- REACT_APP_GALXE_LINK
- REACT_APP_DOCS_LINK
- REACT_APP_GITHUB_LINK
- REACT_APP_WORK_EMAIL
- И другие...

## Usage
```typescript
const { links, getLink } = useLinks();

// Получить конкретную ссылку
const telegramLink = getLink('telegram');

// Использовать все ссылки
const { telegram, x, discord } = links;
``` 
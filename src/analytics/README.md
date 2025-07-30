# Analytics Center (Amplitude, Sentry, Firebase)

## Структура папки

```
src/analytics/
  eventCenter.ts         // Универсальный центр событий (Sentry, Amplitude, Firebase)
  eventTypes.ts          // Типы событий, категорий, платформ
  config.ts              // Конфигурация платформ и проверка доступности
  types.ts               // Глобальные типы для window объектов
  amplitude.d.ts         // Типы для amplitude-js
  scenarios/
    landing.json         // Сценарии для лендинга
    footer.json          // Сценарии для футера
    hero.json            // Сценарии для hero
  eventMap.ts            // Карта событий: что, где, когда логировать
  ENV_EXAMPLE.md         // Пример переменных окружения
  README.md              // Документация по аналитике
```

## Подключенные платформы

### ✅ Sentry
- **Статус**: Подключен и работает
- **Назначение**: Отслеживание ошибок и критичных событий
- **Переменная**: `REACT_APP_SENTRY_DSN`

### ✅ Amplitude
- **Статус**: Подключен и готов к работе
- **Назначение**: Пользовательская аналитика, воронки, retention
- **Переменная**: `REACT_APP_AMPLITUDE_API_KEY`

### ✅ Firebase Analytics
- **Статус**: Подключен и готов к работе
- **Назначение**: Google Analytics, конверсии, аудитория
- **Переменные**: `REACT_APP_FIREBASE_*`

## Как добавлять сценарии
1. Добавь сценарий в scenarios/имя_фичи.json
2. Обнови eventMap.ts, если нужно.
3. Используй eventCenter.logEvent в нужном месте.

## Категории событий
- view: отображение секции/экрана
- start: первый показ/инициализация
- click: нажатие
- scroll: прокрутка
- submit: отправка формы
- custom: другое

## Новые методы eventCenter

```typescript
// Установка пользователя
eventCenter.setUserId('user123');

// Установка свойств пользователя
eventCenter.setUserProperties({
  plan: 'premium',
  country: 'RU'
});

// Логирование события
eventCenter.logEvent({
  category: 'click',
  name: 'change_lang',
  value: { lang: 'ru' }
}, ['amplitude', 'sentry']);
```

## Примеры использования

### Базовое событие
```typescript
import { eventCenter } from './analytics/eventCenter';

// Простое событие
eventCenter.logEvent({
  category: 'click',
  name: 'button_click',
  label: 'hero_cta'
});
```

### Событие с данными
```typescript
eventCenter.logEvent({
  category: 'submit',
  name: 'form_submit',
  value: { formType: 'newsletter' },
  meta: { source: 'footer' }
}, ['amplitude', 'firebase']);
```

### Ошибка
```typescript
eventCenter.captureError(
  new Error('API request failed'),
  { endpoint: '/api/data' },
  ['sentry']
);
```

## Best practices
- Всегда добавляй sessionId (автоматически)
- Для ошибок используй eventCenter.captureError
- Для новых платформ — расширяй eventCenter
- Для новых сценариев — добавляй в scenarios/*.json
- Используй requestIdleCallback для не-критичных событий
- Проверяй доступность платформ перед отправкой

## Настройка переменных окружения

Скопируйте переменные из `ENV_EXAMPLE.md` в ваш `.env` файл и заполните реальными значениями.

## Отладка

В development режиме все события логируются в консоль:
```
[eventCenter] {category: "click", name: "button_click"} {sessionId: "abc123", timestamp: 1234567890}
``` 
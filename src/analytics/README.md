# Analytics Center (Amplitude, Sentry, Firebase)

## Структура папки

```
src/analytics/
  eventCenter.ts         // Универсальный центр событий (Sentry, Amplitude, Firebase)
  eventTypes.ts          // Типы событий, категорий, платформ
  scenarios/
    landing.json         // Сценарии для лендинга
    footer.json          // Сценарии для футера
    hero.json            // Сценарии для hero
  eventMap.ts            // Карта событий: что, где, когда логировать
  README.md              // Документация по аналитике
```

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

## Как расширять платформы
В eventCenter.ts добавь вызовы SDK нужных платформ (Amplitude, Firebase, Sentry).

## Примеры
```
eventCenter.logEvent({
  category: 'click',
  name: 'change_lang',
  value: { lang: 'ru' }
}, ['amplitude', 'sentry']);
```

## Best practices
- Всегда добавляй sessionId (автоматически)
- Для ошибок используй eventCenter.captureError
- Для новых платформ — расширяй eventCenter
- Для новых сценариев — добавляй в scenarios/*.json 
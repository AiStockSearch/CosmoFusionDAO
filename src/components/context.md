# SubscribeColumn Component Context

## Purpose
Управляет формой подписки на новости с интеграцией Telegram бота CosmoFusionDAO_bot.

## Features
- Поле для ввода имени пользователя
- Поле для ввода email адреса
- Валидация данных на клиенте
- Отправка данных в Telegram бот
- Логирование событий в аналитику
- Обработка ошибок и состояний загрузки

## Integration
- Telegram Bot API: отправка сообщений через REACT_APP_TELEGRAM_HTTP_API
- Analytics: логирование событий subscribe_form_submit
- Error Handling: Sentry для отслеживания ошибок

## Environment Variables
- REACT_APP_TELEGRAM_HTTP_API: токен бота
- REACT_APP_TELEGRAM_CHAT_ID: ID чата для отправки

## Message Format
```
🆕 Новая подписка с сайта CosmoFusion DAO

👤 Имя: {name}
📧 Email: {email}
🌐 Источник: Веб-сайт (форма подписки)
📅 Дата: {date}
⏰ Время: {time}
```

## Dependencies
- React hooks (useState)
- eventCenter для аналитики
- Telegram Bot API 
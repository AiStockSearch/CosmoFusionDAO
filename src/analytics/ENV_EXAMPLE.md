# Переменные окружения для аналитики

Добавьте следующие переменные в ваш `.env` файл:

## Amplitude
```
REACT_APP_AMPLITUDE_API_KEY=your_amplitude_api_key_here
```

## Firebase
```
REACT_APP_FIREBASE_API_KEY=your_firebase_api_key_here
REACT_APP_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
REACT_APP_FIREBASE_PROJECT_ID=your_project_id
REACT_APP_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=123456789
REACT_APP_FIREBASE_APP_ID=1:123456789:web:abcdef
REACT_APP_FIREBASE_MEASUREMENT_ID=G-XXXXXXXXXX
```

## Sentry
```
REACT_APP_SENTRY_DSN=https://your_sentry_dsn_here
```

## Как получить ключи

### Amplitude
1. Зарегистрируйтесь на https://amplitude.com
2. Создайте новый проект
3. Скопируйте API Key из настроек проекта

### Firebase
1. Перейдите в https://console.firebase.google.com
2. Создайте новый проект или выберите существующий
3. Добавьте веб-приложение
4. Скопируйте конфигурацию из настроек проекта

### Sentry
1. Зарегистрируйтесь на https://sentry.io
2. Создайте новый проект
3. Скопируйте DSN из настроек проекта 
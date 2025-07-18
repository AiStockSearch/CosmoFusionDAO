# Cursor Rules для проекта COSMOS

## Общие правила
- Использовать монорепозиторий: все приложения в папке `packages/`.
- Веб-приложение: `packages/web` (React, TypeScript).
- Мобильное приложение: `packages/mobile` (Expo React Native, TypeScript).
- Использовать Makefile для запуска и установки зависимостей (см. Makefile в корне).
- Соблюдать структуру feature-based (feature-папки, компоненты, хуки, типы и т.д.).
- Соблюдать стиль кода: TypeScript strict, camelCase для переменных/функций, PascalCase для компонентов/типов, max line 100 символов, одинарные кавычки, trailing commas.
- Не использовать lingui.js, для локализации применять альтернативы (например, i18next).
- Для стилей использовать только цвета из colors.ts и шрифты Oswald, Inter.
- Все изменения фиксировать в CHANGELOG.md.

## Makefile
- make web — запуск React App
- make mobile — запуск Expo App (iOS)
- make mobile-android — запуск Expo App (Android)
- make mobile-web — запуск Expo App (web)
- make web-install — установка зависимостей web
- make mobile-install — установка зависимостей mobile
- make deploy-web — деплой React App на GitHub Pages

## Деплой React App на GitHub Pages
- Для деплоя использовать пакет gh-pages (devDependency).
- В package.json web-приложения добавить:
  - "homepage": "https://<user>.github.io/<repo>/"
  - scripts:
    - "predeploy": "npm run build"
    - "deploy": "gh-pages -d build"
- Деплой осуществляется в ветку gh-pages.
- Публичный путь (basename) для роутера: /<repo>/
- Для деплоя используйте make deploy-web или npm run deploy из packages/web.
- После деплоя сайт будет доступен по адресу, указанному в homepage.

## Структура feature-based
- components/: UI-компоненты (один компонент — один файл, экспорт через index.ts)
- hooks/: хуки (префикс use, <50 строк, если больше — делить)
- types/: типы и интерфейсы
- utils/: утилиты и хелперы
- navigation/: навигация
- documentation/: документация по фиче
- shared/: общие хуки, утилиты, типы (если используются в нескольких фичах)

## Тестирование
- Для React/React Native: Jest, React Native Testing Library
- Для Node.js: Jest, Supertest
- Покрытие: 80%+ для критических путей
- Тесты для: Connector.ts, хуков, Screen.tsx, API handlers
- Тестовые файлы <50KB, при необходимости делить

## CI/CD и Git
- Префиксы коммитов: feat:, fix:, docs:, refactor:, test:
- Все команды запускать из корня через Makefile или напрямую из соответствующей папки
- Проверки: lint, test, build на PR
- Все изменения и задачи фиксировать в CHANGELOG.md

## Прочее
- Не превышать размер файлов 100KB, при необходимости делить
- Для тестов использовать Jest, React Native Testing Library, Supertest
- Для локализации не использовать lingui.js
- Для стилей только colors.ts, Oswald, Inter
- Вопросы по структуре — см. этот файл или Makefile 
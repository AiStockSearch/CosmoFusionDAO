# CosmoFusion DAO — Web Landing

Лендинг для гранта Cosmos x FIRE. Реализован на React с Tailwind CSS, поддерживает локализацию (RU/EN), адаптивность, плавные анимации, SEO и OpenGraph, PWA, accessibility, централизованные ссылки и memory bank для AI.

---

## Структура проекта

- `src/locales/en.json`, `src/locales/ru.json` — все тексты секций и alt-тексты (локализация)
- `src/content/links.json` — централизованные внешние/внутренние ссылки (соцсети, explorer, docs, NFT, purchase)
- `src/content/sectionSeo.json` — SEO title/description для секций
- `src/shared/memory-bank/` — memory bank (только для Cursor/AI, не для пользовательских данных)
- `src/LandingPage.tsx` — главный компонент лендинга, SEO через Helmet
- `src/components/` — UI-компоненты (feature-based структура)
- `src/hooks/useLocale.ts`, `useSectionContent.ts` — локализация, получение секционного контента
- `src/components/SectionAnchorContext.tsx` — кастомный anchor scroll с offset
- `src/assets/images/` — оптимизированные изображения (webp, jpg)
- `src/assets/svg/` — SVG-иконки для UI
- `public/service-worker.js`, `offline.html`, `manifest.json` — PWA, offline-режим
- `src/components/__tests__/` — unit-тесты компонентов (Jest + RTL)

## Технологии

- **React 19** — основной фреймворк
- **TypeScript** — строгая типизация
- **Tailwind CSS** — стилизация (утилитарные классы)
- **PostCSS** — обработка CSS
- **Jest + RTL** — тестирование
- **react-helmet-async** — SEO/meta
- **PWA** — offline, manifest, service worker

## Как обновлять контент и переводы

1. Откройте `src/locales/en.json` и/или `ru.json`.
2. Измените или добавьте секцию/ключ (соблюдайте структуру).
3. Для новых ссылок — добавьте в `src/content/links.json`.
4. Для SEO — обновите `src/content/sectionSeo.json`.
5. Сохраните — изменения появятся автоматически.

## Стилизация компонентов

Проект использует **Tailwind CSS** для стилизации:

```tsx
<div className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-200">
  <h2 className="text-3xl font-bold text-primary-600">
    Заголовок
  </h2>
</div>
```

### Кастомные цвета:
- `primary-600` — основной синий цвет
- `secondary-600` — дополнительный фиолетовый цвет

### Анимации:
- `animate-fade-in` — плавное появление
- `animate-slide-up` — появление снизу

## Запуск и тесты

```bash
yarn install
yarn start         # локальный запуск
yarn test          # юнит-тесты (Jest + RTL)
```

## Деплой на GitHub Pages

1. Убедитесь, что поле `homepage` в package.json корректно (https://jsnanodegree.github.io/cosmofusion-dao/)
2. Выполните:

```bash
yarn deploy
```

## SEO и OpenGraph
- Title, description, og/tw теги выставляются динамически через Helmet
- SEO-данные секций — в `src/content/sectionSeo.json`
- og:image/twitter:image — абсолютный путь (https://cosmofusion.app/logo192.png)

## Адаптивность, accessibility и анимации
- Лендинг адаптивен для мобильных и десктопов
- Секции плавно появляются при прокрутке
- Используются Tailwind responsive классы (md:, lg:)
- Все интерактивные элементы имеют aria-label
- Поддержка навигации с клавиатуры

## Локализация
- Автоопределение языка (браузер/гео)
- Переключатель RU/EN
- Все секции и alt-тексты локализованы
- Для новых языков — добавьте ключи в JSON

## Memory Bank
- Используется только для AI/агента (Cursor)
- Не хранит пользовательские данные
- src/shared/memory-bank/

## Централизованные ссылки
- Все внешние/внутренние ссылки — в `src/content/links.json`
- Для добавления/редактирования — обновите JSON

## PWA
- manifest.json, service-worker.js, offline.html
- offline-режим, favicon, robots.txt, sitemap.xml

## Тестирование
- Unit-тесты для компонентов (Jest + RTL)
- Покрытие критических путей
- Для новых компонентов — автогенерация тестов

---

**Вопросы и доработки:**
- Для расширения секций — добавьте ключи в JSON
- Для новых SVG/иконок — положите в assets/svg/
- Для accessibility — проверяйте aria-label и фокус
- Для кастомных стилей — добавьте в tailwind.config.js

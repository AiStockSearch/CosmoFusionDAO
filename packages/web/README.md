# CosmoFusion DAO — Web Landing

Лендинг для гранта Cosmos x FIRE. Реализован на React с Tailwind CSS, поддерживает локализацию (RU/EN), адаптивность, плавные анимации, SEO и OpenGraph.

---

## Структура проекта

- `src/landing-content.json` — контент всех секций лендинга (локализация ru/en)
- `src/types/landing.ts` — типы для секций
- `src/LandingPage.tsx` — главный компонент лендинга
- `src/components/` — компоненты (LandingSection, LanguageSwitcher, LandingNav, ScrollToTopButton)
- `src/hooks/useFadeInOnScroll.ts` — анимация появления секций
- `tailwind.config.js` — конфигурация Tailwind CSS с кастомными цветами и анимациями

## Технологии

- **React 19** — основной фреймворк
- **TypeScript** — типизация
- **Tailwind CSS** — стилизация (утилитарные классы)
- **PostCSS** — обработка CSS
- **Jest + RTL** — тестирование

## Как обновлять контент

1. Откройте `src/landing-content.json`.
2. Измените или добавьте секцию (соблюдайте структуру и переводы ru/en).
3. Сохраните файл — изменения появятся на лендинге автоматически.

## Стилизация компонентов

Проект использует **Tailwind CSS** для стилизации:

```tsx
// Пример использования Tailwind классов
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
npm install
npm start         # локальный запуск
npm test          # юнит-тесты (Jest + RTL)
```

## Деплой на GitHub Pages

1. Убедитесь, что поле `homepage` в package.json корректно (https://jsnanodegree.github.io/cosmofusion-dao/)
2. Выполните:

```bash
npm run deploy
```

## SEO и OpenGraph
- Title и description выставляются динамически
- OpenGraph-теги прописаны в public/index.html

## Адаптивность и анимации
- Лендинг адаптивен для мобильных и десктопов
- Секции плавно появляются при прокрутке
- Используются Tailwind responsive классы (md:, lg:)

## Локализация
- Переключатель RU/EN в правом верхнем углу
- Все секции поддерживают оба языка

---

**Вопросы и доработки:**
- Для расширения секций — просто добавьте их в JSON
- Для новых языков — добавьте ключи в каждую секцию
- Для стилизации — используйте Tailwind утилиты
- Для кастомных стилей — добавьте в tailwind.config.js

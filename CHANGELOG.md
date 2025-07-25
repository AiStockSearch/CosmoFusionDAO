[2025-01-27] fix: Исправлена синтаксическая ошибка в ru.json - добавлена закрывающая скобка в секции solution, удалены лишние поля для соответствия структуре en.json (Исправление JSON)

[2025-01-27] feat: Добавлены недостающие переводы в translations-en.json и translations-ru.json - расширена секция solution с дополнительными проблемами (когнитивные искажения) и процессом принятия решений (Расширение переводов)

[2025-01-27] refactor: Удалены неиспользуемые файлы локализации (reflectionPageRu.tsx, reflectionPageEn.tsx, problemPageRu.tsx, problemPageEn.tsx, solutionPageEn.tsx, solutionsPageRu.tsx) - все переводы теперь централизованы в translations-*.json (Очистка кода)

[2025-01-27] cleanup: Удалены неиспользуемые файлы контента (evolutionPageEn.tsx, evolutionPageRu.tsx, footerEn.tsx, footerRu.tsx, gettingStarterData*.tsx, governancePageEn.tsx, governancePageRu.tsx, heroPageEn.tsx, heroPageRu.tsx, motionPhraseEn.tsx, motionPhraseRu.tsx) - все данные теперь централизованы в translations-*.json (Очистка кода)

[2025-01-27] refactor: Перенесены Job Builders в переводы - добавлена секция jobBuilder в translations-en.json и translations-ru.json с 6 ролями (Explorer, Critic, Creator, Observer, Manager, Ambassador), удален дублирующий файл src/content/links.ts, обновлен LocaleContext.tsx для использования данных из переводов (Централизация переводов)

[2025-01-27] fix: Исправлены проблемы с переводами - переведен английский текст в footer.description в locales/ru.json, исправлены хардкод тексты в useFooterContent.ts для purchase и socialLinks, добавлены недостающие переводы для footer.purchase.*.text и footer.socialLinks.*.text (Исправление локализации)

[2025-01-27] fix: Исправлены непереведенные ключи локализации в футере - обновлен useFooterContent.ts для использования footer данных из useLocale вместо неправильных ключей t(), теперь все тексты корректно локализованы (Исправление отображения переводов)

[2025-01-27] fix: Исправлено дублирование текста в footer.subscribeColumn.tsx - удален повторяющийся параграф с текстом "Мы заботимся о ваших данных.", оставлен только один параграф с ссылкой на политику конфиденциальности (Исправление UI)

[2025-01-27] fix: Исправлена критическая ошибка TypeError: cardBuilder.map is not a function - обновлен LocaleContext.tsx для передачи массива roles из jobBuilder вместо объекта, обновлен компонент CardBuilder для работы с новой структурой данных (responsibilities, rewards, addons вместо arr, reward, addon), удалены неиспользуемые переменные (Исправление критической ошибки)

[2025-01-27] fix: Исправлены неполные русские фразы в секции "Содержание" - исправлены переводы в translations-ru.json и locales/ru.json, уменьшен размер изображения астронавта с min-h-[25rem] до min-h-[20rem] в hero.section.tsx (Исправление переводов и UI)

[2025-01-27] feat: Оптимизированы изображения governance-democracy.jpg и job-critic.jpg - уменьшены размеры файлов на 5-11%, созданы WebP версии для лучшей производительности, обновлен LocaleContext.tsx для поддержки WebP изображений (Оптимизация изображений)

[2025-01-27] feat: Восстановлены изображения для Job Builders - добавлены изображения для всех 6 ролей (Explorer, Critic, Creator, Observer, Manager, Ambassador), созданы WebP версии всех изображений с уменьшением размера до 62%, обновлены translations-*.json с полями image, добавлена функция withJobBuilderImages в LocaleContext.tsx (Восстановление изображений)

[2025-01-27] feat: Сокращена гипотеза CosmoFusion DAO - оптимизирована секция hypotize во всех файлах переводов для более лаконичного и читаемого описания: коллективное мышление, открытый диалог, блокчейн-голосование, ИИ-анализ (Оптимизация контента)

[2025-01-27] feat: Расширена секция reflection с 3 до 6 когнитивных искажений - добавлены "Anchoring Effect", "Groupthink", "Availability Heuristic" в translations-en.json и "Эффект якоря", "Групповое мышление", "Эффект доступности" в translations-ru.json (Расширение контента)

[2025-01-27] refactor: Исправлена секция solution - заменены когнитивные искажения на качественные решения: "AI-Powered Analysis", "Blockchain Immutability" в translations-en.json и "AI-анализ", "Неизменяемость блокчейна" в translations-ru.json (Исправление контента)

[2025-01-27] feat: Улучшена локализация футера - исправлен перевод footerRu.tsx, добавлена локализация в SubscribeColumn, обновлены хуки useFooterContent и useFooterSectionContent для использования useLocale (Локализация футера)


[2025-07-26] feat: Lighthouse Performance Optimizations - оптимизация изображений (95% уменьшение), bundle splitting, критический путь, service worker (LIGHTHOUSE_OPTIMIZATIONS.md)
[2025-07-26] feat: Cleanup Unused Images - удалено 41 неиспользуемое изображение (48.28 MB), создан скрипт анализа (scripts/find-unused-images.js)
[2025-07-26] feat: Rename Images by Sections - переименовано 23 изображения по секциям (hero, problem, reflection, solution, evolution, governance, job), обновлены импорты в 13 файлах (scripts/rename-images.js, scripts/update-imports.js)
[2024-12-25] feat: Восстановлен файл .env с полной конфигурацией для CosmoFusion DAO - все переменные окружения для Telegram бота, ссылок и интеграций (ENV_EXAMPLE.md → .env)
[2024-12-25] feat: Интеграция Bitwarden CLI с Docker - автоматическое восстановление секретов из Bitwarden в .env файл во время сборки контейнера (Dockerfile, scripts/restore-secrets.sh, scripts/test-bitwarden.sh, BITWARDEN_SETUP.md)
[2024-12-25] feat: Создан модуль links с кастомными хуками useLinks, useFooterContent, useFooterSectionContent - централизованное управление всеми внешними ссылками с поддержкой переменных окружения
[2024-12-25] feat: Создан модуль telegram-bot с кастомным хуком useTelegramBot - переиспользуемый хук для отправки сообщений в Telegram
[2024-12-25] feat: Интеграция с Telegram ботом CosmoFusionDAO_bot - добавлено поле имени в форму подписки, улучшен формат сообщений с пометкой источника
[2024-12-25] fix: Исправлена ошибка TypeError в SubscribeColumn - "Cannot read properties of undefined (reading 'split')" - добавлена передача правильных ссылок telegram и substack в linksAddons, добавлена защита от undefined значений
[2024-12-25] feat: Созданы объединенные JSON файлы переводов (translations-en.json, translations-ru.json) для централизованного управления всеми текстами сайта
[2024-06-19] feat: Централизована локализация (src/locales/en.json, ru.json), все секции и alt-тексты вынесены в JSON
[2024-06-19] feat: Централизованы все внешние/внутренние ссылки (src/content/links.json)
[2024-06-19] feat: Добавлен memory bank для Cursor/AI (src/shared/memory-bank/)
[2024-06-19] feat: Кастомный anchor scroll с offset (SectionAnchorContext)
[2024-06-19] feat: SEO через react-helmet-async, динамические og/tw теги, sectionSeo.json
[2024-06-19] feat: PWA — service worker, offline.html, manifest.json
[2024-06-19] feat: Accessibility — aria-label, keyboard, alt для всех изображений
[2024-06-19] feat: Unit-тесты для ключевых компонентов (Jest + RTL)
[2024-06-19] docs: README.md обновлён под новую структуру
[2024-06-19] fix: Удалены meta CSP/X-Frame-Options из index.html, удалены импорты Google Fonts, исправлена инициализация и защита индекса в CardBuilder (ошибка выхода за границы массива).

Формат:
[YYYY-MM-DD] [feat|fix|docs|refactor|test]: Краткое описание (задача)

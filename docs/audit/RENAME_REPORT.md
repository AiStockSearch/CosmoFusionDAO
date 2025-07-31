# Rename Report - Переименование изображений по секциям

## 🎯 Цель
Переименовать изображения в соответствии с секциями, где они используются, для лучшей организации и понимания структуры проекта.

## 📊 Результаты переименования

### Переименованные файлы (23 файла)

#### Hero Section (4 файла)
- `astronaut-optimized-optimized.jpg` → `hero-astronaut.jpg`
- `astronaut-optimized.webp` → `hero-astronaut.webp`
- `cosmoFusion_dao-optimized.jpg` → `hero-cosmo-fusion.jpg`
- `cosmoFusion_dao.webp` → `hero-cosmo-fusion.webp`

#### Problem Section (2 файла)
- `alone.jpg` → `problem-alone.jpg`
- `alone.webp` → `problem-alone.webp`

#### Reflection Section (2 файла)
- `vision.jpg` → `reflection-vision.jpg`
- `vision.webp` → `reflection-vision.webp`

#### Solution Section (1 файл)
- `vision_astronaught.jpg` → `solution-vision-astronaut.jpg`

#### Evolution Section (1 файл)
- `peakpx (8).jpg` → `evolution-peakpx.jpg`

#### Governance Section (1 файл)
- `democracy.jpg` → `governance-democracy.jpg`

#### Job Builder Section (12 файлов)
- `creator.jpg` → `job-creator.jpg`
- `creator.webp` → `job-creator.webp`
- `baby.jpg` → `job-observer.jpg`
- `baby.webp` → `job-observer.webp`
- `manager.jpg` → `job-manager.jpg`
- `manager.webp` → `job-manager.webp`
- `explorer.jpg` → `job-explorer.jpg`
- `explorer.webp` → `job-explorer.webp`
- `critik.jpg` → `job-critic.jpg`
- `critik.webp` → `job-critic.webp`
- `ambasodor.jpg` → `job-ambassador.jpg`
- `ambasodor.webp` → `job-ambassador.webp`

## 🛠 Созданные инструменты

### Скрипт переименования: `scripts/rename-images.js`
```javascript
// Переименовывает изображения по секциям
node scripts/rename-images.js
```

### Скрипт обновления импортов: `scripts/update-imports.js`
```javascript
// Автоматически обновляет импорты после переименования
node scripts/update-imports.js
```

## 📁 Структура изображений после переименования

```
src/assets/images/
├── hero-astronaut.jpg          # Hero section - главное изображение
├── hero-astronaut.webp
├── hero-cosmo-fusion.jpg       # Hero section - логотип
├── hero-cosmo-fusion.webp
├── problem-alone.jpg           # Problem section
├── problem-alone.webp
├── reflection-vision.jpg       # Reflection section
├── reflection-vision.webp
├── solution-vision-astronaut.jpg # Solution section
├── evolution-peakpx.jpg        # Evolution section
├── governance-democracy.jpg    # Governance section
├── job-creator.jpg            # Job Builder - Creator role
├── job-creator.webp
├── job-observer.jpg           # Job Builder - Observer role
├── job-observer.webp
├── job-manager.jpg            # Job Builder - Manager role
├── job-manager.webp
├── job-explorer.jpg           # Job Builder - Explorer role
├── job-explorer.webp
├── job-critic.jpg             # Job Builder - Critic role
├── job-critic.webp
├── job-ambassador.jpg         # Job Builder - Ambassador role
└── job-ambassador.webp
```

## 🔄 Обновленные файлы

### Компоненты (1 файл)
- `src/components/hero.section.tsx` - обновлены импорты hero изображений

### Контент (8 файлов)
- `src/content/evolutionPageEn.tsx` - evolution изображение
- `src/content/evolutionPageRu.tsx` - evolution изображение
- `src/content/governancePageEn.tsx` - governance изображение
- `src/content/governancePageRu.tsx` - governance изображение
- `src/content/jobBuilder.tsx` - все job builder изображения
- `src/content/problemPageEn.tsx` - problem изображение
- `src/content/problemPageRu.tsx` - problem изображение
- `src/content/reflectionPageEn.tsx` - reflection изображение
- `src/content/reflectionPageRu.tsx` - reflection изображение
- `src/content/solutionPageEn.tsx` - solution изображение
- `src/content/solutionsPageRu.tsx` - solution изображение

### Контексты (1 файл)
- `src/contexts/LocaleContext.tsx` - все изображения для локализации

## 📈 Преимущества новой структуры

### 1. Организация
- ✅ Изображения сгруппированы по секциям
- ✅ Понятные имена файлов
- ✅ Легко найти нужное изображение

### 2. Поддержка
- ✅ Проще добавлять новые изображения
- ✅ Легче отслеживать использование
- ✅ Улучшенная документация

### 3. Разработка
- ✅ Быстрее находить нужные файлы
- ✅ Меньше путаницы при рефакторинге
- ✅ Лучшая структура проекта

## 🎯 Рекомендации

### 1. Соглашения об именовании
```bash
# Формат: {section}-{description}.{extension}
hero-astronaut.jpg
problem-alone.jpg
reflection-vision.jpg
solution-vision-astronaut.jpg
job-creator.jpg
```

### 2. Добавление новых изображений
```bash
# Создавать файлы с префиксом секции
evolution-new-image.jpg
governance-new-image.jpg
```

### 3. Мониторинг
```bash
# Проверка структуры изображений
ls src/assets/images/ | grep -E "^(hero|problem|reflection|solution|evolution|governance|job)-"

# Подсчет изображений по секциям
ls src/assets/images/ | cut -d'-' -f1 | sort | uniq -c
```

## ✅ Результат

- ✅ Переименовано 23 изображения
- ✅ Обновлены импорты в 13 файлах
- ✅ Проект успешно собирается
- ✅ Улучшена организация файлов
- ✅ Созданы инструменты для автоматизации

## 📝 Команды для мониторинга

```bash
# Проверка структуры изображений
ls src/assets/images/

# Подсчет по секциям
ls src/assets/images/ | cut -d'-' -f1 | sort | uniq -c

# Проверка сборки
npm run build

# Анализ неиспользуемых изображений
npm run cleanup:images
``` 
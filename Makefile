# COSMOS Project Makefile
# Команды для управления проектом COSMOS

# Основные команды
.PHONY: help install clean

# Справка
help:
	@echo "COSMOS Project - Доступные команды:"
	@echo ""
	@echo "Установка и настройка:"
	@echo "  install          - Установка всех зависимостей"
	@echo "  clean            - Очистка node_modules и build файлов"
	@echo ""
	@echo "Web приложение:"
	@echo "  web              - Запуск web приложения"
	@echo "  web-build        - Сборка web приложения"
	@echo "  web-deploy       - Деплой web приложения на GitHub Pages"
	@echo ""
	@echo "Storybook:"
	@echo "  storybook        - Запуск Storybook для web пакета"
	@echo "  storybook-build  - Сборка Storybook"
	@echo ""
	@echo "Mobile приложение:"
	@echo "  mobile           - Запуск mobile приложения"
	@echo "  mobile-build     - Сборка mobile приложения"
	@echo ""
	@echo "Тестирование:"
	@echo "  test             - Запуск всех тестов"
	@echo "  test-web         - Тесты web приложения"
	@echo "  test-mobile      - Тесты mobile приложения"
	@echo ""
	@echo "Линтинг:"
	@echo "  lint             - Проверка кода"
	@echo "  lint-fix         - Исправление ошибок линтера"
	@echo ""
	@echo "Разработка:"
	@echo "  dev              - Запуск всех приложений в режиме разработки"
	@echo "  watch            - Отслеживание изменений файлов"

# Установка зависимостей
install:
	@echo "Установка зависимостей..."
	npm install
	cd packages/web && npm install
	cd packages/mobile && npm install
	@echo "✅ Зависимости установлены"

# Очистка
clean:
	@echo "Очистка проекта..."
	rm -rf node_modules
	rm -rf packages/web/node_modules
	rm -rf packages/mobile/node_modules
	rm -rf packages/web/build
	rm -rf packages/mobile/build
	rm -rf storybook-static
	@echo "✅ Проект очищен"

# Web приложение
web:
	@echo "Запуск web приложения..."
	cd packages/web && npm start

web-build:
	@echo "Сборка web приложения..."
	cd packages/web && npm run build

web-deploy:
	@echo "Деплой web приложения..."
	cd packages/web && npm run deploy

# Storybook команды
storybook:
	@echo "Запуск Storybook..."
	cd packages/web && npm run storybook

storybook-build:
	@echo "Сборка Storybook..."
	cd packages/web && npm run build-storybook

# Mobile приложение
mobile:
	@echo "Запуск mobile приложения..."
	cd packages/mobile && npm start

mobile-build:
	@echo "Сборка mobile приложения..."
	cd packages/mobile && npm run build

# Тестирование
test:
	@echo "Запуск всех тестов..."
	npm test
	cd packages/web && npm test
	cd packages/mobile && npm test

test-web:
	@echo "Тесты web приложения..."
	cd packages/web && npm test

test-mobile:
	@echo "Тесты mobile приложения..."
	cd packages/mobile && npm test

# Линтинг
lint:
	@echo "Проверка кода..."
	npm run lint
	cd packages/web && npm run lint
	cd packages/mobile && npm run lint

lint-fix:
	@echo "Исправление ошибок линтера..."
	npm run lint:fix
	cd packages/web && npm run lint:fix
	cd packages/mobile && npm run lint:fix

# Разработка
dev:
	@echo "Запуск всех приложений в режиме разработки..."
	@echo "Web приложение: http://localhost:3000"
	@echo "Storybook: http://localhost:6006"
	@echo "Mobile приложение: http://localhost:8081"
	@echo ""
	@echo "Используйте Ctrl+C для остановки"
	@echo ""
	cd packages/web && npm start & \
	cd packages/web && npm run storybook & \
	cd packages/mobile && npm start & \
	wait

# Отслеживание изменений
watch:
	@echo "Отслеживание изменений файлов..."
	@echo "Web приложение будет перезапускаться при изменениях"
	cd packages/web && npm start

# Создание PNG версий логотипов
logos:
	@echo "Создание PNG версий логотипов..."
	cd assets/logos && \
	for file in *.svg; do \
		if [ -f "$$file" ]; then \
			filename=$${file%.svg}; \
			echo "Конвертация $$file в PNG..."; \
			rsvg-convert -w 16 -h 16 "$$file" -o "$$filename-16.png"; \
			rsvg-convert -w 32 -h 32 "$$file" -o "$$filename-32.png"; \
			rsvg-convert -w 64 -h 64 "$$file" -o "$$filename-64.png"; \
			rsvg-convert -w 128 -h 128 "$$file" -o "$$filename-128.png"; \
			rsvg-convert -w 256 -h 256 "$$file" -o "$$filename-256.png"; \
			rsvg-convert -w 512 -h 512 "$$file" -o "$$filename-512.png"; \
		fi; \
	done
	@echo "✅ PNG версии логотипов созданы"

# Проверка состояния проекта
status:
	@echo "Статус проекта COSMOS:"
	@echo ""
	@echo "📁 Структура проекта:"
	@ls -la packages/
	@echo ""
	@echo "📦 Зависимости:"
	@echo "Root: $(shell [ -d "node_modules" ] && echo "✅ Установлены" || echo "❌ Не установлены")"
	@echo "Web: $(shell [ -d "packages/web/node_modules" ] && echo "✅ Установлены" || echo "❌ Не установлены")"
	@echo "Mobile: $(shell [ -d "packages/mobile/node_modules" ] && echo "✅ Установлены" || echo "❌ Не установлены")"
	@echo ""
	@echo "🔧 Доступные команды:"
	@echo "make help - показать справку"
	@echo "make install - установить зависимости"
	@echo "make web - запустить web приложение"
	@echo "make storybook - запустить Storybook"
	@echo "make mobile - запустить mobile приложение"

# По умолчанию показываем справку
.DEFAULT_GOAL := help 
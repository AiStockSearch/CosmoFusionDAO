# Настройка Snyk для безопасности

## Проблема
GitHub Actions падает с ошибкой `SNYK-0005: Authentication error` при попытке сканирования безопасности.

## Решение

### 1. Получение Snyk токена

1. Зарегистрируйтесь на [Snyk.io](https://snyk.io)
2. Перейдите в настройки аккаунта
3. Создайте новый API токен
4. Скопируйте токен

### 2. Настройка секрета в GitHub

1. Перейдите в ваш GitHub репозиторий
2. Нажмите **Settings** → **Secrets and variables** → **Actions**
3. Нажмите **New repository secret**
4. Имя: `SNYK_TOKEN`
5. Значение: ваш Snyk API токен
6. Нажмите **Add secret**

### 3. Альтернативные решения

#### Вариант A: Использовать fallback workflow
```bash
# Переименуйте файлы
mv .github/workflows/security-scan.yml .github/workflows/security-scan-backup.yml
mv .github/workflows/security-scan-fallback.yml .github/workflows/security-scan.yml
```

#### Вариант B: Отключить Snyk временно
Добавьте `continue-on-error: true` к каждому Snyk шагу в workflow.

#### Вариант C: Использовать только npm/yarn audit
```yaml
- name: Run npm audit
  run: npm audit --audit-level=high

- name: Run yarn audit  
  run: yarn audit --level high
```

### 4. Проверка настроек

После настройки токена:
1. Создайте тестовый PR
2. Проверьте, что workflow проходит успешно
3. Убедитесь, что результаты сканирования доступны

### 5. Мониторинг безопасности

- Регулярно проверяйте отчеты Snyk
- Настройте уведомления о критических уязвимостях
- Обновляйте зависимости с известными уязвимостями

## Команды для локального тестирования

```bash
# Установка Snyk CLI
npm install -g snyk

# Аутентификация
snyk auth

# Сканирование зависимостей
snyk test

# Сканирование кода
snyk code test

# Мониторинг
snyk monitor
``` 
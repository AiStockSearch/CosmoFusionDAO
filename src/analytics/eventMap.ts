export const eventMap = {
  change_lang: {
    scenario: 'landing',
    description: 'Смена языка пользователем',
    params: ['lang', 'sessionId'],
    platforms: ['amplitude', 'sentry'],
  },
  scroll_to_section: {
    scenario: 'landing',
    description: 'Переход по якорю',
    params: ['anchor', 'sessionId'],
    platforms: ['amplitude', 'firebase'],
  },
  footer_hero_primary: {
    scenario: 'footer',
    description: 'Клик по главной CTA в футере',
    params: ['url', 'sessionId'],
    platforms: ['amplitude', 'sentry'],
  },
  subscribe_form_submit: {
    scenario: 'footer',
    description: 'Отправка формы подписки',
    params: ['email', 'sessionId'],
    platforms: ['amplitude', 'firebase'],
  },
  card_builder_select: {
    scenario: 'hero',
    description: 'Выбор карточки в CardBuilder',
    params: ['index', 'sessionId'],
    platforms: ['amplitude', 'sentry'],
  },
}; 
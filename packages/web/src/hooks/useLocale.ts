import { useState, useEffect, useCallback } from 'react';

// Импортируем переводы
import ru from '../locales/ru.json';
import en from '../locales/en.json';

const LOCALES = { ru, en };
const DEFAULT_LOCALE = 'en';

type Locale = keyof typeof LOCALES;

type Translations = typeof ru;

function detectLocale(): Locale {
  if (typeof navigator !== 'undefined') {
    const lang = navigator.language.slice(0, 2).toLowerCase();
    if (lang === 'ru') return 'ru';
    if (lang === 'en') return 'en';
  }
  return DEFAULT_LOCALE;
}

export function useLocale() {
  const [locale, setLocale] = useState<Locale>(detectLocale());
  const [translations, setTranslations] = useState<Translations>(LOCALES[locale]);

  useEffect(() => {
    setTranslations(LOCALES[locale]);
  }, [locale]);

  const t = useCallback(
    (key: string): any => {
      const keys = key.split('.');
      let value: any = translations;
      for (const k of keys) {
        value = value?.[k];
        if (value === undefined) return key;
      }
      return value;
    },
    [translations]
  );

  return {
    locale,
    setLocale,
    t,
    translations,
  };
} 
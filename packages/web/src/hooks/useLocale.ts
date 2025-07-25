import { useState, useEffect, useCallback } from 'react';

// Импортируем переводы
import ru from '../locales/ru.json';
import en from '../locales/en.json';

const LOCALES = { ru, en };
const DEFAULT_LOCALE = 'en';
const LOCALE_KEY = 'landing_lang';

type Locale = keyof typeof LOCALES;

type Translations = typeof ru;

function getInitialLocale(): Locale {
  if (typeof window !== 'undefined') {
    const stored = localStorage.getItem(LOCALE_KEY);
    if (stored === 'ru' || stored === 'en') return stored as Locale;
    // Если нет в localStorage — определяем через navigator.language
    const navLang =
      typeof navigator !== 'undefined' ? navigator.language.slice(0, 2).toLowerCase() : '';
    const detected = navLang === 'ru' ? 'ru' : 'en';
    localStorage.setItem(LOCALE_KEY, detected);
    return detected as Locale;
  }
  return DEFAULT_LOCALE;
}

export function useLocale() {
  const [locale, setLocaleState] = useState<Locale>(getInitialLocale());
  const [translations, setTranslations] = useState<Translations>(LOCALES[locale]);

  useEffect(() => {
    setTranslations(LOCALES[locale]);
    if (typeof window !== 'undefined') {
      localStorage.setItem(LOCALE_KEY, locale);
    }
  }, [locale]);

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    if (typeof window !== 'undefined') {
      localStorage.setItem(LOCALE_KEY, newLocale);
    }
  };

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
    [translations],
  );

  return {
    locale,
    setLocale,
    t,
    translations,
  };
}

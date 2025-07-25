import { useMemo } from 'react';
import enTranslations from '../content/translations-en.json';
import ruTranslations from '../content/translations-ru.json';

type Locale = 'en' | 'ru';

interface UnifiedTranslations {
  [key: string]: any;
}

export function useUnifiedTranslations(locale: Locale = 'en'): UnifiedTranslations {
  const translations = useMemo(() => {
    return locale === 'en' ? enTranslations : ruTranslations;
  }, [locale]);

  return translations;
}

export function useSectionTranslation(locale: Locale = 'en', section: string, key?: string): any {
  const translations = useUnifiedTranslations(locale);
  
  if (!key) {
    return (translations as any)[section] || {};
  }
  
  return (translations as any)[section]?.[key] || '';
}

export function getTranslation(locale: Locale, section: string, key: string): string {
  const translations = locale === 'en' ? enTranslations : ruTranslations;
  return (translations as any)[section]?.[key] || '';
} 
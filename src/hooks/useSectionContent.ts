import { useMemo, useState, useEffect } from 'react';
import enTranslations from '../content/translations-en.json';
import ruTranslations from '../content/translations-ru.json';

// Заглушка для DeepL API (реализуйте реальный запрос при наличии ключа)
async function deeplTranslate(textObj: any, from: string, to: string): Promise<any> {
  // Ключ для кэширования
  const cacheKey = `deepl_${from}_${to}_${JSON.stringify(textObj)}`;
  const cached = localStorage.getItem(cacheKey);
  if (cached) return JSON.parse(cached);
  // Здесь должен быть реальный запрос к DeepL API
  // Например, fetch('https://api.deepl.com/v2/translate', ...)
  // Для примера просто возвращаем английский текст с пометкой
  const translated =
    typeof textObj === 'string'
      ? `[auto-${to}] ${textObj}`
      : Object.fromEntries(
          Object.entries(textObj).map(([k, v]) => [
            k,
            typeof v === 'string' ? `[auto-${to}] ${v}` : v,
          ]),
        );
  localStorage.setItem(cacheKey, JSON.stringify(translated));
  return translated;
}

type SectionMap = {
  [key: string]: {
    en: any;
    ru?: any;
    [lang: string]: any;
  };
};

// Создаем маппинг из новых JSON файлов
const sectionMap: SectionMap = {
  hero: { en: (enTranslations as any).hero, ru: (ruTranslations as any).hero },
  problem: { en: (enTranslations as any).problem, ru: (ruTranslations as any).problem },
  reflection: { en: (enTranslations as any).reflection, ru: (ruTranslations as any).reflection },
  solution: { en: (enTranslations as any).solution, ru: (ruTranslations as any).solution },
  evolution: { en: (enTranslations as any).evolution, ru: (ruTranslations as any).evolution },
  governance: { en: (enTranslations as any).governance, ru: (ruTranslations as any).governance },
  motionPhrase: { en: (enTranslations as any).motionPhrase, ru: (ruTranslations as any).motionPhrase },
  gettingStarted: { en: (enTranslations as any).gettingStarted, ru: (ruTranslations as any).gettingStarted },
  footer: { en: (enTranslations as any).footer, ru: (ruTranslations as any).footer },
};

function detectLang(): string {
  if (typeof window !== 'undefined') {
    const stored = localStorage.getItem('landing_lang');
    if (stored) return stored;
    const nav = navigator.language.slice(0, 2).toLowerCase();
    return nav;
  }
  return 'en';
}

export function useSectionContent(section: keyof typeof sectionMap): string | object | unknown {
  const lang = detectLang();
  const [autoTranslated, setAutoTranslated] = useState<any>(null);
  const map = sectionMap[section];

  // Fallback: en -> ru -> auto
  const manual = useMemo(() => {
    if (lang === 'en') return map.en;
    if (lang === 'ru' && map.ru) return map.ru;
    if (map[lang]) return map[lang];
    return null;
  }, [lang, map]);

  useEffect(() => {
    let cancelled = false;
    if (!manual && lang !== 'en' && map.en) {
      deeplTranslate(map.en, 'en', lang).then((result) => {
        if (!cancelled) setAutoTranslated(result);
      });
    } else {
      setAutoTranslated(null);
    }
    return () => {
      cancelled = true;
    };
  }, [manual, lang, map]);

  if (manual) return manual;
  if (autoTranslated) return autoTranslated;
  return map.en;
}

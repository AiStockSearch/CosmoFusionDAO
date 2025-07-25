import { useMemo, useState, useEffect } from 'react';
import { heroPageEn } from '../content/heroPageEn';
import { problemPageEn } from '../content/problemPageEn';
import { reflectionPageEn } from '../content/reflectionPageEn';
import { solutionsPageEn } from '../content/solutionPageEn';
import { evolutionPageEn } from '../content/evolutionPageEn';
import { governancePageEn } from '../content/governancePageEn';
import { heroPageRu } from '../content/heroPageRu';
import { problemPageRu } from '../content/problemPageRu';
import { reflectionPageRu } from '../content/reflectionPageRu';
import { solutionsPageRu } from '../content/solutionsPageRu';
import { evolutionPageRu } from '../content/evolutionPageRu';
import { governancePageRu } from '../content/governancePageRu';
import { motionPhraseEn } from '../content/motionPhraseEn';
import { motionPhraseRu } from '../content/motionPhraseRu';
import { gettingStarterDataEn } from '../content/gettingStarterDataEn';
import { gettingStarterDataRu } from '../content/gettingStarterDataRu';
import footer from '../content/footer';
import { footerRu } from '../content/footerRu';

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

const sectionMap: SectionMap = {
  hero: { en: heroPageEn, ru: heroPageRu },
  problem: { en: problemPageEn, ru: problemPageRu },
  reflection: { en: reflectionPageEn, ru: reflectionPageRu },
  solution: { en: solutionsPageEn, ru: solutionsPageRu },
  evolution: { en: evolutionPageEn, ru: evolutionPageRu },
  governance: { en: governancePageEn, ru: governancePageRu },
  motionPhrase: { en: motionPhraseEn, ru: motionPhraseRu },
  gettingStarted: { en: gettingStarterDataEn, ru: gettingStarterDataRu },
  footer: { en: footer, ru: footerRu },
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

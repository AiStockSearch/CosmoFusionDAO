import React, {
  createContext
} from 'react';
import { footerEn } from '../content/footerEn';
import { footerRu } from '../content/footerRu';
import { heroPageEn } from '../content/heroPageEn';
import { heroPageRu } from '../content/heroPageRu';
import { listArrayBuilder as cardBuilderEn } from '../content/jobBuilder';
import { problemPageEn } from '../content/problemPageEn';
import { problemPageRu } from '../content/problemPageRu';
import { reflectionPageEn } from '../content/reflectionPageEn';
import { reflectionPageRu } from '../content/reflectionPageRu';
import en from '../locales/en.json';
import ru from '../locales/ru.json';

const LOCALES = { ru, en };
const LOCALE_KEY = 'landing_lang';

type Locale = 'ru' | 'en';
type Translations = typeof ru;

interface JournalEntry
{
  date: string;
  title: string;
  subtitle: string;
  text: string;
}

interface FooterData
{
  [ key: string ]: any;
}

interface LocaleContextType {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: (key: string) => any;
  translations: Translations;
  journalEntries: JournalEntry[];
  footer: FooterData;
  heroSection: any;
  problemSection: any;
  reflectionSection: any;
  cardBuilder: any;
}

const LocaleContext = createContext<LocaleContextType | undefined>(undefined);

function getInitialLocale(): Locale {
  return 'en';
}

export const LocaleProvider = ( { children }: { children: React.ReactNode } ) =>
{
  const [ journalEntries, setJournalEntries ] = React.useState<JournalEntry[]>( [] );
  const [ locale, setLocaleState ] = React.useState<Locale>( getInitialLocale() );
  const [ footerData, setFooterData ] = React.useState<FooterData>( locale === 'ru' ? footerRu : footerEn );
  const [ heroSection, setHeroSection ] = React.useState<any>( locale === 'ru' ? heroPageRu : heroPageEn );
  const [ problemSection, setProblemSection ] = React.useState<any>( locale === 'ru' ? problemPageRu : problemPageEn );
  const [ reflectionSection, setReflectionSection ] = React.useState<any>( locale === 'ru' ? reflectionPageRu : reflectionPageEn );
  const [ cardBuilder, setCardBuilder ] = React.useState<any>( cardBuilderEn );
  const [ translations, setTranslations ] = React.useState<Translations>( LOCALES[ locale ] );

  React.useEffect( () =>
  {
    setTranslations(LOCALES[locale]);
    setFooterData( locale === 'ru' ? footerRu : footerEn );
    setHeroSection( locale === 'ru' ? heroPageRu : heroPageEn );
    setProblemSection( locale === 'ru' ? problemPageRu : problemPageEn );
    setReflectionSection( locale === 'ru' ? reflectionPageRu : reflectionPageEn );
    setCardBuilder( cardBuilderEn );
    if (typeof window !== 'undefined') {
      localStorage.setItem(LOCALE_KEY, locale);
    }
    const onStorage = (e: StorageEvent) => {
      if (e.key === LOCALE_KEY && (e.newValue === 'ru' || e.newValue === 'en')) {
        setLocaleState(e.newValue as Locale);
      }
    };
    window.addEventListener('storage', onStorage);
    return () => {
      window.removeEventListener('storage', onStorage);
    };
  }, [locale]);

  React.useEffect( () =>
  {
    ( async () =>
    {
      if ( locale === 'ru' )
      {
        const mod = await import( '../content/journalEntriesRu.json' );
        setJournalEntries( mod.default );
      } else
      {
        const mod = await import( '../content/journalEntriesEn.json' );
        setJournalEntries( mod.default );
      }
    } )();
  }, [ locale ] );

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    if (typeof window !== 'undefined') {
      localStorage.setItem(LOCALE_KEY, newLocale);
    }
  };

  const t = React.useCallback(
    (key: string): any => {
      const keys = key.split('.');
      let value: any = translations;
      for (const k of keys) {
        value = value?.[k];
        if (value === undefined) return key;
      }
      return value;
    },
    [ translations ]
  );

  return (
    <LocaleContext.Provider
      value={{
        locale,
        setLocale,
        t,
        translations,
        journalEntries,
        footer: footerData,
        heroSection,
        problemSection,
        reflectionSection,
        cardBuilder
      }}
    >
      {children}
    </LocaleContext.Provider>
  );
};

export function useLocale() {
  const ctx = React.useContext( LocaleContext );
  if (!ctx) throw new Error('useLocale must be used within a LocaleProvider');
  return ctx;
}

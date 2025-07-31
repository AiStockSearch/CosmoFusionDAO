import React, { createContext } from 'react';
import enTranslations from '../content/translations-en.json';
import ruTranslations from '../content/translations-ru.json';
import enJournalEntries from '../content/journalEntriesEn.json';
import ruJournalEntries from '../content/journalEntriesRu.json';
// Импорт картинок для секций (en/ru)
import problemImageEnJpg from '../assets/images/problem-alone.jpg';
import problemImageEnWebp from '../assets/images/problem-alone.webp';
import problemImageRu from '../assets/images/problem-alone.jpg';
import reflectionImageEnJpg from '../assets/images/reflection-vision.jpg';
import reflectionImageEnWebp from '../assets/images/reflection-vision.webp';
import reflectionImageRu from '../assets/images/reflection-vision.jpg';
import solutionImageEn from '../assets/images/solution-vision-astronaut.jpg';
import solutionImageRu from '../assets/images/solution-vision-astronaut.jpg';
import evolutionImageEn from '../assets/images/evolution-peakpx.jpg';
import evolutionImageRu from '../assets/images/evolution-peakpx.jpg';
import governanceImageEnJpg from '../assets/images/governance-democracy.jpg';
import governanceImageEnWebp from '../assets/images/governance-democracy.webp';
import governanceImageRu from '../assets/images/governance-democracy.jpg';

// Job Builder images
import jobExplorerJpg from '../assets/images/job-explorer.jpg';
import jobExplorerWebp from '../assets/images/job-explorer.webp';
import jobCriticJpg from '../assets/images/job-critic.jpg';
import jobCriticWebp from '../assets/images/job-critic.webp';
import jobCreatorJpg from '../assets/images/job-creator.jpg';
import jobCreatorWebp from '../assets/images/job-creator.webp';
import jobObserverJpg from '../assets/images/job-observer.jpg';
import jobObserverWebp from '../assets/images/job-observer.webp';
import jobManagerJpg from '../assets/images/job-manager.jpg';
import jobManagerWebp from '../assets/images/job-manager.webp';
import jobAmbassadorJpg from '../assets/images/job-ambassador.jpg';
import jobAmbassadorWebp from '../assets/images/job-ambassador.webp';

const LOCALES = { ru: ruTranslations, en: enTranslations };
const LOCALE_KEY = 'landing_lang';

type Locale = 'ru' | 'en';
type Translations = typeof ruTranslations | typeof enTranslations;

interface JournalEntry {
  date: string;
  title: string;
  subtitle: string;
  text: string;
  url?: string;
  platform?: string;
}

interface FooterData {
  [key: string]: any;
}

interface LocaleContextType {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: (key: string) => any;
  translations: Translations;
  journalEntries: JournalEntry[];
  journalSection: {
    heading: string;
    description: string;
  };
  footer: FooterData;
  heroSection: any;
  problemSection: any;
  reflectionSection: any;
  solutionSection: any;
  evolutionSection: any;
  governanceSection: any;
  cardBuilder: any;
}

const LocaleContext = createContext<LocaleContextType | undefined>(undefined);

function getInitialLocale(): Locale {
  return 'en';
}

function withImages(section: string, data: any, locale: Locale) {
  switch (section) {
    case 'problem':
      return locale === 'en'
        ? { ...data, image: { jpg: problemImageEnJpg, webp: problemImageEnWebp } }
        : { ...data, image: problemImageRu };
    case 'reflection':
      return locale === 'en'
        ? { ...data, image: { jpg: reflectionImageEnJpg, webp: reflectionImageEnWebp } }
        : { ...data, image: reflectionImageRu };
    case 'solution':
      return locale === 'en'
        ? { ...data, image: solutionImageEn }
        : { ...data, image: solutionImageRu };
    case 'evolution':
      return locale === 'en'
        ? { ...data, image: evolutionImageEn }
        : { ...data, image: evolutionImageRu };
    case 'governance':
      return locale === 'en'
        ? { ...data, image: { jpg: governanceImageEnJpg, webp: governanceImageEnWebp } }
        : { ...data, image: governanceImageRu };
    default:
      return data;
  }
}

function withJobBuilderImages( roles: any[], locale: Locale )
{
  const jobImages = {
    Explorer: { jpg: jobExplorerJpg, webp: jobExplorerWebp },
    Critic: { jpg: jobCriticJpg, webp: jobCriticWebp },
    Creator: { jpg: jobCreatorJpg, webp: jobCreatorWebp },
    Observer: { jpg: jobObserverJpg, webp: jobObserverWebp },
    Manager: { jpg: jobManagerJpg, webp: jobManagerWebp },
    Ambassador: { jpg: jobAmbassadorJpg, webp: jobAmbassadorWebp }
  };

  const jobImagesRu = {
    Исследователь: { jpg: jobExplorerJpg, webp: jobExplorerWebp },
    Критик: { jpg: jobCriticJpg, webp: jobCriticWebp },
    Создатель: { jpg: jobCreatorJpg, webp: jobCreatorWebp },
    Наблюдатель: { jpg: jobObserverJpg, webp: jobObserverWebp },
    Менеджер: { jpg: jobManagerJpg, webp: jobManagerWebp },
    Амбассадор: { jpg: jobAmbassadorJpg, webp: jobAmbassadorWebp }
  };

  return roles.map( role => ( {
    ...role,
    img: locale === 'en' ? jobImages[ role.select as keyof typeof jobImages ] : jobImagesRu[ role.select as keyof typeof jobImagesRu ]
  } ) );
}

export const LocaleProvider = ({ children }: { children: React.ReactNode }) => {
  const [journalEntries, setJournalEntries] = React.useState<JournalEntry[]>([]);
  const [locale, setLocaleState] = React.useState<Locale>(getInitialLocale());
  const [footerData, setFooterData] = React.useState<FooterData>(locale === 'ru' ? (ruTranslations as any).footer : (enTranslations as any).footer);
  const [heroSection, setHeroSection] = React.useState<any>(locale === 'ru' ? (ruTranslations as any).hero : (enTranslations as any).hero);
  const [problemSection, setProblemSection] = React.useState<any>(withImages('problem', locale === 'ru' ? (ruTranslations as any).problem : (enTranslations as any).problem, locale));
  const [reflectionSection, setReflectionSection] = React.useState<any>(withImages('reflection', locale === 'ru' ? (ruTranslations as any).reflection : (enTranslations as any).reflection, locale));
  const [solutionSection, setSolutionSection] = React.useState<any>(withImages('solution', locale === 'ru' ? (ruTranslations as any).solution : (enTranslations as any).solution, locale));
  const [journalSection, setJournalSection] = React.useState<any>(withImages('journal', locale === 'ru' ? (ruTranslations as any).journal : (enTranslations as any).journal, locale));
  const [evolutionSection, setEvolutionSection] = React.useState<any>(withImages('evolution', locale === 'ru' ? (ruTranslations as any).evolution : (enTranslations as any).evolution, locale));
  const [governanceSection, setGovernanceSection] = React.useState<any>(withImages('governance', locale === 'ru' ? (ruTranslations as any).governance : (enTranslations as any).governance, locale));
  const [ cardBuilder, setCardBuilder ] = React.useState<any>( withJobBuilderImages( locale === 'ru' ? ( ruTranslations as any ).jobBuilder.roles : ( enTranslations as any ).jobBuilder.roles, locale ) );
  const [translations, setTranslations] = React.useState<Translations>(LOCALES[locale]);

  React.useEffect( () =>
  {
    setTranslations(LOCALES[locale]);
    setFooterData(locale === 'ru' ? (ruTranslations as any).footer : (enTranslations as any).footer);
    setHeroSection(locale === 'ru' ? (ruTranslations as any).hero : (enTranslations as any).hero);
    setProblemSection(withImages('problem', locale === 'ru' ? (ruTranslations as any).problem : (enTranslations as any).problem, locale));
    setReflectionSection(withImages('reflection', locale === 'ru' ? (ruTranslations as any).reflection : (enTranslations as any).reflection, locale));
    setSolutionSection(withImages('solution', locale === 'ru' ? (ruTranslations as any).solution : (enTranslations as any).solution, locale));
    setEvolutionSection(withImages('evolution', locale === 'ru' ? (ruTranslations as any).evolution : (enTranslations as any).evolution, locale));
    setGovernanceSection(withImages('governance', locale === 'ru' ? (ruTranslations as any).governance : (enTranslations as any).governance, locale));
    setCardBuilder( withJobBuilderImages( locale === 'ru' ? ( ruTranslations as any ).jobBuilder.roles : ( enTranslations as any ).jobBuilder.roles, locale ) );
    setJournalSection(withImages('journal', locale === 'ru' ? (ruTranslations as any).journal : (enTranslations as any).journal, locale));
    setJournalEntries( locale === 'ru' ? ruJournalEntries : enJournalEntries );
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
        if ( value === undefined )
        {
          return key;
        }
      }
      return value;
    },
    [translations]
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
        journalSection,
        solutionSection,
        evolutionSection,
        governanceSection,
        cardBuilder,
      }}
    >
      {children}
    </LocaleContext.Provider>
  );
};

export function useLocale() {
  const ctx = React.useContext(LocaleContext);
  if (!ctx) throw new Error('useLocale must be used within a LocaleProvider');
  return ctx;
}

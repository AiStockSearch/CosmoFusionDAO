import React, { useEffect, useState, useRef } from 'react';
import HeroSection from './components/hero.section';
import ProblemSection from './components/problem.sections';
import Footer from './sections/Footer';
import Reflections from './components/reflection.sections';
import GettingStarted from './components/getting.started';
import { useSectionContent } from './hooks/useSectionContent';
import { SectionAnchorProvider, useSectionAnchor } from './components/SectionAnchorContext';
import { Helmet } from 'react-helmet-async';

const defaultLang: 'ru' | 'en' = 'en';

const getInitialLang = (): 'ru' | 'en' =>
{
  const stored = localStorage.getItem( 'landing_lang' );
  if ( stored === 'ru' || stored === 'en' ) return stored;
  return defaultLang;
};

// Маппинг Table of Contents на id секций (тот же, что в hero.section.tsx)
const sectionAnchors = [
  "hero", // новая нулевая секция
  "lonely-astronauts",
  "visor-reflection",
  "thousands-look-galaxy",
  "democracy-explorers",
  "lone-to-collective-mind",
  "become-collective-mind",
  "dao-logbook",
  "glossalarium",
];

const SectionWithAnchor: React.FC<{ id: string; children: React.ReactNode }> = ( { id, children } ) =>
{
  const ref = useRef<HTMLElement | null>( null );
  const { registerSection } = useSectionAnchor();
  useEffect( () => { registerSection( id, ref ); }, [ id, registerSection ] );
  return <section id={id} ref={ref}>{children}</section>;
};

type SectionKey = 'hero' | 'problem' | 'reflection' | 'solution' | 'evolution' | 'governance' | 'gettingStarted';

const sectionSeo: Record<SectionKey, {
  en: { title: string; description: string };
  ru: { title: string; description: string };
}> = {
  hero: {
    en: {
      title: 'CosmoFusion DAO — Decentralized Community & Platform',
      description: 'CosmoFusion DAO is a next-generation decentralized community and platform for collective intelligence, open innovation, and transparent governance.'
    },
    ru: {
      title: 'CosmoFusion DAO — Децентрализованное сообщество и платформа',
      description: 'CosmoFusion DAO — это сообщество нового поколения для коллективного интеллекта, открытых инноваций и прозрачного управления.'
    }
  },
  problem: {
    en: {
      title: 'Problems — CosmoFusion DAO',
      description: 'Explore the key challenges and problems addressed by CosmoFusion DAO.'
    },
    ru: {
      title: 'Проблемы — CosmoFusion DAO',
      description: 'Узнайте о ключевых вызовах и проблемах, которые решает CosmoFusion DAO.'
    }
  },
  reflection: {
    en: {
      title: 'Reflections — CosmoFusion DAO',
      description: 'Insights and reflections from the CosmoFusion DAO community.'
    },
    ru: {
      title: 'Рефлексии — CosmoFusion DAO',
      description: 'Мнения и размышления участников сообщества CosmoFusion DAO.'
    }
  },
  solution: {
    en: {
      title: 'Solutions — CosmoFusion DAO',
      description: 'Discover innovative solutions developed by CosmoFusion DAO.'
    },
    ru: {
      title: 'Решения — CosmoFusion DAO',
      description: 'Ознакомьтесь с инновационными решениями, созданными CosmoFusion DAO.'
    }
  },
  evolution: {
    en: {
      title: 'Evolution — CosmoFusion DAO',
      description: 'The evolution process and growth of CosmoFusion DAO.'
    },
    ru: {
      title: 'Эволюция — CosmoFusion DAO',
      description: 'Процесс эволюции и развития CosmoFusion DAO.'
    }
  },
  governance: {
    en: {
      title: 'Governance — CosmoFusion DAO',
      description: 'Governance structure and decision-making in CosmoFusion DAO.'
    },
    ru: {
      title: 'Управление — CosmoFusion DAO',
      description: 'Структура управления и принятие решений в CosmoFusion DAO.'
    }
  },
  gettingStarted: {
    en: {
      title: 'Getting Started — CosmoFusion DAO',
      description: 'How to get started with CosmoFusion DAO.'
    },
    ru: {
      title: 'Начало работы — CosmoFusion DAO',
      description: 'Как начать работу с CosmoFusion DAO.'
    }
  }
};

function getSectionFromHash( hash: string ): SectionKey
{
  if ( !hash ) return 'hero';
  const map: Record<string, SectionKey> = {
    '#hero': 'hero',
    '#problem': 'problem',
    '#reflection': 'reflection',
    '#solution': 'solution',
    '#evolution': 'evolution',
    '#governance': 'governance',
    '#getting-started': 'gettingStarted',
  };
  return map[ hash ] || 'hero';
}

const LandingPage: React.FC = () =>
{
  const [ lang ] = useState<'ru' | 'en'>( getInitialLang() );
  const heroSection = useSectionContent( 'hero' );
  const problemSection = useSectionContent( 'problem' );
  const reflectionSection = useSectionContent( 'reflection' );
  const solutionSection = useSectionContent( 'solution' );
  const evolutionSection = useSectionContent( 'evolution' );
  const governanceSection = useSectionContent( 'governance' );
  const motionPhrase = useSectionContent( 'motionPhrase' );
  const gettingStartedSection = useSectionContent( 'gettingStarted' );

  useEffect( () =>
  {
    localStorage.setItem( 'landing_lang', lang );
  }, [ lang ] );

  // Сброс scroll и hash при первом монтировании
  useEffect( () =>
  {
    if ( window.location.hash )
    {
      window.scrollTo( 0, 0 );
      window.history.replaceState( null, '', window.location.pathname );
    }
  }, [] );

  const [ currentSection, setCurrentSection ] = useState<SectionKey>( getSectionFromHash( window.location.hash ) );
  useEffect( () =>
  {
    const onHashChange = () => setCurrentSection( getSectionFromHash( window.location.hash ) );
    window.addEventListener( 'hashchange', onHashChange );
    return () => window.removeEventListener( 'hashchange', onHashChange );
  }, [] );
  const seoData = sectionSeo[ currentSection ][ lang ];

  return (
    <SectionAnchorProvider>
      <Helmet>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <link rel="canonical" href="https://cosmofusion.io/" />
        {/* Open Graph */}
        <meta property="og:title" content={seoData.title} />
        <meta property="og:description" content={seoData.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://cosmofusion.io/" />
        <meta property="og:image" content="https://cosmofusion.io/images/astronaut-optimized.png" />
        <meta property="og:image:alt" content="CosmoFusion DAO Astronaut" />
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seoData.title} />
        <meta name="twitter:description" content={seoData.description} />
        <meta name="twitter:image" content="https://cosmofusion.io/images/astronaut-optimized.png" />
        <meta name="twitter:image:alt" content="CosmoFusion DAO Astronaut" />
        <meta name="twitter:site" content="@cosmofusiondao" />
        <meta name="twitter:creator" content="@cosmofusiondao" />
      </Helmet>
      <div className="min-h-screen bg-white">
        <SectionWithAnchor id={sectionAnchors[ 0 ]}>
          <HeroSection heroPageEn={heroSection} />
          <div className="flex flex-col items-center justify-center px-4 min-h-1/4 bg-gray-200 py-14 mt-16">
            <span className="text-[1.1rem] text-gray-900 text-center  md:w-[42rem] font-bold font-share-tech-mono">
              {heroSection.subtitle}
            </span>
          </div>
        </SectionWithAnchor>
        <SectionWithAnchor id={sectionAnchors[ 1 ]}><ProblemSection problemPageEn={problemSection} /></SectionWithAnchor>
        <SectionWithAnchor id={sectionAnchors[ 2 ]}><Reflections reflectionsPageEn={reflectionSection} /></SectionWithAnchor>
        <SectionWithAnchor id={sectionAnchors[ 3 ]}><ProblemSection problemPageEn={solutionSection} /></SectionWithAnchor>
        <SectionWithAnchor id={sectionAnchors[ 4 ]}><Reflections reflectionsPageEn={governanceSection} /></SectionWithAnchor>
        {/* Evolution Process (index 5) — без id */}
        <SectionWithAnchor id={sectionAnchors[ 5 ]}><ProblemSection problemPageEn={evolutionSection} /></SectionWithAnchor>
        <SectionWithAnchor id={sectionAnchors[ 6 ]}>
          <div className="flex flex-col items-center justify-center px-4 min-h-1/4 bg-gray-200 py-14">
            <span className="text-[1.2rem] text-gray-900 text-center  md:w-[42rem] font-bold font-share-tech-mono">
              {motionPhrase.text}
            </span>
          </div>
        </SectionWithAnchor>
        <SectionWithAnchor id={sectionAnchors[ 7 ]}><GettingStarted gettingStarterData={gettingStartedSection} /></SectionWithAnchor>
        <Footer />
      </div>
    </SectionAnchorProvider>
  );
};

export default LandingPage; 
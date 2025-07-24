import React, { useEffect, useState, useRef } from 'react';
import HeroSection from './components/hero.section';
import ProblemSection from './components/problem.sections';
import Footer from './sections/Footer';
import Reflections from './components/reflection.sections';
import GettingStarted from './components/getting.started';
import { useSectionContent } from './hooks/useSectionContent';
import { SectionAnchorProvider, useSectionAnchor } from './components/SectionAnchorContext';

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

  return (
    <SectionAnchorProvider>
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
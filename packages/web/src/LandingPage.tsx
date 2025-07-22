import React, { useEffect, useState } from 'react';
import HeroSection from './components/hero.section';
import ProblemSection from './components/problem.sections';
import Footer from './sections/Footer';
import { heroPageEn } from './content/heroPageEn';
import { problemPageEn } from './content/problemPageEn';
import { reflectionPageEn } from './content/reflectionPageEn';
import { solutionsPageEn } from './content/solutionPageEn';
import { evolutionPageEn } from './content/evolutionPageEn';
import { gettingStarterData } from './content/gettingStarterData';
import Reflections from './components/reflection.sections';
import GettingStarted from './components/getting.started';

import { governancePageEn } from './content/governancePageEn';
import UseCases from './components/cases.work';

const defaultLang: 'ru' | 'en' = 'en';

const getInitialLang = (): 'ru' | 'en' =>
{
  const stored = localStorage.getItem( 'landing_lang' );
  if ( stored === 'ru' || stored === 'en' ) return stored;
  return defaultLang;
};



const LandingPage: React.FC = () =>
{
  const [ lang ] = useState<'ru' | 'en'>( getInitialLang() );

  useEffect( () =>
  {
    localStorage.setItem( 'landing_lang', lang );
  }, [ lang ] );

  return (
    <div className="min-h-screen bg-white">
      <HeroSection
        heroPageEn={heroPageEn}
      />
      <ProblemSection
        problemPageEn={problemPageEn}
      />
      {/* <Reflections
        reflectionsPageEn={reflectionPageEn}
      /> */}
      <ProblemSection
        problemPageEn={solutionsPageEn}
      />
      {/* <Reflections
        reflectionsPageEn={governancePageEn}
      /> */}
      <ProblemSection
        problemPageEn={evolutionPageEn}
      />


      {/* <div className="flex flex-col items-center justify-center h-1/4 bg-gray-200 py-14">
        <span className="text-[1.2rem] text-gray-900 text-center w-[42rem] font-bold font-space-mono">
          Truth in Motion is not just a beautiful phrase. It's the principle by which our entire platform works. There are no final answers here, only constant search, collective evolution, endless approximation to truth.
        </span>
      </div> */}

      {/* <UseCases />
      <GettingStarted gettingStarterData={gettingStarterData} />
      <Footer /> */}
    </div>
  );
};

export default LandingPage; 
import React, { useEffect, useState } from 'react';
import HeroSection from './components/HeroSection';
import Footer from './sections/Footer';
import { heroPageEn } from './content/heroPageEn';

const defaultLang: 'ru' | 'en' = 'en';

const getInitialLang = (): 'ru' | 'en' => {
  const stored = localStorage.getItem('landing_lang');
  if (stored === 'ru' || stored === 'en') return stored;
  return defaultLang;
};



const LandingPage: React.FC = () => {
  const [ lang ] = useState<'ru' | 'en'>( getInitialLang() );

  useEffect(() => {
    localStorage.setItem('landing_lang', lang);
  }, [lang]);

  return (
    <div className="min-h-screen bg-white">

      {/* Hero Section */}
      <HeroSection 
        heroPageEn={heroPageEn}
      />


      {/* Footer */}
      <Footer />
    </div>
  );
};

export default LandingPage; 
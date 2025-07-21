import React, { useEffect, useState } from 'react';
import yaml from 'yaml';
import HeroSection from './components/HeroSection';
import landingContent from './landing-content.json';
import Footer from './sections/Footer';
import { LandingContent } from './types/landing';

const content: LandingContent = landingContent as LandingContent;
const sectionOrder = Object.keys(content.landingSections);
const defaultLang: 'ru' | 'en' = 'ru';

const getInitialLang = (): 'ru' | 'en' => {
  const stored = localStorage.getItem('landing_lang');
  if (stored === 'ru' || stored === 'en') return stored;
  return defaultLang;
};


const section=yaml.parse(`
hero:
    title: ZkCloud — your decentralized cloud for ZK
    description: ZkCloud is the first credibly neutral, decentralized cloud for zero-knowledge proof generation and verification
    ctaButton: Start proving now
    stats:
    - 
        value: 212K
        label: Proven in last 30 days
    - 
        value: 1.5k+
        label: Active users
    - 
        value: 100%
        label: Uptime
    - 
        value: 300+
        label: Partners
`)


const LandingPage: React.FC = () => {
  const [lang, setLang] = useState<'ru' | 'en'>(getInitialLang());

  useEffect(() => {
    localStorage.setItem('landing_lang', lang);
  }, [lang]);

  return (
    <div className="min-h-screen bg-white">

      {/* Hero Section */}
      <HeroSection 
      stats={section.hero.stats}
      title={section.hero.title}
      description={section.hero.description}
      ctaButton={section.hero.ctaButton}
      />


      {/* Footer */}
      <Footer />
    </div>
  );
};

export default LandingPage; 
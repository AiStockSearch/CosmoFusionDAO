import React from 'react';
import { eventCenter } from '../analytics/eventCenter';
import astronautPng from '../assets/images/hero-astronaut.jpg';
import astronautWebp from '../assets/images/hero-astronaut.webp';
import cosmoFusion_dao from '../assets/images/hero-cosmo-fusion.jpg';
import cosmoFusionWebp from '../assets/images/hero-cosmo-fusion.webp';
import { useLocale } from '../hooks/useLocale';
import { useSectionAnchor } from './SectionAnchorContext';
import OptimizedImage from './OptimizedImage';

export interface HeroSectionProps {
  heroPageEn: {
    title: string;
    subtitle: string;
    description: string;
    cta: string;
    visual: {
      type: string;
    };
    idea: {
      title: string;
      description: string;
    };
    hypotize: {
      title: string;
      description: string;
    };
    arr: {
      title: string;
      list: string[];
    };
  };
}

const sectionAnchors = [
  'lonely-astronauts',
  'visor-reflection',
  'thousands-look-galaxy',
  'democracy-explorers',
  'lone-to-collective-mind',
  // Evolution Process (index 5) — без id
  'become-collective-mind',
  'dao-logbook',
  'glossalarium',
];
const EXCLUDE_ANCHOR_INDEXES = [5];

const HeroSection: React.FC = () => {
  const { heroSection } = useLocale();
  const { scrollToSection } = useSectionAnchor();

  return (
    <>
      <section className="hero-grid min-h-screen">
        <div className="col-start-2 col-end-4 row-start-1 row-end-3 mt-4 overflow-hidden rounded-[34px] bg-gray-300 p-2 shadow-sm">
          <OptimizedImage
            src={astronautPng}
            webpSrc={astronautWebp}
            alt={heroSection.alt}
            className="flex h-full w-screen max-h-[42rem] rounded-[32px] object-cover"
            loading="eager"
            sizes="(max-width: 680px) 75vw, 30vw"
          />
        </div>
        <div className="col-start-2 col-end-3 row-start-3 row-end-3 mt-4">
          <div className="flex flex-col items-start px-6 xl:w-[52rem]">
            <h2 className="hero-title mb-4 text-4xl">{heroSection.idea.title}</h2>
            <p className="hero-desc  xs:w-[28rem] mb-10 pr-0 leading-relaxed  md:pr-[410px] xl:max-w-2xl xl:pr-4">
              {heroSection.idea.description}
            </p>
            <h3 className="hero-title mb-2 text-gray-900">{heroSection.hypotize.title}</h3>
            <p className="hero-desc  xs:w-[28rem] min-w-[16rem] max-w-[28rem] font-bold leading-relaxed text-cyan-900">
              {heroSection.hypotize.description}
            </p>
          </div>
          <div className="px-6 pb-12 pt-14 md:hidden" style={{ scrollBehavior: 'smooth' }}>
            <span className="hero-list-title">{heroSection.arr.title}</span>
            {heroSection.arr.list.map((x: string, idx: number) => {
              if (EXCLUDE_ANCHOR_INDEXES.includes(idx)) {
                return (
                  <div className="flex flex-row items-start justify-start" key={idx}>
                    <span className="hero-list-bullet"> * </span>
                    <span className="hero-list-item">{x}</span>
                  </div>
                );
              }
              return (
                <div className="flex flex-row items-start justify-start" key={idx}>
                  <span className="hero-list-bullet"> * </span>
                  <span
                    className="hero-list-item cursor-pointer text-blue-600 hover:underline"
                    onClick={() =>
                    {
                      eventCenter.logEvent( { category: 'click', name: 'scroll_to_section', value: { anchor: sectionAnchors[ idx ] } } );
                      scrollToSection( sectionAnchors[ idx ] );
                    }}
                    onKeyDown={( e ) =>
                    {
                      if ( e.key === 'Enter' || e.key === ' ' )
                      {
                        eventCenter.logEvent( { category: 'click', name: 'scroll_to_section', value: { anchor: sectionAnchors[ idx ] } } );
                        scrollToSection( sectionAnchors[ idx ] );
                      }
                    }}
                    role="button"
                    tabIndex={0}
                  >
                    {x}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
        <div className="absolute inset-y-0 left-0 hidden xl:block ">
          <picture>
            <source srcSet={cosmoFusionWebp} type="image/webp" />
            <source srcSet={cosmoFusion_dao} type="image/jpeg" />
            <img
              src={cosmoFusion_dao}
              alt="CosmoFusion DAO background"
              className="size-full object-cover px-20 py-10"
              loading="lazy"
            />
          </picture>
        </div>
      </section>
      <div className="shadow-xs absolute bottom-14 right-20 -mx-6 hidden w-[360px] flex-col rounded-[34px] bg-gray-200 p-2 shadow-xl md:flex">
        <div className="rounded-[30px] bg-white p-4 ">
          <span className="hero-list-title">{heroSection.arr.title}</span>
          {heroSection.arr.list.map((x: string, idx: number) => {
            if (EXCLUDE_ANCHOR_INDEXES.includes(idx)) {
              return (
                <div className="flex flex-row items-start justify-start" key={idx}>
                  <span className="hero-list-bullet"> * </span>
                  <span className="hero-list-item">{x}</span>
                </div>
              );
            }
            return (
              <div className="flex flex-row items-start justify-start" key={idx}>
                <span className="hero-list-bullet"> * </span>
                <span
                  className="hero-list-item cursor-pointer text-blue-600 hover:underline"
                  onClick={() =>
                  {
                    eventCenter.logEvent( { category: 'click', name: 'scroll_to_section', value: { anchor: sectionAnchors[ idx ] } } );
                    scrollToSection( sectionAnchors[ idx ] );
                  }}
                  onKeyDown={( e ) =>
                  {
                    if ( e.key === 'Enter' || e.key === ' ' )
                    {
                      eventCenter.logEvent( { category: 'click', name: 'scroll_to_section', value: { anchor: sectionAnchors[ idx ] } } );
                      scrollToSection( sectionAnchors[ idx ] );
                    }
                  }}
                  role="button"
                  tabIndex={0}
                >
                  {x}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default HeroSection;

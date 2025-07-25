import React from 'react';
import astronautPng from '../assets/images/astronaut-optimized.jpg';
import astronautWebp from '../assets/images/astronaut-optimized.webp';
import cosmoFusion_dao from '../assets/images/cosmoFusion_dao.jpg';
import cosmoFusionWebp from '../assets/images/cosmoFusion_dao.webp';
import { useSectionAnchor } from './SectionAnchorContext';
import { useLocale } from '../hooks/useLocale';

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

const HeroSection: React.FC<HeroSectionProps> = ({ heroPageEn }) => {
  const { t } = useLocale();
  const { scrollToSection } = useSectionAnchor();

  return (
    <>
      <section className="hero-grid min-h-screen">
        <div className="col-start-2 col-end-4 row-start-1 row-end-3 mt-4 overflow-hidden rounded-[34px] bg-gray-300 p-2 shadow-sm">
          <picture>
            <source srcSet={astronautWebp} type="image/webp" />
            <source srcSet={astronautPng} type="image/jpeg" />
            <img
              src={astronautPng}
              alt={t('hero.alt')}
              className="flex size-full max-h-full min-h-[25rem] rounded-[32px] object-cover"
              loading="lazy"
            />
          </picture>
        </div>
        <div className="col-start-2 col-end-3 row-start-3 row-end-3 mt-4">
          <div className="flex flex-col items-start px-6 xl:w-[52rem]">
            <h2 className="hero-title mb-4 text-4xl">{heroPageEn.idea.title}</h2>
            <p className="hero-desc  xs:w-[28rem] mb-10 pr-0 leading-relaxed  md:pr-[410px] xl:max-w-2xl xl:pr-4">
              {heroPageEn.idea.description}
            </p>
            <h3 className="hero-title mb-2 text-gray-900">{heroPageEn.hypotize.title}</h3>
            <p className="hero-desc  xs:w-[28rem] w-[22rem] font-bold leading-relaxed text-cyan-900">
              {heroPageEn.hypotize.description}
            </p>
          </div>
          <div className="px-6 pb-12 pt-14 md:hidden" style={{ scrollBehavior: 'smooth' }}>
            <span className="hero-list-title">{heroPageEn.arr.title}</span>
            {heroPageEn.arr.list.map((x, idx) => {
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
                    onClick={() => scrollToSection(sectionAnchors[idx])}
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
          <span className="hero-list-title">{heroPageEn.arr.title}</span>
          {heroPageEn.arr.list.map((x, idx) => {
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
                  onClick={() => scrollToSection(sectionAnchors[idx])}
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

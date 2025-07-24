import React, { useRef, useEffect } from "react";
import astronautPng from "../assets/images/astronaut-optimized.jpg";
import cosmoFusion_dao from "../assets/images/cosmoFusion_dao.jpg";
import { useSectionAnchor } from "./SectionAnchorContext";
import { useLocale } from '../hooks/useLocale';

interface HeroSectionProps
{
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
  "lonely-astronauts",
  "visor-reflection",
  "thousands-look-galaxy",
  "democracy-explorers",
  "lone-to-collective-mind",
  // Evolution Process (index 5) — без id
  "become-collective-mind",
  "dao-logbook",
  "glossalarium",
];
const EXCLUDE_ANCHOR_INDEXES = [ 5 ];

const HeroSection: React.FC<HeroSectionProps> = ( { heroPageEn } ) =>
{
  const { t } = useLocale();
  const { scrollToSection } = useSectionAnchor();

  return (
    <>
      <section className="hero-grid">
        <div className="col-start-2 col-end-4 row-start-1 row-end-3 overflow-hidden mt-4 bg-gray-300 p-2 rounded-[34px] shadow-sm">
          <img
            src={astronautPng}
            alt={t( 'hero.alt' )}
            className="flex w-full h-full min-h-[25rem] max-h-[38rem] object-cover rounded-[32px]"
          />
        </div>
        <div className="col-start-2 col-end-3 row-start-3 row-end-3 mt-4">
          <div className="flex flex-col items-start px-6 xl:w-[52rem]">
            <h2 className="hero-title text-4xl mb-4">
              {heroPageEn.idea.title}
            </h2>
            <p className="hero-desc  xs:w-[28rem] pr-[0rem] md:pr-[410px] xl:pr-[1rem]  xl:max-w-2xl leading-relaxed mb-10">
              {heroPageEn.idea.description}
            </p>
            <h3 className="hero-title text-gray-900 mb-2">
              {heroPageEn.hypotize.title}
            </h3>
            <p className="hero-desc  w-[22rem] xs:w-[28rem] font-bold text-cyan-900 leading-relaxed">
              {heroPageEn.hypotize.description}
            </p>
          </div>
          <div className="px-6 pt-14 pb-12 md:hidden" style={{ scrollBehavior: 'smooth' }}>
            <span className="hero-list-title">{heroPageEn.arr.title}</span>
            {heroPageEn.arr.list.map( ( x, idx ) =>
            {
              if ( EXCLUDE_ANCHOR_INDEXES.includes( idx ) )
              {
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
                    className="hero-list-item text-blue-600 hover:underline cursor-pointer"
                    onClick={() => scrollToSection( sectionAnchors[ idx ] )}
                  >
                    {x}
                  </span>
                </div>
              );
            } )}
          </div>
        </div>
        <div className="hidden absolute top-0 left-0 bottom-0 xl:block ">
          <img
            src={cosmoFusion_dao}
            alt="CosmoFusion DAO background"
            className="w-full h-full object-cover px-20 py-10"
          />
        </div>
      </section>
      <div className="flex flex-col bg-gray-200 p-2 rounded-[34px] shadow-xl -mx-6 w-[360px] absolute bottom-14 right-20 shadow-xs hidden md:block">
        <div className="bg-white rounded-[30px] px-4 py-4 ">
          <span className="hero-list-title">{heroPageEn.arr.title}</span>
          {heroPageEn.arr.list.map( ( x, idx ) =>
          {
            if ( EXCLUDE_ANCHOR_INDEXES.includes( idx ) )
            {
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
                  className="hero-list-item text-blue-600 hover:underline cursor-pointer"
                  onClick={() => scrollToSection( sectionAnchors[ idx ] )}
                >
                  {x}
                </span>
              </div>
            );
          } )}
        </div>
      </div>
    </>
  );
};

export default HeroSection;

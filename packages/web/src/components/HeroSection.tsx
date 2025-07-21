import React from "react";
import astronautPng from "../assets/images/astronaut-optimized.png";
import cosmoFusion_dao from "../assets/images/cosmoFusion_dao.jpg";

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

const HeroSection: React.FC<HeroSectionProps> = ( { heroPageEn } ) =>
{
  return (
    <>
      <section className="hero-grid">
        <div className="col-start-2 col-end-4 row-start-1 row-end-3 overflow-hidden mt-10 bg-gray-300 p-2 rounded-[34px] shadow-sm">
          <img
            src={astronautPng}
            alt="astronaut"
            className="flex w-full h-full object-cover rounded-[32px]"
          />
        </div>
        <div className="col-start-2 col-end-3 row-start-3 row-end-3 mt-4">
          <div className="flex flex-col items-start px-6 py-12 bg-white">
            <h2 className="hero-title text-4xl mb-4">{heroPageEn.idea.title}</h2>
            <p className="hero-desc max-w-2xl leading-relaxed mb-10">
              {heroPageEn.idea.description}
            </p>
            <h3 className="hero-title text-2xl text-gray-900 mb-2">{heroPageEn.hypotize.title}</h3>
            <p className="hero-desc max-w-xl font-bold text-cyan-900 leading-relaxed">
              {heroPageEn.hypotize.description}
            </p>
          </div>
        </div>
        <div className="absolute top-0 left-0 bottom-0">
          <img
            src={cosmoFusion_dao}
            alt="CosmoFusion DAO background"
            className="w-full h-full object-cover px-20 py-10"
          />
        </div>
      </section>
      <div className="flex flex-col bg-gray-200 p-2 rounded-[34px] shadow-xl -mx-6 w-[360px] absolute bottom-14 right-20 shadow-xs">
        <div className="bg-white rounded-[30px] px-4 py-4 " >
        <span className="hero-list-title">
          {heroPageEn.arr.title}
        </span>
        {heroPageEn.arr.list.map( ( x, idx ) =>
        {
          return (
            <div className="flex flex-row items-start justify-start" key={idx}>
              <span className="hero-list-bullet"> * </span>
              <span className="hero-list-item">{x}</span>
            </div>
          );
        } )}
        </div>
      </div>
    </>
  );
};

export default HeroSection;

import React from "react";


const UseCases = () =>
{
  return (
    <section className="relative my-16 mt-28">
      <div className="xl:max-w-[70rem] mr-[2rem] ml-[1rem] xl:mr-[20rem] xl:ml-[14rem]">
        <div className="my-4 mb-8">
          <span className="text-[2.6rem] text-left mb-4 font-bold font-share-tech-mono">
            Use Cases
          </span>
        </div>
        {[ { title: 'Investments', description: 'Collective market analysis, transparent strategies, historical pattern study' },
        { title: 'Science', description: 'DAO for scientific research, collective hypothesis verification, open science' },
        { title: 'Education', description: 'NFT certificates, collective learning, educational program evolution' },
        { title: 'Grants', description: 'Transparent fund distribution, collective project evaluation, result tracking' },
        { title: 'Prediction Markets', description: 'Collective forecasts, prediction accuracy study, model evolution' },
        ].map( ( x ) =>
        {
          return (
            <div className="flex flex-row items-center justify-start pb-4 gap-4 hover:border-b-2 hover:border-t-2 pt-2 hover:border-cyan-700 hover:px-4 hover:border-1 hover:scale-105 transition-all duration-300 cursor-pointer">
              <div className="flex items-center justify-start min-w-[8rem] sm:min-w-[12rem] md:min-w-[16rem]">
                <span className="hero-title text-cyan-700 leading-relaxed ">
                {x.title}
              </span>
              </div>

              <div className="flex">
                <span className="hero-desc leading-relaxed">
                  {x.description}
                </span>

              </div>
            </div>
          )
        } )}
      </div>
    </section>
  );
};

export default UseCases;

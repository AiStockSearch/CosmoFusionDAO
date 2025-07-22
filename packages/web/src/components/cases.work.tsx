import React from "react";


const UseCases = () =>
{
  return (
    <section className="w-screen grid grid-cols-[0.4fr_1.1fr_0.4fr_0.1fr_300px_0.1fr]  grid-rows-[1fr] my-16">
      <div className="col-start-2 col-end-3 row-span-1">
        <div className="my-4">
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
            <div className="flex flex-col items-start justify-start">
              <span className="hero-title text-cyan-900 leading-relaxed">
                {x.title}
              </span>
              <span className="hero-desc leading-relaxed">
                {x.description}
              </span>
            </div>
          )
        } )}
      </div>
    </section>
  );
};

export default UseCases;

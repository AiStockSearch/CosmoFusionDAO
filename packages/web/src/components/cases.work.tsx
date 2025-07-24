import React from 'react';

const UseCases = () => {
  return (
    <section className="relative my-16 mt-28">
      <div className="ml-4 mr-8 xl:ml-56 xl:mr-80 xl:max-w-[70rem]">
        <div className="my-4 mb-8">
          <span className="font-share-tech-mono mb-4 text-left text-[2.6rem] font-bold">
            Use Cases
          </span>
        </div>
        {[
          {
            title: 'Investments',
            description:
              'Collective market analysis, transparent strategies, historical pattern study',
          },
          {
            title: 'Science',
            description:
              'DAO for scientific research, collective hypothesis verification, open science',
          },
          {
            title: 'Education',
            description: 'NFT certificates, collective learning, educational program evolution',
          },
          {
            title: 'Grants',
            description:
              'Transparent fund distribution, collective project evaluation, result tracking',
          },
          {
            title: 'Prediction Markets',
            description: 'Collective forecasts, prediction accuracy study, model evolution',
          },
        ].map((x) => {
          return (
            <div
              className="hover:border-1 flex cursor-pointer flex-row items-center justify-start gap-4 pb-4 pt-2
                transition-all duration-300 hover:scale-105 hover:border-y-2 hover:border-cyan-700 hover:px-4"
            >
              <div className="flex min-w-32 items-center justify-start sm:min-w-48 md:min-w-64">
                <span className="hero-title leading-relaxed text-cyan-700 ">{x.title}</span>
              </div>

              <div className="flex">
                <span className="hero-desc leading-relaxed">{x.description}</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default UseCases;

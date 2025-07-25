import React from "react";
import { useLocale } from "../hooks/useLocale";

const UseCases = (): React.JSX.Element => {
  const { t } = useLocale();

  const useCases = [
    {
      title: t( "useCases.categories.investments.title" ),
      description: t( "useCases.categories.investments.description" ),
    },
    {
      title: t( "useCases.categories.science.title" ),
      description: t( "useCases.categories.science.description" ),
    },
    {
      title: t( "useCases.categories.education.title" ),
      description: t( "useCases.categories.education.description" ),
    },
    {
      title: t( "useCases.categories.grants.title" ),
      description: t( "useCases.categories.grants.description" ),
    },
    {
      title: t( "useCases.categories.predictionMarkets.title" ),
      description: t( "useCases.categories.predictionMarkets.description" ),
    },
  ];

  return (
    <>
      {/* Use Cases Section */}
      <section className="relative my-16 mt-28">
        <div className="ml-4 mr-8 xl:ml-56 xl:mr-80 xl:max-w-[70rem]">
          <div className="my-4 mb-8">
            <span className="font-share-tech-mono mb-4 text-left text-[2.6rem] font-bold">
              {t( 'useCases.title' )}
            </span>
          </div>
          {useCases.map( ( x, index ) =>
          {
            return (
              <div
                key={index}
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
        } )}
        </div>
      </section>
    </>
  );
};

export default UseCases;

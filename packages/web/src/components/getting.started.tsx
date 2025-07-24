import React from "react";
import { CardBuilder } from "./comp.CardBuilder";

interface GettingStarterData
{
  title: string;
  description: string;
  arr: string[];
  addonsTitle: string;
}

const UseCases: React.FC<{ gettingStarterData: GettingStarterData }> = ( { gettingStarterData } ) =>
{
  return (
    <section className="xl:max-w-[70rem] ml-4 mr-4 xl:mr-[20rem] xl:ml-[14rem]">
      <div className="mt-32">
        <div className="my-4 flex-col flex">
          <span className="text-[1.9rem] text-left mb-4 font-bold font-share-tech-mono">
            {gettingStarterData.title}
          </span>
          <span className="hero-desc leading-relaxed">
            {gettingStarterData.description}
          </span>
        </div>
      </div>
      <div className="mt-10">
        <CardBuilder />
      </div>
      <div className="mt-10 flex">
        <div className="my-4 flex-col flex">
          <span className="text-[1.4rem] text-left mb-4 font-bold font-share-tech-mono">
            {gettingStarterData.addonsTitle}
          </span>
          {gettingStarterData.arr.map( ( x, index ) =>
          {
            return (
              <div
                key={index}
                className="flex flex-row items-start justify-start"
              >
                <span className="hero-desc leading-relaxed pr-2">*</span>
                <span className="hero-desc leading-relaxed">{x}</span>
              </div>
            );
          } )}
        </div>
      </div>
    </section>
  );
};

export default UseCases;

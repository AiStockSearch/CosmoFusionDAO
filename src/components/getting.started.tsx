import React from 'react';
import { CardBuilder } from './comp.CardBuilder';

export interface GettingStarterData {
  title: string;
  description: string;
  arr: string[];
  addonsTitle: string;
}

const UseCases: React.FC<{ gettingStarterData: GettingStarterData }> = ({ gettingStarterData }) => {
  return (
    <section className="mx-4 xl:ml-56 xl:mr-80 xl:max-w-[70rem]">
      <div className="mt-32">
        <div className="my-4 flex flex-col">
          <span className="font-share-tech-mono mb-4 text-left text-[1.9rem] font-bold">
            {gettingStarterData.title}
          </span>
          <span className="hero-desc leading-relaxed">{gettingStarterData.description}</span>
        </div>
      </div>
      <div className="mt-10">
        <CardBuilder />
      </div>
      <div className="mt-10 flex">
        <div className="my-4 flex flex-col">
          <span className="font-share-tech-mono mb-4 text-left text-[1.4rem] font-bold">
            {gettingStarterData.addonsTitle}
          </span>
          {gettingStarterData.arr.map((x, index) => {
            return (
              <div key={index} className="flex flex-row items-start justify-start">
                <span className="hero-desc pr-2 leading-relaxed">*</span>
                <span className="hero-desc leading-relaxed">{x}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default UseCases;

import React from "react";
import { CardBuilder } from "./comp.CardBuilder";

interface GettingStarterData {
  title: string;
  description: string;
  arr: string[];
}

const UseCases:React.FC<{gettingStarterData:GettingStarterData}> = ({gettingStarterData}) => {
  return (
    <section className="w-screen grid grid-cols-[0.4fr_1.1fr_0.4fr_0.1fr_300px_0.1fr] grid-rows-[1fr_32rem_1fr] my-16">
      <div className="col-start-2 col-end-3 row-span-1">
        <div className="my-4 flex-col flex">
          <span className="text-[2.6rem] text-left mb-4 font-bold font-share-tech-mono">
            {gettingStarterData.title}
          </span>
          <span className="hero-desc leading-relaxed">
            {gettingStarterData.description}
          </span>
        </div>
      </div>
      <div className="col-start-2 col-end-4 row-span-2">
        <CardBuilder />
      </div>
      <div className="col-start-2 col-end-3 row-span-3">
        <div className="my-4 flex-col flex">
          <span className="text-[1.4rem] text-left mb-4 font-bold font-share-tech-mono">
            Addons
          </span>
          {gettingStarterData.arr.map((x, index) => {
            return (
              <div
                key={index}
                className="flex flex-row items-start justify-start"
              >
                <span className="hero-desc leading-relaxed pr-2">*</span>
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

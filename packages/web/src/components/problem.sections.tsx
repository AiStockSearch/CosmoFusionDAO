import React from "react";
import { ProblemAddonSection } from "./comp.ProblemAddonSection";
import { ProblemHelperSection } from "./comp.ProblemHelperSection";
import { ProblemImageSection } from "./comp.ProblemImageSection";
import { ProblemMainSection } from "./comp.ProblemMainSection";

export interface ProblemSectionProps
{
  problemPageEn: {
    title: string;
    intro: string;
    problems: {
      title: string;
      description: string;
    }[];
    quote: string;
    image: string;
    process?: {
      title: string;
      steps: string[];
    };
    arr?: {
      title: string;
      list: string[];
    };
  };
}

const ProblemSection: React.FC<ProblemSectionProps> = ( { problemPageEn } ) =>
{
  return (
    <section className="relative my-32">
      <div className="xl:max-w-[70rem] mr-[2rem] ml-[1rem] xl:mr-[20rem] xl:ml-[14rem]">
        <div className="flex flex-col items-start justify-start">
          <div className="flex flex-col lg:flex-row items-start justify-start  flex-col-reverse">
            <ProblemImageSection problemPageEn={problemPageEn} />
            <ProblemMainSection problemPageEn={problemPageEn} />
          </div>
          <ProblemAddonSection problemPageEn={problemPageEn} />
        </div>
      </div>
      <div className="hidden xl:block xl:absolute xl:bottom-20 xl:right-16">
        <ProblemHelperSection problemPageEn={problemPageEn} />
      </div>
    </section>
  );
};

export default ProblemSection;

import React from "react";
import { ReflectionsAddonSection } from "./comp.ProblemAddonSection";
import { ReflectionsHelperSection } from "./comp.ProblemHelperSection";
import { ReflectionsImageSection } from "./comp.ProblemImageSection";
import { ReflectionsMainSection } from "./comp.ProblemMainSection";

export interface ReflectionsProps
{
  reflectionsPageEn: {
    title: string;
    intro: string;
    biases: {
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

const Reflections: React.FC<ReflectionsProps> = ( { reflectionsPageEn } ) =>
{
  return (
    <>
      <section className="relative my-32">
        <div className="xl:max-w-[70rem] mr-[2rem] ml-[1rem] xl:mr-[20rem] xl:ml-[14rem]">
          <div className="flex flex-col items-start justify-start">
            <div className="flex flex-col lg:flex-row items-start justify-start">
              <ReflectionsMainSection reflectionsPageEn={reflectionsPageEn as any} />
              <ReflectionsImageSection reflectionsPageEn={reflectionsPageEn as any} />
            </div>
            <ReflectionsAddonSection reflectionsPageEn={reflectionsPageEn as any} />
          </div>
        </div>
        <div className="hidden xl:block xl:absolute xl:bottom-20 xl:right-16">
          <ReflectionsHelperSection reflectionsPageEn={reflectionsPageEn as any} />
        </div>
      </section>

    </>
  );
};

export default Reflections;

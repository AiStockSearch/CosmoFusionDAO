import React from "react";
import { ReflectionsAddonSection } from "./comp.ProblemAddonSection";
import { ReflectionsHelperSection } from "./comp.ProblemHelperSection";
import { ReflectionsImageSection } from "./comp.ProblemImageSection";
import { ReflectionsMainSection } from "./comp.ProblemMainSection";
import { useLocale } from '../hooks/useLocale';

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

export const LocalReflectionsImageSection: React.FC<ReflectionsProps> = ( { reflectionsPageEn } ) =>
{
  const { t } = useLocale();
  return (
    <div className="relative h-[24rem] -ml-4 -mr-9 xs:-ml-16 xs:-mr-16 md:ml-0 md:mr-0 lg:h-[32rem] lg:min-w-[22rem] md:rounded-r-[34px] md:rounded-[34px] overflow-hidden xl:-mr-52">
      <img
        src={reflectionsPageEn.image}
        alt={t( 'reflection.alt' )}
        className="flex w-screen h-[24rem] lg:h-[32rem] object-cover shadow-sm" />
    </div>
  );
};

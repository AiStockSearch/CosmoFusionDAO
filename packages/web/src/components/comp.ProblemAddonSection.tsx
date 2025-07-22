import type React from "react";
import type { ProblemSectionProps } from "./problem.sections";
import type { ReflectionsProps } from "./reflection.sections";

export const ProblemAddonSection: React.FC<ProblemSectionProps> = ({
  problemPageEn,
}) => {
  return (
    <div className="relative flex flex-col items-start justify-start lg:mr-[32px] xl:mr-[8rem]">
      <div className="my-5 lg:mt-8">
        <span className="problem-quote">
          {problemPageEn.quote}
        </span>
      </div>
      {problemPageEn.problems.map((x, idx) => {
        return (
          <div className="flex flex-col items-start justify-start" key={idx}>
            <span className="hero-title text-[1.2rem]  text-gray-900)">
              {x.title}
            </span>
            <span className="hero-desc text-[0.9rem] leading-relaxed  text-gray-600)">
              {x.description}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export const ReflectionsAddonSection: React.FC<ReflectionsProps> = ( {
  reflectionsPageEn,
} ) =>
{
  return (
    <div className="relative flex flex-col items-start justify-start lg:mr-[32px] xl:mr-[8rem]">
      <div className="my-5 lg:mt-8">
        <span className="problem-quote">
          {reflectionsPageEn.quote}
        </span>
      </div>
      {reflectionsPageEn?.biases?.map( ( x, idx ) =>
      {
        return (
          <div className="flex flex-col items-start justify-start" key={idx}>
            <span className="hero-title text-[1.2rem]  text-gray-900)">
              {x.title}
            </span>
            <span className="hero-desc text-[0.9rem] leading-relaxed  text-gray-600)">
              {x.description}
            </span>
          </div>
        );
      } )}
    </div>
  );
};
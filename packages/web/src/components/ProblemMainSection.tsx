import type React from "react";
import type { ProblemSectionProps } from "./problem.sections";

export const ProblemMainSection: React.FC<ProblemSectionProps> = ( {
  problemPageEn,
} ) =>
{
  return (
    <div className="relative mb-4 lg:ml-[1rem] lg:max-w-[52rem]">
      <div className="flex flex-col items-start">
        <span
          className="problem-title"
        >
          {problemPageEn.title}
        </span>
        <span
          className="problem-desc"
        >
          {problemPageEn.intro}
        </span>

        {problemPageEn.process && (
          <div
            className="problem-process-div mt-8 mb-8"
          >
            <span
              className="problem-process-title mb-4"
            >
              {problemPageEn.process.title}
            </span>
            <ul className="list-disc list-inside">
              {problemPageEn.process.steps.map( ( step, idx ) => (
                <li
                  key={idx}
                  className="problem-process-item"
                >
                  {step}
                </li>
              ) )}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

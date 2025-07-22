import type React from "react";
import type { ProblemSectionProps } from "./problem.sections";

export const ProblemImageSection: React.FC<ProblemSectionProps> = ( { problemPageEn } ) =>
{
  return (
    <div className="relative h-[24rem] -ml-4 -mr-9 xs:-ml-16 xs:-mr-16 md:ml-0 md:mr-0 lg:h-[32rem] lg:min-w-[22rem] md:rounded-r-[34px] md:rounded-[34px] overflow-hidden xl:-ml-52">
      <img
        src={problemPageEn.image}
        alt="astronaut alone"
        className="flex w-screen h-[24rem] lg:h-[32rem] object-cover shadow-sm" />
    </div>
  );
};

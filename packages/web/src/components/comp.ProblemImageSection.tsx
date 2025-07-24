import React from "react";
import type { ProblemSectionProps as OrigProblemSectionProps } from "./problem.sections";
import type { ReflectionsProps } from "./reflection.sections";
import { useLocale } from '../hooks/useLocale';

// Поддержка image: string | {jpg: string, webp?: string}
type ImgType = string | { jpg: string; webp?: string };
interface ProblemSectionPropsFixed extends Omit<OrigProblemSectionProps, 'problemPageEn'>
{
  problemPageEn: Omit<OrigProblemSectionProps[ 'problemPageEn' ], 'image'> & { image: ImgType };
}

export const ProblemImageSection: React.FC<ProblemSectionPropsFixed> = ( { problemPageEn } ) =>
{
  const { t } = useLocale();
  const img: ImgType = problemPageEn.image;
  const jpg = typeof img === 'string' ? img : img?.jpg;
  const webp = typeof img === 'object' && img?.webp;
  console.log( 'ProblemImageSection jpg:', jpg, 'webp:', webp );
  return (
    <div className="relative h-[24rem] -ml-4 -mr-9 xs:-ml-16 xs:-mr-16 md:ml-0 md:mr-0 lg:h-[32rem] lg:min-w-[22rem] md:rounded-r-[34px] md:rounded-[34px] overflow-hidden xl:-ml-52">
      {jpg && (
        <img
          src={jpg}
          alt={t( 'problem.alt' )}
          className="flex w-screen h-[24rem] lg:h-[32rem] object-cover shadow-sm"
          loading="lazy"
        />
      )}
    </div>
  );
};

export interface ReflectionsImageSectionProps
{
  reflectionsPageEn: {
    image?: string | { jpg: string; webp?: string };
  };
}

export const ReflectionsImageSection: React.FC<ReflectionsImageSectionProps> = ( { reflectionsPageEn } ) =>
{
  const { t } = useLocale();
  const img: ImgType | undefined = reflectionsPageEn.image;
  const jpg = typeof img === 'string' ? img : img?.jpg;
  const webp = typeof img === 'object' && img?.webp;
  console.log( 'ReflectionsImageSection jpg:', jpg, 'webp:', webp );
  return (
    <div className="relative h-[24rem] -ml-4 -mr-9 xs:-ml-16 xs:-mr-16 md:ml-0 md:mr-0 lg:h-[32rem] lg:min-w-[22rem] md:rounded-r-[34px] md:rounded-[34px] overflow-hidden xl:-mr-52">
      {jpg && (
        <img
          src={jpg}
          alt={t( 'reflection.alt' )}
          className="flex w-screen h-[24rem] lg:h-[32rem] object-cover shadow-sm"
          loading="lazy"
        />
      )}
    </div>
  );
};

export const SolutionImageSection: React.FC<ProblemSectionPropsFixed> = ( { problemPageEn } ) =>
{
  const { t } = useLocale();
  const img: ImgType = problemPageEn.image;
  const jpg = typeof img === 'string' ? img : img?.jpg;
  const webp = typeof img === 'object' && img?.webp;
  return (
    <div className="relative h-[24rem] -ml-4 -mr-9 xs:-ml-16 xs:-mr-16 md:ml-0 md:mr-0 lg:h-[32rem] lg:min-w-[22rem] md:rounded-r-[34px] md:rounded-[34px] overflow-hidden xl:-ml-52">
      {jpg && (
        <img
          src={jpg}
          alt={t( 'solution.alt' )}
          className="flex w-screen h-[24rem] lg:h-[32rem] object-cover shadow-sm"
          loading="lazy"
        />
      )}
    </div>
  );
};

export const EvolutionImageSection: React.FC<ProblemSectionPropsFixed> = ( { problemPageEn } ) =>
{
  const { t } = useLocale();
  const img: ImgType = problemPageEn.image;
  const jpg = typeof img === 'string' ? img : img?.jpg;
  const webp = typeof img === 'object' && img?.webp;
  return (
    <div className="relative h-[24rem] -ml-4 -mr-9 xs:-ml-16 xs:-mr-16 md:ml-0 md:mr-0 lg:h-[32rem] lg:min-w-[22rem] md:rounded-r-[34px] md:rounded-[34px] overflow-hidden xl:-ml-52">
      {jpg && (
        <img
          src={jpg}
          alt={t( 'evolution.alt' )}
          className="flex w-screen h-[24rem] lg:h-[32rem] object-cover shadow-sm"
          loading="lazy"
        />
      )}
    </div>
  );
};

export const GovernanceImageSection: React.FC<ProblemSectionPropsFixed> = ( { problemPageEn } ) =>
{
  const { t } = useLocale();
  const img: ImgType = problemPageEn.image;
  const jpg = typeof img === 'string' ? img : img?.jpg;
  const webp = typeof img === 'object' && img?.webp;
  return (
    <div className="relative h-[24rem] -ml-4 -mr-9 xs:-ml-16 xs:-mr-16 md:ml-0 md:mr-0 lg:h-[32rem] lg:min-w-[22rem] md:rounded-r-[34px] md:rounded-[34px] overflow-hidden xl:-ml-52">
      {jpg && (
        <img
          src={jpg}
          alt={t( 'governance.alt' )}
          className="flex w-screen h-[24rem] lg:h-[32rem] object-cover shadow-sm"
          loading="lazy"
        />
      )}
    </div>
  );
};

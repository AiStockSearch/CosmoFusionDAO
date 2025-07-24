import React from "react";
import type { ProblemSectionProps } from "./problem.sections";
import type { ReflectionsProps } from "./reflection.sections";
import { useLocale } from '../hooks/useLocale';

export const ProblemImageSection: React.FC<ProblemSectionProps> = ( { problemPageEn } ) =>
{
  const { t } = useLocale();
  return (
    <div className="relative h-[24rem] -ml-4 -mr-9 xs:-ml-16 xs:-mr-16 md:ml-0 md:mr-0 lg:h-[32rem] lg:min-w-[22rem] md:rounded-r-[34px] md:rounded-[34px] overflow-hidden xl:-ml-52">
      <picture>
        <source srcSet={problemPageEn.image.replace( /\.jpg$/, '.webp' ).replace( /\.jpeg$/, '.webp' )} type="image/webp" />
        <source srcSet={problemPageEn.image} type="image/jpeg" />
        <img
          src={problemPageEn.image}
          alt={t( 'problem.alt' )}
          className="flex w-screen h-[24rem] lg:h-[32rem] object-cover shadow-sm"
          loading="lazy" />
      </picture>
    </div>
  );
};

export const ReflectionsImageSection: React.FC<ReflectionsProps> = ( { reflectionsPageEn } ) =>
{
  return (
    <div className="relative h-[24rem] -ml-4 -mr-9 xs:-ml-16 xs:-mr-16 md:ml-0 md:mr-0 lg:h-[32rem] lg:min-w-[22rem] md:rounded-r-[34px] md:rounded-[34px] overflow-hidden xl:-mr-52">
      <picture>
        <source srcSet={reflectionsPageEn.image.replace( /\.jpg$/, '.webp' ).replace( /\.jpeg$/, '.webp' )} type="image/webp" />
        <source srcSet={reflectionsPageEn.image} type="image/jpeg" />
        <img
          src={reflectionsPageEn.image}
          alt="astronaut alone"
          className="flex w-screen h-[24rem] lg:h-[32rem] object-cover shadow-sm"
          loading="lazy" />
      </picture>
    </div>
  );
};

export const SolutionImageSection: React.FC<ProblemSectionProps> = ( { problemPageEn } ) =>
{
  const { t } = useLocale();
  return (
    <div className="relative h-[24rem] -ml-4 -mr-9 xs:-ml-16 xs:-mr-16 md:ml-0 md:mr-0 lg:h-[32rem] lg:min-w-[22rem] md:rounded-r-[34px] md:rounded-[34px] overflow-hidden xl:-ml-52">
      <picture>
        <source srcSet={problemPageEn.image.replace( /\.jpg$/, '.webp' ).replace( /\.jpeg$/, '.webp' )} type="image/webp" />
        <source srcSet={problemPageEn.image} type="image/jpeg" />
        <img
          src={problemPageEn.image}
          alt={t( 'solution.alt' )}
          className="flex w-screen h-[24rem] lg:h-[32rem] object-cover shadow-sm"
          loading="lazy" />
      </picture>
    </div>
  );
};

export const EvolutionImageSection: React.FC<ProblemSectionProps> = ( { problemPageEn } ) =>
{
  const { t } = useLocale();
  return (
    <div className="relative h-[24rem] -ml-4 -mr-9 xs:-ml-16 xs:-mr-16 md:ml-0 md:mr-0 lg:h-[32rem] lg:min-w-[22rem] md:rounded-r-[34px] md:rounded-[34px] overflow-hidden xl:-ml-52">
      <picture>
        <source srcSet={problemPageEn.image.replace( /\.jpg$/, '.webp' ).replace( /\.jpeg$/, '.webp' )} type="image/webp" />
        <source srcSet={problemPageEn.image} type="image/jpeg" />
        <img
          src={problemPageEn.image}
          alt={t( 'evolution.alt' )}
          className="flex w-screen h-[24rem] lg:h-[32rem] object-cover shadow-sm"
          loading="lazy" />
      </picture>
    </div>
  );
};

export const GovernanceImageSection: React.FC<ProblemSectionProps> = ( { problemPageEn } ) =>
{
  const { t } = useLocale();
  return (
    <div className="relative h-[24rem] -ml-4 -mr-9 xs:-ml-16 xs:-mr-16 md:ml-0 md:mr-0 lg:h-[32rem] lg:min-w-[22rem] md:rounded-r-[34px] md:rounded-[34px] overflow-hidden xl:-ml-52">
      <picture>
        <source srcSet={problemPageEn.image.replace( /\.jpg$/, '.webp' ).replace( /\.jpeg$/, '.webp' )} type="image/webp" />
        <source srcSet={problemPageEn.image} type="image/jpeg" />
        <img
          src={problemPageEn.image}
          alt={t( 'governance.alt' )}
          className="flex w-screen h-[24rem] lg:h-[32rem] object-cover shadow-sm"
          loading="lazy" />
      </picture>
    </div>
  );
};

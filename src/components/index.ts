// Существующие компоненты
export { default as HeroSection } from './hero.section';
export { default as ProblemSection } from './problem.sections';
export { default as ReflectionSection } from './reflection.sections';
export { default as GettingStarted } from './getting.started';
export { default as UseCases } from './cases.work';
export { default as PrivacyPolicy } from './privacy.policy';
export { ImmutableJournalSection } from './ImmutableJournalSection';

// Footer компоненты
export { FooterColumnLinks } from './footer.columnLinks';
export { HeroBlock } from './footer.heroBlock';
export { SocialButton } from './footer.socialButton';
export { SubscribeColumn } from './footer.subscribeColumn';

// Проблемные секции
export { ProblemImageSection } from './comp.ProblemImageSection';
export { ProblemMainSection } from './comp.ProblemMainSection';
export { ProblemAddonSection } from './comp.ProblemAddonSection';
export { ProblemHelperSection } from './comp.ProblemHelperSection';

// Карточки
export { CardBuilder } from './comp.CardBuilder';

import React from 'react';

// Lazy load heavy components
export const LazyCardBuilder = React.lazy( () => import( './comp.CardBuilder' ).then( module => ( { default: module.CardBuilder } ) ) );
export const LazyProblemImageSection = React.lazy( () => import( './comp.ProblemImageSection' ).then( module => ( { default: module.ProblemImageSection } ) ) );
export const LazyReflectionSections = React.lazy( () => import( './reflection.sections' ).then( module => ( { default: module.default } ) ) );

// Контекст
export { SectionAnchorProvider, useSectionAnchor } from './SectionAnchorContext';

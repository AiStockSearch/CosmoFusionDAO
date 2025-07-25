// Типы для секций лендинга CosmoFusion DAO

export interface SectionContent {
  title: { ru: string; en: string };
  hero: { ru: string; en: string };
  mainText: { ru: string; en: string };
  bulletPoints: { ru: string[]; en: string[] };
  visualSuggestion: { ru: string; en: string };
}

export type LandingSections = Record<string, SectionContent>;

export interface LandingContent {
  landingSections: LandingSections;
}

// Основной хук
export { useLinks } from './useLinks';
export { useFooterContent } from './useFooterContent';
export { useFooterSectionContent } from './useFooterSectionContent';

// Типы
export type {
  LinksConfig,
  LinkKey,
  UseLinksReturn,
  LinkItem,
  FooterLinks,
} from './types';

// Утилиты
export {
  getLinksConfig,
  validateLinksConfig,
} from './linksConfig'; 
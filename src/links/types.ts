export interface LinksConfig {
  // Социальные сети
  telegram: string;
  x: string;
  discord: string;
  galxe: string;
  
  // Основные ссылки
  docs: string;
  github: string;
  workEmail: string;
  privacyPolicy: string;
  
  // DAO и работа
  workWithUs: string;
  contactUs: string;
  getStarted: string;
  partners: string;
  aboutUs: string;
  mediaAndEvents: string;
  
  // Покупки и NFT
  opensea: string;
  nft: string;
  bridge: string;
  tangemOrder: string;
  
  // Дополнительные ссылки
  gevulotLabs: string;
  explorer: string;
  blog: string;
  nodeRental: string;
  whitepaper: string;
  disclaimer: string;
  
  // Внутренние ссылки
  backToTop: string;
  
  // Дополнительные
  substack: string;
  mintscan: string;
}

export type LinkKey = keyof LinksConfig;

export interface UseLinksReturn {
  links: LinksConfig;
  getLink: (key: LinkKey) => string;
  isConfigured: boolean;
}

export interface LinkItem {
  text: string;
  link: string;
}

export interface FooterLinks {
  links: LinkItem[];
  linksTitle: string;
  purchase: LinkItem[];
  purchaseTitle: string;
  more: LinkItem[];
  moreTitle: string;
  socialLinks: LinkItem[];
} 
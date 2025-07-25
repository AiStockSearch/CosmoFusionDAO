import { LinksConfig } from './types';

export const getLinksConfig = (): LinksConfig => {
  return {
    // Социальные сети
    telegram: process.env.REACT_APP_TELEGRAM_LINK || "https://t.me/cosmofusiondao",
    x: process.env.REACT_APP_X_LINK || "https://x.com/cosmofusiondao",
    discord: process.env.REACT_APP_DISCORD_LINK || "https://discord.gg/cosmofusiondao",
    galxe: process.env.REACT_APP_GALXE_LINK || "https://galxe.com/cosmofusiondao",
    
    // Основные ссылки
    docs: process.env.REACT_APP_DOCS_LINK || "https://substack.com/@cosmofusiondao",
    github: process.env.REACT_APP_GITHUB_LINK || "https://github.com/AiStockSearch/CosmosAI.git",
    workEmail: process.env.REACT_APP_WORK_EMAIL || "mustreetsworkspace@gmail.com",
    privacyPolicy: process.env.REACT_APP_PRIVACY_POLICY_LINK || "",
    
    // DAO и работа
    workWithUs: process.env.REACT_APP_WORK_WITH_US_LINK || process.env.REACT_APP_TELEGRAM_LINK || "https://t.me/cosmofusiondao",
    contactUs: process.env.REACT_APP_CONTACT_US_LINK || process.env.REACT_APP_TELEGRAM_LINK || "https://t.me/cosmofusiondao",
    getStarted: "#getting-started",
    partners: process.env.REACT_APP_PARTNERS_LINK || process.env.REACT_APP_X_LINK || "https://x.com/cosmofusiondao",
    aboutUs: process.env.REACT_APP_ABOUT_US_LINK || process.env.REACT_APP_DISCORD_LINK || "https://discord.gg/cosmofusiondao",
    mediaAndEvents: process.env.REACT_APP_MEDIA_EVENTS_LINK || "https://galxe.com/zkcloud",
    
    // Покупки и NFT
    opensea: process.env.REACT_APP_OPENSEA_LINK || "https://opensea.io/collection/cosmos-nft",
    nft: process.env.REACT_APP_NFT_LINK || "https://stargaze.zone/collections/cosmos-nft",
    bridge: process.env.REACT_APP_BRIDGE_LINK || "https://app.squidrouter.com/bridge?from=ETH&to=ATOM",
    tangemOrder: process.env.REACT_APP_TANGEM_ORDER_LINK || "https://tangem.com/en/order/",
    
    // Дополнительные ссылки
    gevulotLabs: process.env.REACT_APP_GEVULOT_LABS_LINK || process.env.REACT_APP_TELEGRAM_LINK || "https://t.me/cosmofusiondao",
    explorer: process.env.REACT_APP_EXPLORER_LINK || process.env.REACT_APP_MINT_SCAN_LINK || "https://www.mintscan.io/cosmos",
    blog: "#dialogbook",
    nodeRental: process.env.REACT_APP_NODE_RENTAL_LINK || process.env.REACT_APP_GALXE_LINK || "https://galxe.com/cosmofusiondao",
    whitepaper: process.env.REACT_APP_WHITEPAPER_LINK || "https://whitepaper.cosmos.network/",
    disclaimer: process.env.REACT_APP_DISCLAIMER_LINK || process.env.REACT_APP_GALXE_LINK || "https://galxe.com/cosmofusiondao",
    
    // Внутренние ссылки
    backToTop: "#hero",
    
    // Дополнительные
    substack: process.env.REACT_APP_SUBSTACK_LINK || "https://substack.com/@cosmofusiondao",
    mintscan: process.env.REACT_APP_MINT_SCAN_LINK || "https://www.mintscan.io/cosmos",
  };
};

export const validateLinksConfig = (config: LinksConfig): boolean => {
  // Проверяем, что основные ссылки настроены
  const requiredLinks = ['telegram', 'x', 'discord', 'galxe', 'docs', 'github'];
  return requiredLinks.every(key => config[key as keyof LinksConfig] && config[key as keyof LinksConfig] !== '');
}; 
const appName = process.env.REACT_APP_NAME || "CosmoFusionDAO";
const telegram = process.env.REACT_APP_TELEGRAM_LINK || "https://t.me/cosmofusiondao";
const xcom = process.env.REACT_APP_X_LINK || "https://x.com/cosmofusiondao";
const discord = process.env.REACT_APP_DISCORD_LINK || "https://discord.gg/cosmofusiondao";
const galxe = process.env.REACT_APP_GALXE_LINK || "https://galxe.com/cosmofusiondao";
const docs = process.env.REACT_APP_DOCS_LINK || "https://substack.com/@cosmofusiondao";
const privacyPolicy = process.env.REACT_APP_PRIVACY_POLICY_LINK || "";
const github = process.env.REACT_APP_GITHUB_LINK || "https://github.com/AiStockSearch/CosmosAI.git";
const mintscan = process.env.REACT_APP_MINT_SCAN_LINK || "https://www.mintscan.io/cosmos";
const opensea = process.env.REACT_APP_OPENSEA_LINK || "https://opensea.io/collection/cosmos-nft";
const nft = process.env.REACT_APP_NFT_LINK || "https://stargaze.zone/collections/cosmos-nft";
const bridge = process.env.REACT_APP_BRIDGE_LINK || "https://app.squidrouter.com/bridge?from=ETH&to=ATOM";
const tangemOrder = process.env.REACT_APP_TANGEM_ORDER_LINK || "https://tangem.com/en/order/";
const workEmail = process.env.REACT_APP_WORK_EMAIL || "mustreetsworkspace@gmail.com";
const whitepaper = process.env.REACT_APP_WHITEPAPER_LINK || "https://whitepaper.cosmos.network/";
const substack = process.env.REACT_APP_SUBSTACK_LINK || "https://substack.com/@cosmofusiondao";
const links = {
  substack: substack,
  telegram: telegram,
  x: xcom,
  discord: discord,
  galxe: docs,
  docs: docs,
  privacyPolicy: privacyPolicy,
  workWithUs: telegram,
  contactUs: telegram,
  backToTop: "#hero",
  getStarted: "#getting-started",
  partners: xcom,
  aboutUs: discord,
  mediaAndEvents: "https://galxe.com/zkcloud",
  gevulotLabs: telegram,
  explorer: mintscan,
  blog: "#dialogbook",
  github: github,
  nodeRental: galxe,
  whitepaper: whitepaper,
  disclaimer: galxe,
  opensea: opensea,
  nft: nft,
  bridge: bridge,
  tangemOrder: tangemOrder,
  workEmail: workEmail,
};

export default links;

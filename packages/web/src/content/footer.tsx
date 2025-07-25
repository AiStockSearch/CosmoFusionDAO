import yaml from 'yaml';
import links from './links.json';

const exploreLinks = [
  { text: 'Get Started', link: links.getStarted },
  { text: 'Partners', link: links.partners },
  { text: 'About us', link: links.aboutUs },
  { text: 'Media and Events', link: links.mediaAndEvents },
  { text: 'Docs', link: links.docs },
];

const moreLinks = [
  { text: 'CosmoFusion Labs', link: links.gevulotLabs },
  { text: 'Explorer', link: links.explorer },
  { text: 'Blog', link: links.blog },
  { text: 'Github', link: links.github },
  { text: 'Node Rental & Node Operator Token Grant Terms', link: links.nodeRental },
  { text: 'Whitepaper', link: links.whitepaper },
  { text: 'Disclaimer & updates', link: links.disclaimer },
];

const purchaseLinks = [
  { text: 'OpenSea', link: links.opensea },
  { text: 'NFT (Stargaze)', link: links.nft },
  { text: 'Bridge ETH↔ATOM', link: links.bridge },
  { text: 'Tangem', link: links.tangemOrder },
];
const purchaseTitle = 'Purchase & Get';

const exploreLinksRu = [
  { text: 'Начать', link: links.getStarted },
  { text: 'Партнёры', link: links.partners },
  { text: 'О нас', link: links.aboutUs },
  { text: 'Медиа и события', link: links.mediaAndEvents },
  { text: 'Документация', link: links.docs },
];

const moreLinksRu = [
  { text: 'CosmoFusion Labs', link: links.gevulotLabs },
  { text: 'Эксплорер', link: links.explorer },
  { text: 'Dialogbook', link: links.blog },
  { text: 'Github', link: links.github },
  { text: 'Node Rental & Node Operator Token Grant Terms', link: links.nodeRental },
  { text: 'Whitepaper', link: links.whitepaper },
  { text: 'Disclaimer & updates', link: links.disclaimer },
];

const purchaseLinksRu = [
  { text: 'OpenSea', link: links.opensea },
  { text: 'NFT (Stargaze)', link: links.nft },
  { text: 'Bridge ETH↔ATOM', link: links.bridge },
  { text: 'Tangem', link: links.tangemOrder },
];
const purchaseTitleRu = 'Покупка и получение';

const footerContent = `
title: CosmoFusion DAO
description: CosmoFusion DAO - is a next-generation decentralized community and platform for collective intelligence, open innovation, and transparent governance. Here, every member can propose ideas, discuss them with like-minded people, and together turn concepts into real solutions that benefit the whole ecosystem. We unite people from diverse backgrounds—engineers, visionaries, creators, critics, ambassadors, and explorers—who believe that truth is not a static point, but a continuous journey. In CosmoFusion DAO, ideas evolve through open dialogue, constructive criticism, and collective decision-making. Our mission is to preserve knowledge, share best practices, and build a resilient, adaptive organization where every voice matters. All key processes—proposals, discussions, voting, and results—are recorded on-chain, ensuring full transparency and trust. By joining CosmoFusion DAO, you become part of a global movement to shape the future of decentralized collaboration, support breakthrough projects, and create a space where innovation, fairness, and collective wisdom drive progress. Together, we are building an open platform for honest governance, sustainable growth, and the evolution of ideas.
buttonText: Work with us
buttonLink: https://t.me/cosmofusiondao
buttonText2: Contact us
buttonLink2: https://t.me/cosmofusiondao
linksTitle: Explore
moreTitle: More
socialLinks:
  - text: Telegram
    link: https://t.me/cosmofusiondao
  - text: X
    link: https://x.com/cosmofusiondao
  - text: Discord
    link: https://discord.gg/cosmofusion
  - text: Galxe
    link: https://galxe.com/cosmofusion
subscribeText: Subscribe to our newsletter
subscribePlaceholder: Enter your email
subscribeButton: →
subscribePrivacyPolicy: We care about your data. Read our privacy policy.
subscribePrivacyPolicyLink: https://galxe.com/cosmofusion
privacyPolicy: Privacy Policy
`;

const parsed = yaml.parse(footerContent);

const lang = typeof window !== 'undefined' ? localStorage.getItem('landing_lang') || 'en' : 'en';

if (lang === 'ru') {
  parsed.links = exploreLinksRu;
  parsed.purchase = purchaseLinksRu;
  parsed.purchaseTitle = purchaseTitleRu;
  parsed.more = moreLinksRu;
} else {
  parsed.links = exploreLinks;
  parsed.purchase = purchaseLinks;
  parsed.purchaseTitle = purchaseTitle;
  parsed.more = moreLinks;
}

export default parsed;

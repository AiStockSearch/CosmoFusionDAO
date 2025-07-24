import yaml from "yaml";
import links from './links.json';

const exploreLinks = [
  { text: 'Get Started', link: links.getStarted },
  { text: 'Partners', link: links.partners },
  { text: 'About us', link: links.aboutUs },
  { text: 'Media and Events', link: links.mediaAndEvents },
  { text: 'Docs', link: links.docs }
];

const moreLinks = [
  { text: 'CosmoFusion Labs', link: links.gevulotLabs },
  { text: 'Explorer', link: links.explorer },
  { text: 'Blog', link: links.blog },
  { text: 'Github', link: links.github },
  { text: 'Node Rental & Node Operator Token Grant Terms', link: links.nodeRental },
  { text: 'Whitepaper', link: links.whitepaper },
  { text: 'Disclaimer & updates', link: links.disclaimer }
];

const purchaseLinks = [
  { text: 'OpenSea', link: links.opensea },
  { text: 'NFT (Stargaze)', link: links.nft },
  { text: 'Bridge ETH↔ATOM', link: links.bridge },
  { text: 'Tangem', link: links.tangemOrder }
];
const purchaseTitle = 'Purchase & Get';

const exploreLinksRu = [
  { text: 'Начать', link: links.getStarted },
  { text: 'Партнёры', link: links.partners },
  { text: 'О нас', link: links.aboutUs },
  { text: 'Медиа и события', link: links.mediaAndEvents },
  { text: 'Документация', link: links.docs }
];

const moreLinksRu = [
  { text: 'CosmoFusion Labs', link: links.gevulotLabs },
  { text: 'Эксплорер', link: links.explorer },
  { text: 'Dialogbook', link: links.blog },
  { text: 'Github', link: links.github },
  { text: 'Node Rental & Node Operator Token Grant Terms', link: links.nodeRental },
  { text: 'Whitepaper', link: links.whitepaper },
  { text: 'Disclaimer & updates', link: links.disclaimer }
];

const purchaseLinksRu = [
  { text: 'OpenSea', link: links.opensea },
  { text: 'NFT (Stargaze)', link: links.nft },
  { text: 'Bridge ETH↔ATOM', link: links.bridge },
  { text: 'Tangem', link: links.tangemOrder }
];
const purchaseTitleRu = 'Покупка и получение';

const footerContent = `
title: CosmoFusion DAO
description: CosmoFusion DAO — это сообщество, где каждый может предложить идею, обсудить её с единомышленниками и вместе превратить замыслы в реальные решения. Мы объединяем опыт, сохраняем лучшие практики и строим открытую платформу для честного и прозрачного управления.
buttonText: Work with us
buttonLink: https://t.me/zkcloud_io
buttonText2: Contact us
buttonLink2: https://t.me/zkcloud_io
linksTitle: Explore
moreTitle: More
socialLinks:
  - text: Telegram
    link: https://t.me/zkcloud_io
  - text: X
    link: https://x.com/zkcloud_io
  - text: Discord
    link: https://discord.gg/zkcloud
  - text: Galxe
    link: https://galxe.com/zkcloud
subscribeText: Subscribe to our newsletter
subscribePlaceholder: Enter your email
subscribeButton: →
subscribePrivacyPolicy: We care about your data. Read our privacy policy.
subscribePrivacyPolicyLink: https://galxe.com/zkcloud
copyright: ©2025 ZkCloud. All rights reserved.
privacyPolicy: Privacy Policy
backToTop: Back to the top
backToTopLink: https://galxe.com/zkcloud
backToTopLinkText: ↑
`

const parsed = yaml.parse( footerContent );

const lang = typeof window !== 'undefined' ? (localStorage.getItem('landing_lang') || 'en') : 'en';

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
import links from './links.json';

export const footerRu = {
  title: 'CosmoFusion DAO',
  description: `
CosmoFusion DAO — это децентрализованное сообщество и платформа нового поколения для коллективного интеллекта, открытых инноваций и прозрачного управления. Здесь каждый участник может предложить идею, обсудить её с единомышленниками и вместе превратить замыслы в реальные решения, полезные для всей экосистемы.

Мы объединяем людей с разным опытом — инженеров, визионеров, создателей, критиков, амбассадоров и исследователей — которые верят, что истина не статична, а является непрерывным движением. В CosmoFusion DAO идеи эволюционируют через открытый диалог, конструктивную критику и коллективное принятие решений.

Наша миссия — сохранять знания, делиться лучшими практиками и строить устойчивую, адаптивную организацию, где важен каждый голос. Все ключевые процессы — предложения, обсуждения, голосования и результаты — фиксируются в блокчейне, обеспечивая полную прозрачность и доверие.

Присоединившись к CosmoFusion DAO, вы становитесь частью глобального движения, формирующего будущее децентрализованного сотрудничества, поддерживаете прорывные проекты и создаёте пространство, где инновации, справедливость и коллективная мудрость двигают прогресс. Вместе мы строим открытую платформу для честного управления, устойчивого роста и эволюции идей.
`,
  buttonText: 'Работать с нами',
  buttonLink: links.workWithUs,
  buttonText2: 'Связаться',
  buttonLink2: links.contactUs,
  links: [
    { text: 'Get Started', link: links.getStarted },
    { text: 'Partners', link: links.partners },
    { text: 'About us', link: links.aboutUs },
    { text: 'Media and Events', link: links.mediaAndEvents },
    { text: 'Docs', link: links.docs },
  ],
  linksTitle: 'Explore',
  purchase: [
    { text: 'OpenSea', link: links.opensea },
    { text: 'NFT (Stargaze)', link: links.nft },
    { text: 'Bridge ETH↔ATOM', link: links.bridge },
    { text: 'Tangem', link: links.tangemOrder },
  ],
  purchaseTitle: 'Покупка и награды',
  more: [
    { text: 'CosmoFusion Labs', link: links.gevulotLabs },
    { text: 'Explorer', link: links.explorer },
    { text: 'Blog', link: links.blog },
    { text: 'Github', link: links.github },
    { text: 'Node Rental & Node Operator Token Grant Terms', link: links.nodeRental },
    { text: 'Whitepaper', link: links.whitepaper },
    { text: 'Disclaimer & updates', link: links.disclaimer },
  ],
  moreTitle: 'More',
  socialLinks: [
    { text: 'Telegram', link: links.telegram },
    { text: 'X', link: links.x },
    { text: 'Discord', link: links.discord },
    { text: 'Galxe', link: links.galxe },
  ],
  subscribeText: 'Подпишитесь на новости',
  subscribePlaceholder: 'Введите ваш email',
  subscribeButton: '→',
  subscribePrivacyPolicy: 'Мы заботимся о ваших данных. Подробнее в политике конфиденциальности.',
  subscribePrivacyPolicyLink: links.privacyPolicy,
  privacyPolicy: 'Политика конфиденциальности',
};

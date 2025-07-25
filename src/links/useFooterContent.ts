import { useMemo } from 'react';
import { FooterLinks } from './types';
import { useLinks } from './useLinks';
import { useLocale } from '../hooks/useLocale';

export const useFooterContent = (): FooterLinks => {
  const { links } = useLinks();
  const { footer } = useLocale();

  const footerContent = useMemo<FooterLinks>(() => {
    return {
      links: [
        { text: footer.links[ 0 ].text, link: links.getStarted },
        { text: footer.links[ 1 ].text, link: links.partners },
        { text: footer.links[ 2 ].text, link: links.aboutUs },
        { text: footer.links[ 3 ].text, link: links.mediaAndEvents },
        { text: footer.links[ 4 ].text, link: links.docs },
        { text: 'Email', link: `mailto:${links.workEmail}` },
        { text: 'Google Hangout', link: links.workEmail },
      ],
      linksTitle: footer.linksTitle,
      purchase: [
        { text: footer.purchase[ 0 ].text, link: links.opensea },
        { text: footer.purchase[ 1 ].text, link: links.nft },
        { text: footer.purchase[ 2 ].text, link: links.bridge },
        { text: footer.purchase[ 3 ].text, link: links.tangemOrder },
      ],
      purchaseTitle: footer.purchaseTitle,
      more: [
        { text: footer.more[ 0 ].text, link: links.gevulotLabs },
        { text: footer.more[ 1 ].text, link: links.explorer },
        { text: footer.more[ 2 ].text, link: links.blog },
        { text: footer.more[ 3 ].text, link: links.github },
        { text: footer.more[ 4 ].text, link: links.nodeRental },
        { text: footer.more[ 5 ].text, link: links.whitepaper },
        { text: footer.more[ 6 ].text, link: links.disclaimer },
      ],
      moreTitle: footer.moreTitle,
      socialLinks: [
        { text: footer.socialLinks[ 0 ].text, link: links.telegram },
        { text: footer.socialLinks[ 1 ].text, link: links.x },
        { text: footer.socialLinks[ 2 ].text, link: links.discord },
        { text: footer.socialLinks[ 3 ].text, link: links.galxe },
      ],
    };
  }, [ links, footer ] );

  return footerContent;
}; 
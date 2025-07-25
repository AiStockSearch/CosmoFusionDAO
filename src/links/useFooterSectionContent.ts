import { useMemo } from 'react';
import { useLinks } from './useLinks';
import { useLocale } from '../hooks/useLocale';

export const useFooterSectionContent = () => {
  const { links } = useLinks();
  const { t } = useLocale();

  const footerSectionContent = useMemo(() => {
    return {
      title: t('footer.title'),
      description: t('footer.description'),
      buttonText: t('footer.buttonText'),
      buttonLink: links.workWithUs,
      buttonText2: t('footer.buttonText2'),
      buttonLink2: links.contactUs,
      linksTitle: t('footer.linksTitle'),
      subscribeText: t('footer.subscribeText'),
      subscribePlaceholder: t('footer.subscribePlaceholder'),
      subscribeButton: t('footer.subscribeButton'),
      subscribePrivacyPolicy: t('footer.subscribePrivacyPolicy'),
      subscribePrivacyPolicyLink: links.privacyPolicy,
      privacyPolicy: t('footer.privacyPolicy'),
    };
  }, [links, t]);

  return footerSectionContent;
}; 
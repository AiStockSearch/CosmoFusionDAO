import { useMemo } from 'react';
import { LinksConfig, UseLinksReturn, LinkKey } from './types';
import { getLinksConfig, validateLinksConfig } from './linksConfig';

export const useLinks = (): UseLinksReturn => {
  const links = useMemo<LinksConfig>(() => {
    return getLinksConfig();
  }, []);

  const isConfigured = useMemo(() => {
    return validateLinksConfig(links);
  }, [links]);

  const getLink = (key: LinkKey): string => {
    return links[key] || '';
  };

  return {
    links,
    getLink,
    isConfigured,
  };
}; 
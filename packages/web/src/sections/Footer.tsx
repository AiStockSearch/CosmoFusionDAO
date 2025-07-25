import { FooterColumnLinks } from '../components/footer.columnLinks';
import { HeroBlock } from '../components/footer.heroBlock';
import { SocialButton } from '../components/footer.socialButton';
import { SubscribeColumn } from '../components/footer.subscribeColumn';
import { useSectionContent } from '../hooks/useSectionContent';

interface FooterSectionType {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  buttonText2: string;
  buttonLink2: string;
  links: Array<{ text: string; link: string }>;
  linksTitle: string;
  purchase: Array<{ text: string; link: string }>;
  purchaseTitle: string;
  more: Array<{ text: string; link: string }>;
  moreTitle: string;
  socialLinks: Array<{ text: string; link: string }>;
}

const Footer = (): React.JSX.Element => {
  const footerSection = useSectionContent('footer') as FooterSectionType | undefined;
  return (
    <footer className="mx-4 mt-32 xl:ml-56 xl:mr-80 xl:max-w-[70rem]">
      <div className="3xl:flex-row flex flex-col gap-4">
        <HeroBlock
          title={footerSection?.title || ''}
          description={footerSection?.description || ''}
          buttonText={footerSection?.buttonText || ''}
          buttonLink={footerSection?.buttonLink || ''}
          buttonText2={footerSection?.buttonText2 || ''}
          buttonLink2={footerSection?.buttonLink2 || ''}
        />
        <div className="flex flex-col-reverse gap-4 md:flex-row">
          <div className="flex flex-row gap-4">
            <FooterColumnLinks
              links={footerSection?.purchase || []}
              title={footerSection?.purchaseTitle || ''}
            />
            <div className="flex w-80 flex-col gap-4">
              <FooterColumnLinks
                links={footerSection?.more || []}
                title={footerSection?.moreTitle || ''}
              />
            </div>
          </div>
          <SubscribeColumn
            links={footerSection?.links || []}
            title={footerSection?.linksTitle || ''}
          />
        </div>
      </div>
      <div className="my-20">
        <SocialButton links={footerSection?.socialLinks || []} />
      </div>
    </footer>
  );
};

export default Footer;

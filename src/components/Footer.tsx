import { FooterColumnLinks } from '../components/footer.columnLinks';
import { HeroBlock } from '../components/footer.heroBlock';
import { SocialButton } from '../components/footer.socialButton';
import { SubscribeColumn } from '../components/footer.subscribeColumn';
import { useFooterContent, useFooterSectionContent, useLinks } from '../links';

const Footer = (): React.JSX.Element =>
{
  const footerSection = useFooterSectionContent();
  const footerContent = useFooterContent();
  const { links } = useLinks();
  
  return (
    <>
      <div className="mx-4 max-w-screen mt-32 xl:ml-56 xl:mr-80 xl:max-w-[70rem]">
        <div className="3xl:flex-row flex flex-col gap-4">
          <HeroBlock
            title={footerSection.title}
            description={footerSection.description}
            buttonText={footerSection.buttonText}
            buttonLink={footerSection.buttonLink}
            buttonText2={footerSection.buttonText2}
            buttonLink2={footerSection.buttonLink2}
          />
          <div className="flex flex-col-reverse gap-4 md:flex-row">
            <div className="flex flex-row gap-4">
              <FooterColumnLinks
                links={footerContent.purchase}
                title={footerContent.purchaseTitle}
              />
              <div className="flex flex-col gap-4">
                <FooterColumnLinks
                  links={footerContent.more}
                  title={footerContent.moreTitle}
                />
              </div>
            </div>
            <SubscribeColumn
              title={footerContent.linksTitle}
              linksAddons={{
                telegram: links.telegram,
                substack: links.substack
              }}
            />
          </div>
        </div>
      </div>
      <footer className="p-4 bg-[#F5F8FE] border-t-4 border-cyan-900 flex mt-32 xl:ml-56 xl:mr-80 xl:max-w-[70rem]">
        <SocialButton links={footerContent.socialLinks} />
      </footer>
    </>
  );
};

export default Footer;

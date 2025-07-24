import { FooterColumnLinks } from "../components/footer.columnLinks";
import { HeroBlock } from "../components/footer.heroBlock";
import { SocialButton } from "../components/footer.socialButton";
import { SubscribeColumn } from "../components/footer.subscribeColumn";
import { useSectionContent } from "../hooks/useSectionContent";
import footer from "../content/footer";

const Footer = () => {
  const footerSection = useSectionContent('footer');
  return (
    <footer className="xl:max-w-[70rem] ml-4 mr-4 xl:mr-[20rem] xl:ml-[14rem] mt-32">
      <div className="flex flex-col 3xl:flex-row gap-4" >
        <HeroBlock
          title={footerSection.title}
          description={footerSection.description}
          buttonText={footer.buttonText}
          buttonLink={footer.buttonLink}
          buttonText2={footer.buttonText2}
          buttonLink2={footer.buttonLink2}
        />
        <div className="flex flex-col-reverse md:flex-row gap-4">
          <div className="flex flex-row gap-4">
            <FooterColumnLinks
              links={footer.links}
              title={footer.linksTitle}
            />
            <FooterColumnLinks
              links={footer.purchase}
              title={footer.purchaseTitle}
            />
            <div className="flex flex-col gap-4 w-[20rem]">
              <FooterColumnLinks
                links={footer.more}
                title={footer.moreTitle}
              />
            </div>
          </div>
          <SubscribeColumn />
        </div>
      </div>
      <div className="my-20">
        <SocialButton
          links={footer.socialLinks}
        />
      </div>
    </footer>
  );
};

export default Footer;

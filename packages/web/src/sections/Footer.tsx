import { FooterColumnLinks } from "../components/footer.columnLinks";
import { HeroBlock } from "../components/footer.heroBlock";
import { SocialButton } from "../components/footer.socialButton";
import { SubscribeColumn } from "../components/footer.subscribeColumn";
import footer from "../content/footer";

const Footer = () =>
{
  return (
    <footer className="mr-[28rem] ml-[20rem] mt-20">
      <div className="flex flex-col xl:flex-row gap-4" >
        <HeroBlock
          title={footer.title}
          description={footer.description}
          buttonText={footer.buttonText}
          buttonLink={footer.buttonLink}
          buttonText2={footer.buttonText2}
          buttonLink2={footer.buttonLink2}
        />
        <div className="flex flex-col-reverse md:flex-row gap-4">
          <div className="flex flex-row gap-8">
            <FooterColumnLinks
              links={footer.links}
              title={footer.linksTitle}
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

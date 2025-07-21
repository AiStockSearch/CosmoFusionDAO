import React from "react";
import { SocialButton } from "../components/footer.socialButton";
import { HeroBlock } from "../components/footer.heroBlock";
import { FooterColumnLinks } from "../components/footer.columnLinks";
import { SubscribeColumn } from "../components/footer.subscribeColumn";
import footer from "../content/footer";

const Footer = () =>
{
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-16 flex flex-col xl:flex-row gap-4" >
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
            <div className="flex flex-col gap-4 w-1/2">
              <FooterColumnLinks
                links={footer.more}
                title={footer.moreTitle}
              />
            </div>
          </div>
            <SubscribeColumn />
        </div>

      </div>
      <div className="border-t border-gray-200 py-8">
        <SocialButton
          links={footer.socialLinks}
        />
      </div>
    </footer>
  );
};

export default Footer;

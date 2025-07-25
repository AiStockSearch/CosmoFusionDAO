import React, { useEffect, useState, useRef } from "react";
import HeroSection from "./components/hero.section";
import ProblemSection from "./components/problem.sections";
import Footer from "./sections/Footer";
import Reflections from "./components/reflection.sections";
import GettingStarted from "./components/getting.started";
import { useSectionContent } from "./hooks/useSectionContent";
import type { HeroSectionProps } from "./components/hero.section";
import type { ProblemSectionProps } from "./components/problem.sections";
import type { ReflectionsProps } from "./components/reflection.sections";
import type { GettingStarterData } from "./components/getting.started";
import
{
  SectionAnchorProvider,
  useSectionAnchor,
} from "./components/SectionAnchorContext";
import { Helmet } from "react-helmet-async";
import sectionSeo from "./content/sectionSeo.json";
import { useLocale } from "./hooks/useLocale";
import { ImmutableJournalSection } from "./components";
import UseCases from "./components/cases.work";
import PrivacyPolicy from './components/privacy.policy';

// Удалены неиспользуемые переменные defaultLang, problemSection, reflectionSection, solutionSection, evolutionSection, governanceSection
// Маппинг Table of Contents на id секций (тот же, что в hero.section.tsx)
const sectionAnchors = [
  "hero", // новая нулевая секция
  "lonely-astronauts",
  "visor-reflection",
  "thousands-look-galaxy",
  "democracy-explorers",
  "lone-to-collective-mind",
  "become-collective-mind",
  "dao-logbook",
  "glossalarium",
];

const SectionWithAnchor: React.FC<{
  id: string;
  children: React.ReactNode;
}> = ( { id, children } ) =>
  {
  const ref = useRef<HTMLElement | null>(null);
  const { registerSection } = useSectionAnchor();
  useEffect(() => {
    registerSection(id, ref);
  }, [id, registerSection]);
  return (
    <section id={id} ref={ref}>
      {children}
    </section>
  );
};

type SectionKey =
  | "hero"
  | "problem"
  | "reflection"
  | "solution"
  | "evolution"
  | "governance"
  | "gettingStarted";

function getSectionFromHash(hash: string): SectionKey {
  if ( !hash ) return "hero";
  const map: Record<string, SectionKey> = {
    "#hero": "hero",
    "#problem": "problem",
    "#reflection": "reflection",
    "#solution": "solution",
    "#evolution": "evolution",
    "#governance": "governance",
    "#getting-started": "gettingStarted",
  };
  return map[ hash ] || "hero";
}

const LandingPage: React.FC = (): React.JSX.Element => {
  const { locale, setLocale } = useLocale();
  const heroSection = useSectionContent(
    "hero"
  ) as HeroSectionProps[ "heroPageEn" ];
  const motionPhrase = useSectionContent( "motionPhrase" ) as { text: string };
  const gettingStartedSection = useSectionContent(
    "gettingStarted"
  ) as GettingStarterData;

  // Сброс scroll и hash при первом монтировании
  useEffect(() => {
    if (window.location.hash) {
      window.scrollTo(0, 0);
      window.history.replaceState( null, "", window.location.pathname );
    }
  }, []);

  const [currentSection, setCurrentSection] = useState<SectionKey>(
    getSectionFromHash( window.location.hash )
  );
  useEffect(() => {
    const onHashChange = () =>
      setCurrentSection( getSectionFromHash( window.location.hash ) );
    window.addEventListener( "hashchange", onHashChange );
    return () => window.removeEventListener( "hashchange", onHashChange );
  }, []);

  // Показываем PrivacyPolicy, если hash #privacy-policy
  if (window.location.hash === '#privacy-policy') {
    return <PrivacyPolicy />;
  }

  const seoData =
    ( sectionSeo as any )[ currentSection ]?.[ locale ] ||
    ( sectionSeo as any ).hero[ locale ];

  return (
    <>
    <SectionAnchorProvider>
      <Helmet>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <link rel="canonical" href="https://cosmofusion.app/" />
        {/* Open Graph */}
        <meta property="og:title" content={seoData.title} />
        <meta property="og:description" content={seoData.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://cosmofusion.app/" />
          <meta
            property="og:image"
            content="https://cosmofusion.app/logo192.png"
          />
        <meta property="og:image:alt" content="CosmoFusion DAO Astronaut" />
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seoData.title} />
        <meta name="twitter:description" content={seoData.description} />
          <meta
            name="twitter:image"
            content="https://cosmofusion.app/logo192.png"
          />
        <meta name="twitter:image:alt" content="CosmoFusion DAO Astronaut" />
        <meta name="twitter:site" content="@cosmofusiondao" />
        <meta name="twitter:creator" content="@cosmofusiondao" />
      </Helmet>
        {/* Language Switcher */}
      <div className="min-h-screen bg-white">
        {/*
          [en] Hero section:
          - Purpose: To immediately immerse the user in the core idea of
            CosmoFusion DAO.
          - Explains the project's mission, the value of collective intelligence,
            and why the DAO format is chosen.
          - Sets the emotional and conceptual tone for the entire product,
            forming the first impression and user expectations.
          - Business value: Increases engagement, reduces bounce rate, and
            motivates to read further.
          [ru] Секция Hero:
          - Назначение: Мгновенно погружает пользователя в основную идею
            CosmoFusion DAO.
          - Объясняет миссию проекта, ценность коллективного разума и выбор
            формата DAO.
          - Формирует эмоциональный и концептуальный тон всего продукта, задает
            первое впечатление и ожидания пользователя.
          - Бизнес-смысл: Повышает вовлечённость, снижает bounce rate,
            мотивирует читать дальше.
        */}
        <SectionWithAnchor id={sectionAnchors[0]}>
          <HeroSection />
        </SectionWithAnchor>
        <div className="min-h-1/4 mt-16 flex flex-col items-center justify-center bg-gray-200 px-4 py-14">
          <span className="font-share-tech-mono text-center text-[1.1rem]  font-bold text-gray-900 md:w-[42rem]">
            {heroSection.subtitle}
          </span>
        </div>
        {/*
          [en] Problem section:
          - Purpose: To clearly articulate the pain points and limitations of
            existing solutions/platforms.
          - Shows the real-world problems that CosmoFusion DAO is designed to
            solve, making the value proposition explicit.
          - Helps the user identify with the described issues, increasing
            relevance and trust.
          - Business value: Justifies the need for the product, prepares the
            user for the solution narrative.
          [ru] Секция Problem:
          - Назначение: Четко формулирует болевые точки и ограничения
            существующих решений/платформ.
          - Показывает реальные проблемы, которые решает CosmoFusion DAO, делая
            ценностное предложение явным.
          - Помогает пользователю идентифицировать себя с описанными проблемами,
            повышая релевантность и доверие.
          - Бизнес-смысл: Обосновывает необходимость продукта, подготавливает к
            рассказу о решении.
        */}
        <SectionWithAnchor id={sectionAnchors[1]}>
          <ProblemSection type="problem" />
        </SectionWithAnchor>
        {/*
          [en] Reflection section:
          - Purpose: To highlight psychological and cognitive barriers (biases,
            echo chambers) that hinder effective decision-making.
          - Explains why even the best tools/platforms can fail without
            collective reflection and self-critique.
          - Business value: Educates the user, builds authority, and sets up the
            need for transparency and feedback in the DAO.
          [ru] Секция Reflection:
          - Назначение: Подчеркивает психологические и когнитивные барьеры
            (предвзятость, эхо-камеры), мешающие эффективным решениям.
          - Объясняет, почему даже лучшие инструменты могут не работать без
            коллективной рефлексии и самокритики.
          - Бизнес-смысл: Просвещает пользователя, формирует авторитет,
            подводит к необходимости прозрачности и обратной связи в DAO.
        */}
        <SectionWithAnchor id={sectionAnchors[2]}>
          <Reflections type="reflection" />
        </SectionWithAnchor>
        {/*
          [en] Solution section:
          - Purpose: To present the unique mechanisms and features of
            CosmoFusion DAO that address the previously described problems.
          - Details how collective intelligence, transparency, and evolutionary
            processes are implemented in the product.
          - Business value: Demonstrates innovation, builds trust, and motivates
            to join or try the platform.
          [ru] Секция Solution:
          - Назначение: Показывает уникальные механизмы и фичи CosmoFusion DAO,
            решающие ранее описанные проблемы.
          - Детализирует, как реализованы коллективный разум, прозрачность и
            эволюционные процессы.
          - Бизнес-смысл: Демонстрирует инновационность, формирует доверие,
            мотивирует присоединиться или попробовать платформу.
        */}
        <SectionWithAnchor id={sectionAnchors[3]}>
          <ProblemSection type="solution" />
        </SectionWithAnchor>
        {/*
          [en] Governance section:
          - Purpose: To explain the democratic structure, voting, and decision-making processes in CosmoFusion DAO.
          - Shows how the community is empowered, how rules evolve, and how responsibility is distributed.
          - Business value: Reduces fears of centralization, increases trust, and encourages active participation.
          [ru] Секция Governance:
          - Назначение: Объясняет демократическую структуру, процессы голосования и принятия решений в CosmoFusion DAO.
          - Показывает, как сообщество наделяется полномочиями, как эволюционируют правила и распределяется ответственность.
          - Бизнес-смысл: Снижает опасения централизации, повышает доверие, стимулирует активное участие.
        */}
        <SectionWithAnchor id={sectionAnchors[4]}>
          <Reflections type="governance" />
        </SectionWithAnchor>
        {/*
          [en] Evolution section:
          - Purpose: To illustrate the adaptability and learning capacity of CosmoFusion DAO.
          - Explains how the system and community grow, learn from mistakes, and improve over time.
          - Business value: Shows long-term vision, reassures users that the platform is not static, and encourages ongoing engagement.
          [ru] Секция Evolution:
          - Назначение: Иллюстрирует адаптивность и обучаемость CosmoFusion DAO.
          - Объясняет, как система и сообщество растут, учатся на ошибках и совершенствуются со временем.
          - Бизнес-смысл: Показывает долгосрочное видение, убеждает, что платформа не статична, мотивирует к постоянному участию.
        */}
        {/* Evolution Process (index 5) — без id */}
        <SectionWithAnchor id={sectionAnchors[5]}>
          <ProblemSection type="evolution" />
        </SectionWithAnchor>
        {/*
          [en] Motion Phrase section: Motivational or transitional block, highlights the dynamic nature of truth and the importance of continuous improvement.
          [ru] Секция Motion Phrase: Мотивационный или переходный блок, подчеркивает динамичность истины и важность постоянного совершенствования.
        */}
        <SectionWithAnchor id={sectionAnchors[6]}>
          <div className="min-h-1/4 flex flex-col items-center justify-center bg-gray-200 px-4 py-14">
            <span className="font-share-tech-mono text-center text-[1.2rem]  font-bold text-gray-900 md:w-[42rem]">
              {motionPhrase.text}
            </span>
          </div>
        </SectionWithAnchor>
        {/*
          [en] Getting Started section:
          - Purpose: To provide actionable steps and clear onboarding for new users.
          - Removes barriers to entry, answers “what next?”, and increases conversion to active participation.
          - Business value: Maximizes user activation, reduces churn, and supports community growth.
          [ru] Секция Getting Started:
          - Назначение: Дает конкретные шаги и понятный онбординг для новых пользователей.
          - Снимает барьеры входа, отвечает на вопрос «что дальше?» и увеличивает конверсию в активное участие.
          - Бизнес-смысл: Максимизирует активацию пользователей, снижает отток, поддерживает рост сообщества.
        */}
        <SectionWithAnchor id={sectionAnchors[7]}>
          <GettingStarted gettingStarterData={gettingStartedSection} />
        </SectionWithAnchor>
          <UseCases />
        <SectionWithAnchor id={sectionAnchors[8]}>
          <ImmutableJournalSection />
        </SectionWithAnchor>
        <Footer />
      </div>
    </SectionAnchorProvider>
      <div className="absolute top-4 right-4 z-50 gap-2 flex flex-row">
        <button
          onClick={() => setLocale( "ru" )}
          className="font-share-tech-mono font-bold hover:bg-gray-100 rounded-md px-3 pt-2 pb-1 border border-cyan-900 hover:border-cyan-400 bg-[#F5F8FE] hover:bg-cyan-900 hover:border-[#F5F8FE] hover:text-white transition-all duration-300"
        >
          RU
        </button>
        <button
          onClick={() => setLocale( "en" )}
          className="font-share-tech-mono font-bold hover:bg-gray-100 rounded-md px-3 pt-2 pb-1 border border-cyan-900 hover:border-cyan-400 bg-[#F5F8FE] hover:bg-cyan-900 hover:border-[#F5F8FE] hover:text-white transition-all duration-300"
        >
          EN
        </button>
      </div>
    </>
  );
};

export default LandingPage;

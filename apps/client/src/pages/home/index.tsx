import { HeroSection } from "./ui/HeroSection";
import { Footer } from "./ui/Footer";
import { SkillsSection } from "./ui/SkillsSection";

export const Home = () => {
  return (
    <>
      <HeroSection />
      {/* <FeaturedList /> */}
      <SkillsSection />
      <Footer />
    </>
  );
};

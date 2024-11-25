import CTASection from "@/components/landing_page/CTASection";
import FeaturesSection from "@/components/landing_page/Features";
import HeroSection from "@/components/landing_page/HeroSection";
import { HowItWorksSection } from "@/components/landing_page/HowItWorksSection.";
import WelcomeSection from "@/components/landing_page/WelcomeSection";

const App = () => {
  return (
    <main className="bg-[#F6F6F6]">
      <HeroSection />
      <WelcomeSection />
      <FeaturesSection />
      <HowItWorksSection />
      <CTASection />
    </main>
  );
};

export default App;
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import GamesSection from "@/components/GamesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import DownloadSection from "@/components/DownloadSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background noise">
      <Navigation />
      <HeroSection />
      <GamesSection />
      <HowItWorksSection />
      <DownloadSection />
      <Footer />
    </main>
  );
};

export default Index;

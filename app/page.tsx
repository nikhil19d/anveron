import { AboutSection } from "@/components/AboutSection";
import { CTASection } from "@/components/CTASection";
import { DesignFromScratchPage } from "@/components/DesignFromScratchPage";
import { Footer } from "@/components/Footer";
import { AuditPage } from "@/components/FreeAuditPage";
import { HeroSection } from "@/components/HeroSection";
import { Navigation } from "@/components/Navigation";
import { RedesignWebsitePage } from "@/components/RedesignWebsitePage";
import { ServicesSection } from "@/components/ServiceSection";
import { ProcessSection } from "@/components/ProcessSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ProcessSection />
        <CTASection />
        <DesignFromScratchPage />
        <RedesignWebsitePage />
        <AuditPage />
      </main>
      <Footer />
    </div>
  )
}

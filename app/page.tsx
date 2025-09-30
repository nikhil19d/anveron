import { AboutSection } from "@/components/AboutSection";
import { CTASection } from "@/components/CTASection";
import { DesignFromScratchPage } from "@/components/DesignFromScratchPage";
import { Footer } from "@/components/Footer";
import { FreeAuditPage } from "@/components/FreeAuditPage";
import { HeroSection } from "@/components/HeroSection";
import { Navigation } from "@/components/Navigation";
import { ProcessSection } from "@/components/ProcessSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { RedesignWebsitePage } from "@/components/RedesignWebsitePage";
import { ServicesSection } from "@/components/ServiceSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ProjectsSection />
        <ProcessSection />
        <CTASection />
        <DesignFromScratchPage />
        <RedesignWebsitePage />
        <FreeAuditPage />
      </main>
      <Footer />
    </div>
  )
}

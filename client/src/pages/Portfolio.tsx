import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { TechnicalSkills } from "@/components/TechnicalSkills";
import { InterpersonalSkills } from "@/components/InterpersonalSkills";
import { EducationTimeline } from "@/components/EducationTimeline";
import { ProjectsSection } from "@/components/ProjectsSection";
import { CodingProfiles } from "@/components/CodingProfiles";
import { CertificationsSection } from "@/components/CertificationsSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { ResumeModal } from "@/components/ResumeModal";
import { FloatingResumeButton } from "@/components/FloatingResumeButton";

export default function Portfolio() {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  const openResumeModal = () => setIsResumeModalOpen(true);
  const closeResumeModal = () => setIsResumeModalOpen(false);

  return (
    <div className="min-h-screen bg-background" data-testid="page-portfolio">
      <Navigation onResumeClick={openResumeModal} />
      
      <main>
        <HeroSection onResumeClick={openResumeModal} />
        <TechnicalSkills />
        <InterpersonalSkills />
        <EducationTimeline />
        <ProjectsSection />
        <CodingProfiles />
        <CertificationsSection />
        <ContactSection />
      </main>

      <Footer />
      
      <FloatingResumeButton onClick={openResumeModal} />
      <ResumeModal isOpen={isResumeModalOpen} onClose={closeResumeModal} />
    </div>
  );
}

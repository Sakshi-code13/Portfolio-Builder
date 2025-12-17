import { useTypingEffect } from "@/hooks/useTypingEffect";
import { personalInfo, roles, professionalSummary } from "@/data/portfolioData";
import { Button } from "@/components/ui/button";
import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";
import profileImage from "@assets/Pic_1765995895358.png";

const floatingIcons = [
  { name: "Docker", delay: "0s", position: "top-20 left-10" },
  { name: "K8s", delay: "1s", position: "top-32 right-20" },
  { name: "AWS", delay: "2s", position: "bottom-40 left-20" },
  { name: "Azure", delay: "1.5s", position: "bottom-32 right-10" },
  { name: "React", delay: "0.5s", position: "top-48 left-1/4" },
  { name: "Git", delay: "2.5s", position: "bottom-48 right-1/4" },
];

interface HeroSectionProps {
  onResumeClick: () => void;
}

export function HeroSection({ onResumeClick }: HeroSectionProps) {
  const typedRole = useTypingEffect(roles, 80, 40, 1500);

  const scrollToNext = () => {
    const skillsSection = document.getElementById("skills");
    if (skillsSection) {
      skillsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
      data-testid="section-hero"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5" />
      
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-float" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-border/20 rounded-full animate-spin-slow opacity-20" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-border/10 rounded-full animate-spin-slow opacity-10" style={{ animationDirection: "reverse", animationDuration: "30s" }} />
      </div>

      {floatingIcons.map((icon) => (
        <div
          key={icon.name}
          className={`absolute ${icon.position} hidden lg:flex items-center justify-center w-12 h-12 rounded-lg bg-card/50 backdrop-blur-sm border border-border/50 text-xs font-mono text-muted-foreground animate-float`}
          style={{ animationDelay: icon.delay }}
        >
          {icon.name}
        </div>
      ))}

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="relative animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full blur-md opacity-75 animate-pulse-glow" />
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 rounded-full overflow-hidden border-4 border-background">
                <img
                  src={profileImage}
                  alt="Sakshi Jha"
                  className="w-full h-full object-cover"
                  data-testid="img-profile"
                />
              </div>
            </div>
            <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-background animate-bounce-slow" />
          </div>

          <div className="flex-1 text-center lg:text-left space-y-6">
            <div className="animate-fade-in-down" style={{ animationDelay: "0.3s" }}>
              <p className="text-muted-foreground text-sm sm:text-base mb-2">
                Hello, I'm
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold">
                <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  {personalInfo.name}
                </span>
              </h1>
            </div>

            <div
              className="animate-fade-in-up"
              style={{ animationDelay: "0.4s" }}
            >
              <div className="h-8 sm:h-10 flex items-center justify-center lg:justify-start">
                <span className="text-lg sm:text-xl lg:text-2xl font-medium text-foreground">
                  {typedRole}
                </span>
                <span className="w-0.5 h-6 sm:h-8 bg-foreground ml-1 animate-blink" />
              </div>
            </div>

            <p
              className="text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto lg:mx-0 animate-fade-in-up"
              style={{ animationDelay: "0.5s" }}
              data-testid="text-summary"
            >
              {professionalSummary}
            </p>

            <p
              className="text-lg sm:text-xl font-serif italic text-muted-foreground/80 animate-fade-in-up"
              style={{ animationDelay: "0.55s" }}
            >
              "{personalInfo.tagline}"
            </p>

            <div
              className="flex flex-wrap items-center justify-center lg:justify-start gap-3 animate-fade-in-up"
              style={{ animationDelay: "0.6s" }}
            >
              <Button
                onClick={onResumeClick}
                className="bg-gradient-to-r from-blue-500 to-purple-500"
                data-testid="button-resume-hero"
              >
                Download Resume
              </Button>
              <Button
                variant="outline"
                asChild
              >
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="link-linkedin-hero"
                >
                  <Linkedin className="w-4 h-4 mr-2" />
                  LinkedIn
                </a>
              </Button>
              <Button
                variant="outline"
                asChild
              >
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="link-github-hero"
                >
                  <Github className="w-4 h-4 mr-2" />
                  GitHub
                </a>
              </Button>
            </div>

            <div
              className="flex items-center justify-center lg:justify-start gap-4 pt-4 animate-fade-in-up"
              style={{ animationDelay: "0.7s" }}
            >
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                data-testid="link-email-hero"
              >
                <Mail className="w-4 h-4" />
                {personalInfo.email}
              </a>
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-foreground transition-colors animate-bounce-slow"
        aria-label="Scroll to skills section"
        data-testid="button-scroll-down"
      >
        <ChevronDown className="w-8 h-8" />
      </button>
    </section>
  );
}

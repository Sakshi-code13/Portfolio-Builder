import { useState } from "react";
import { technicalSkillsData, personalInfo } from "@/data/portfolioData";
import { useInView } from "@/hooks/useInView";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Server, Cloud, Code, Activity, Layout,
  Download, Phone, Mail, MessageCircle,
  ExternalLink
} from "lucide-react";
import { SiLinkedin, SiGithub, SiWhatsapp } from "react-icons/si";
import { cn } from "@/lib/utils";

const iconMap: Record<string, typeof Server> = {
  Server,
  Cloud,
  Code,
  Activity,
  Layout,
};

const roleKeys = ["devops", "cloud", "sde", "sre", "frontend"] as const;

export function TechnicalSkills() {
  const { ref, isInView } = useInView({ threshold: 0.1 });
  const [openItem, setOpenItem] = useState<string | undefined>(undefined);

  const handleDownload = (resumeFile: string) => {
    const link = document.createElement("a");
    link.href = `/resumes/${resumeFile}`;
    link.download = resumeFile;
    link.click();
  };

  const handleContact = (type: string) => {
    switch (type) {
      case "phone":
        window.location.href = `tel:${personalInfo.phone}`;
        break;
      case "email":
        window.location.href = `mailto:${personalInfo.email}?subject=Portfolio Inquiry`;
        break;
      case "whatsapp":
        window.open(
          `https://wa.me/${personalInfo.phone.replace("+", "")}?text=Hi Sakshi! I found your portfolio and would like to connect.`,
          "_blank"
        );
        break;
      case "linkedin":
        window.open(personalInfo.linkedin, "_blank");
        break;
      case "github":
        window.open(personalInfo.github, "_blank");
        break;
    }
  };

  return (
    <section
      id="skills"
      className="py-20 sm:py-24 lg:py-32 bg-gradient-to-b from-background to-accent/20"
      data-testid="section-skills"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={cn(
            "text-center mb-12 transition-all duration-700",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              Technical Skills
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Multi-domain expertise spanning DevOps, Cloud Engineering, Software Development, 
            Site Reliability, and Frontend Development. Click on any role to explore skills, 
            projects, certifications, and download role-specific resumes.
          </p>
        </div>

        <Accordion
          type="single"
          collapsible
          value={openItem}
          onValueChange={setOpenItem}
          className="space-y-4"
        >
          {roleKeys.map((key, index) => {
            const role = technicalSkillsData[key];
            const IconComponent = iconMap[role.icon];

            return (
              <AccordionItem
                key={key}
                value={key}
                className={cn(
                  "border-none transition-all duration-500",
                  isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                )}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <Card className="overflow-hidden">
                  <AccordionTrigger
                    className="px-6 py-5 hover:no-underline group"
                    data-testid={`accordion-trigger-${key}`}
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className={cn(
                          "w-12 h-12 rounded-lg flex items-center justify-center bg-gradient-to-br text-white transition-transform group-hover:scale-110",
                          role.color
                        )}
                      >
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <div className="text-left">
                        <h3 className="text-lg font-semibold">{role.title}</h3>
                        <p className="text-sm text-muted-foreground">
                          {role.skills.slice(0, 3).join(" • ")} + more
                        </p>
                      </div>
                    </div>
                  </AccordionTrigger>

                  <AccordionContent className="px-6 pb-6">
                    <div className="space-y-8 pt-4">
                      <div>
                        <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                          Key Skills
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {role.skills.map((skill) => (
                            <Badge
                              key={skill}
                              variant="secondary"
                              className="text-xs"
                              data-testid={`badge-skill-${skill.toLowerCase().replace(/[^a-z0-9]/g, "-")}`}
                            >
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                          Featured Projects
                        </h4>
                        <div className="grid sm:grid-cols-2 gap-4">
                          {role.projects.map((project) => (
                            <Card
                              key={project.name}
                              className="p-4 bg-accent/30"
                              data-testid={`card-project-${project.name.toLowerCase().replace(/\s+/g, "-")}`}
                            >
                              <h5 className="font-semibold mb-1">{project.name}</h5>
                              <p className="text-sm text-muted-foreground mb-2">
                                {project.description}
                              </p>
                              <div className="flex flex-wrap gap-1 mb-2">
                                {project.tech.map((t) => (
                                  <Badge key={t} variant="outline" className="text-xs">
                                    {t}
                                  </Badge>
                                ))}
                              </div>
                              <p className="text-xs font-medium text-green-600 dark:text-green-400">
                                {project.highlight}
                              </p>
                            </Card>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                          Certifications
                        </h4>
                        <div className="flex flex-wrap gap-3">
                          {role.certifications.map((cert) => (
                            <Badge
                              key={cert.name}
                              className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-foreground border border-border"
                            >
                              {cert.name} ({cert.year})
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-4 border-t border-border">
                        <Button
                          onClick={() => handleDownload(role.resumeFile)}
                          className={cn("bg-gradient-to-r text-white", role.color)}
                          data-testid={`button-download-${key}`}
                        >
                          <Download className="w-4 h-4 mr-2" />
                          Download {role.title} Resume
                        </Button>

                        <div className="flex items-center gap-2">
                          <Button
                            variant="outline"
                            size="icon"
                            onClick={() => handleContact("phone")}
                            data-testid={`button-phone-${key}`}
                          >
                            <Phone className="w-4 h-4" />
                          </Button>
                          <Button
                            variant="outline"
                            size="icon"
                            onClick={() => handleContact("email")}
                            data-testid={`button-email-${key}`}
                          >
                            <Mail className="w-4 h-4" />
                          </Button>
                          <Button
                            variant="outline"
                            size="icon"
                            onClick={() => handleContact("whatsapp")}
                            className="text-green-600 hover:text-green-700"
                            data-testid={`button-whatsapp-${key}`}
                          >
                            <SiWhatsapp className="w-4 h-4" />
                          </Button>
                          <Button
                            variant="outline"
                            size="icon"
                            onClick={() => handleContact("linkedin")}
                            className="text-blue-600 hover:text-blue-700"
                            data-testid={`button-linkedin-${key}`}
                          >
                            <SiLinkedin className="w-4 h-4" />
                          </Button>
                          <Button
                            variant="outline"
                            size="icon"
                            onClick={() => handleContact("github")}
                            data-testid={`button-github-${key}`}
                          >
                            <SiGithub className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </AccordionContent>
                </Card>
              </AccordionItem>
            );
          })}
        </Accordion>
      </div>
    </section>
  );
}

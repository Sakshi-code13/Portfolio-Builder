import { personalInfo, languages, interests } from "@/data/portfolioData";
import { Badge } from "@/components/ui/badge";
import { Heart, Code } from "lucide-react";
import { SiLinkedin, SiGithub } from "react-icons/si";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border" data-testid="footer">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-serif font-bold text-xl bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent mb-3">
              Sakshi.
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              DevOps & Cloud Engineer building scalable, reliable, and secure infrastructure.
            </p>
            <div className="flex gap-3">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-accent flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
                data-testid="link-footer-linkedin"
              >
                <SiLinkedin className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-accent flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
                data-testid="link-footer-github"
              >
                <SiGithub className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Languages Known</h4>
            <div className="flex flex-wrap gap-2">
              {languages.map((lang) => (
                <Badge key={lang} variant="secondary">
                  {lang}
                </Badge>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Interests</h4>
            <div className="flex flex-wrap gap-2">
              {interests.slice(0, 4).map((interest) => (
                <Badge key={interest} variant="outline" className="text-xs">
                  {interest}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <p className="flex items-center gap-1">
              Made with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> by Sakshi Jha
            </p>
            <p className="flex items-center gap-1">
              <Code className="w-4 h-4" />
              {currentYear} All rights reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
